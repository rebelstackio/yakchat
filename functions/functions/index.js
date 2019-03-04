const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

/**
 * @description return the custom claims Object
 * @param {Integer} type 
 */
function getCustomClaims (type) {
	switch (type) {
		case 1:
			// operator
			return {
				accessLevel: 3,
				admin: false
			};
		case 2:
			// client t0
			return {
				accessLevel: 5,
				admin: false
			}
		case 3:
			// client t1
			return {
				accessLevel: 6,
				admin: false
			}
		case 4: 
			// client t2
			return {
				accessLevel: 7,
				admin: false
			}
		case 5: 
			// admin
			return {
				accessLevel: 10,
				admin: true
			}
		default:
			// registrant
			return {
				accessLevel: 2,
				admin: false
			}
	}
}
/**
 * @description sign up API handle role base with firebase custom claims
 * recive { email: 'email@domain.com', password: '123456', displayName: 'test', type: 0 ... 5 }
 */
exports.signup = functions.https.onCall((param) => {
	const {email, password, displayName, type} = param;
	return admin.auth().createUser({
		email: email,
		displayName: displayName,
		emailVerified: false,
		password: password,
		disabled: false
	})
	.then((userRecord) => {
		console.log("Successfully created new user " + displayName, userRecord.uid);
		const customClaims = getCustomClaims(type);
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
	.catch((error) => {
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