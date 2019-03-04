const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp({
	credential: admin.credential.cert({
	  projectId: 'yakchat-20e2a',
	  clientEmail: 'firebase-adminsdk-zk4g7@yakchat-20e2a.iam.gserviceaccount.com',
	  private_key_id: "0054c34f7afeb3b9d6c3fb92fe4d73871c2d4f2d",
	  privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDQbaUjEc7KIxke\nKtY6sTGmFrj1x1Lx/wIDjAeeUxxUYQgsy5CGJdOT4AcVWFkHAiZA5jqatOp08ri9\n40FgI2Iyb8l7J9oxrY0CFFrOuHGMZx7hxMpOh4pDbc5WaX9MTjpQM83X4Nrqkf0q\n+wEIiE2engWXrLXnI3j1rVOWVxSPifySpClmDl2BAcSOWFsS2+6pWfdVJQym6Mxx\nssUT0+5lnRl8KhNEv8Dc8qI+jppbQZDCSoJDiPi6fHmpIGksPAfY9DyuRYds+XFL\nyMqy42TEIUzU13Zu6fsUIDBfpPVJYOQwUQl3iRP5MN2NKOWwPZh6tb94wlWeQZq/\nsRYpORNTAgMBAAECggEACcYo7Gwwdgk1625XbbKTVFyt0sf30bJc/hz9QUVYR3RM\nOL5ZEJL9Veqd2mt/GhWI0ebm0HKm3Gu13yDx/WSoMIGBtMoWVz/Yvd3sSwcz1MFq\namyOKI2YBCtF9ezSxxmToXqa1UKA2AD9ms9Hg20E55w1QSFPxgv2gN4RoYC25zfP\nIh5Lgi+1nDXDAbN95NQYFqwEZB+GJUlAZaS1H0LX0h2Bwwj2mqWFu6sI9AO1d4bX\naOU+nWWnwdcnopK/lStOOKkNwJUjKo4f3AM8wdVMceACwdyRSr0BxUbNQpZiJMua\nOT3r9I2Yxksom2cO/Z1QggQt/6KR7nZ6KApDa/3z8QKBgQDyIv91ctMSKZ4m2c+4\nCiDxspEs/KapvXXKe3F/vWBeLkdwH9/8XnpdJUyvf/xMcsmTgOAuUYoW9wiYSzxO\ncoNouYucZOcuktWhYIlVISmvjEZ0SYWjKJrGg2f4+P5sCdpFI3rTBpgyFjKRhGB5\nNiflEmDUBo25moc0FmJousxwAwKBgQDcXJUZVXJnk+p1JGL0Beydn7Q8S0opPEf1\n6t4kA0O362Oy/p5eAH23pjmVfxW5qvgS3kk9taYOfrKKCOMADU2vLVRzRPAdWlhB\nZJBAqScL+a9UCTKXpj5vyqfcqC1xb1wwCx33Qv1IfFnGYJ+kPSbbvOfBnvSyleph\nDdAq4ck2cQKBgQDB5yjv4u4IQ2+06QQg+2t6YmdDwWet0lz7s3Mmun7rrN/keIIk\nVXxkDzSj7jga+GlYSAI+1WliDp3BZ655m9aEDOIycdN4Rnnxa59OnuoE/K6G/UGZ\ncTDQ+/ZNOQh1eEZky47WYxeKNKB2S63+I1I7bUZBRKZGFetj2PEhsUV6BQKBgEUx\nBNf5jnybY0j47eE1YwBzPwKXmWetN+Mtpiakp8S+MoXnkQ5vFQpvNTGNv+KWnmI+\nTb0EpmlyutjAxZYklznj/9pZ0RNGZOPTkb/b3RjTg4vdf3dCieRMO7z7SZmOn+Gt\n+/DBpgn2kbHKcRX+5Y6lmBehs6/HhtqGndB5KNbhAoGAedFX5keGMjyaj4t28Osp\npVh7q/XB0km6Lohf4HAi419Vw+3PLwO0euSsBeqCbzY9MOxLkkqA0daJh+lIgNJF\ntNClxwhYtNeu8f4t5Kd2FLocUVRB34J24E32q814JZdUqOr4mlVl2Ls+LaylhFy8\no64XiEwpvTn9b6WC7YpPocI=\n-----END PRIVATE KEY-----\n'
	  
	}),
	databaseURL:'https://yakchat-20e2a.firebaseio.com/'
  });

/**
 * create a new operator with custom claim
 */
exports.operatorSignUp = functions.https.onCall((param) => {
	const {email, password} = param;
	return admin.auth().createUser({
		email: email,
		emailVerified: false,
		password: password,
		disabled: false
	})
	.then(function(userRecord) {
		console.log("Successfully created new operator:", userRecord.uid);
		const customClaims = {
			operator: true,
			accessLevel: 3,
			admin: false
		};
		// Set custom user claims on this newly created user.
		return admin.auth().setCustomUserClaims(userRecord.uid, customClaims)
		.then(() => {
			// Update real-time database to notify client to force refresh.
			const metadataRef = admin.database().ref("metadata/" + userRecord.uid);
			// Set the refresh time to the current UTC timestamp.
			// This will be captured on the client to force a token refresh.
			return metadataRef.set({refreshTime: new Date().getTime()});
		})
		.catch(error => {
			console.log(error);
		});
	})
	.catch(function(error) {
		console.log("Error creating new user:", error);
	});
});
/**
 * handle the sing up for the free client t0
 */
exports.clientSignup = functions.https.onCall((param) => {
	const {email, password} = param;
	return admin.auth().createUser({
		email: email,
		emailVerified: false,
		password: password,
		disabled: false
	})
	.then(function(userRecord) {
		console.log("Successfully created new client t0:", userRecord.uid);
		const customClaims = {
			accessLevel: 5,
			admin: false
		};
		// Set custom user claims on this newly created user.
		return admin.auth().setCustomUserClaims(userRecord.uid, customClaims)
		.then(() => {
			// Update real-time database to notify client to force refresh.
			const metadataRef = admin.database().ref("metadata/" + userRecord.uid);
			// Set the refresh time to the current UTC timestamp.
			// This will be captured on the client to force a token refresh.
			return metadataRef.set({refreshTime: new Date().getTime()});
		})
		.catch(error => {
			console.log(error);
		});
	})
	.catch(function(error) {
		console.log("Error creating new user:", error);
	});
})

exports.crateThread = functions.https.onCall((data, context) => {
	let { id, type, iniMsg, email, channel } = data;
	let from = 'CLIENT';
	let isNew = true;
	if (type === 'anonymous') {
		iniMsg = 'Welcome to Yak-chat, you can signup in your upper right corner';
		from = 'SERVER'
		admin
			.database()
			.ref("/clients/" + id + ":" + visitor + "/")
			.set(type + ',' + email);
	} else {
		admin.database().ref(`/clients/`)
		
		admin
			.database()
			.ref("/clients/"  + id + ":" + registrant + "/")
			.set(type + ',' + email);
	}
	admin
		.database()
		.ref('/messages/' + Buffer.from(channel + ':' + id).toString('base64'))
		.push()
		.set(
			new Date().toDateString() +
			',' + Buffer.from(iniMsg).toString('base64') +
			',' + from
		);
	return true;
})