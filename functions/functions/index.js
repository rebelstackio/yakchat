const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer')
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
	const {email, password, displayName, type, domain} = param;
	return admin.auth().createUser({
		email: email,
		displayName: displayName,
		emailVerified: false,
		password: password,
		disabled: false
	})
	.then((userRecord) => {
		sendEmail(
			email,
			'/verification/#' + userRecord.uid,
			'https://rebelstackio.github.io/yakchat',
			'Yak Chat Email Verification',
			'Welcome to Yak Chat ' + displayName,
			'To go verified'
		);
		console.log("Successfully created new user " + displayName, userRecord.uid);
		const customClaims = getCustomClaims(type);
		if (type === 2) {
			admin.database().ref('domains/'+ userRecord.uid)
			.set({
				1: domain,
				2: '' //this will be the channel
			});
		}
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
/**
 * send the verification link again
 */
exports.reSendVerification = functions.https.onCall((data) => {
	const { uid, email, displayName } = data;
	sendEmail(
		email,
		'/verification/#' + uid,
		'https://rebelstackio.github.io/yakchat',
		'Yak Chat Email Verification',
		'Welcome to Yak Chat ' + displayName,
		'To go verified'
	);
	return true;
})
/**
 * Handle email code verification
 */
exports.submitVerification = functions.https.onRequest((req, resp) => {
	const uid = req.query.u;
	resp.set('Access-Control-Allow-Origin', '*');
	admin.auth().updateUser(uid, {
		emailVerified: true
	}).then(() => {
		resp.status(200).json({ message: 'User Verified'})
		return;
	}).catch(err => {
		resp.status(500)
		resp.send('error: ' + uid)
		throw err;
	})
})
// email transporter
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'no.reply.yak.chat@gmail.com',
		pass: 'r8NKJHxUxWi59LZ'
	}
});
/**
 * handle the send invitation email
 * @param {String} email 
 * @param {String} urlString 
 * @param {String} domain 
 */
function sendEmail(email, urlString, domain, subject, title, subtitle) {
	// 5. Send welcome email to new users
	const mailOptions = {
			from: '<no.reply.yak.chat@gmail.com>',
			to: email,
			subject,
			html: `
				<div style="height: 100%; width: 100%; text-align: center;">
					<h2 style="color: #666666">${title}</h2>
					click <a href="${domain + urlString}"> here </a> ${subtitle}
				</div>
			`
		}
	// 6. Process the sending of this email via nodemailer
	return transporter.sendMail(mailOptions,  (err, info) => {
		if(err) {
			console.log(err)
			return false
		} else {
			console.log(info.response);
			return true;
		}
		});
}
/**
 * handle the invite operators by client, if email is provided send mail invitatio invitation 
 * return the link invitation
 */
exports.inviteOperator = functions.https.onCall((param) => {
	const { uuid, email, name } = param;
	const domain = 'http://localhost:8080';
	return admin.database().ref('/pendingusers/')
	.push({
		0: uuid,
		1: email ? email : '',
		2: name ? name : ''
	})
	.then(res => {
		const urlString = '/#/invite/?k=' + res.key + (email ? '&m=' + email : '') + (name ? '&n=' + name : '');
		if (email) {
			// dispatch email
			sendEmail(
				email,
				urlString,
				domain,
				'Yak-chat has send you and invitation',
				'We want you to become an Operator',
				'to see the invitation');
		}
		return domain + urlString
	})
	.catch(err => {
		console.error(err);
		return false;
	});
})

/**
 * convert key data into base64
 * @param {String} value 
 * @param {Int32Array} digis 
 */
function base64 (value, digis) {
	if ( typeof(value) === 'number') {
		if (digis) {
			return base64.getChars(value, '').padStart(digis,'A');
		} else {
			return base64.getChars(value, '');
		}
	}
	if (typeof(value) === 'string') {
		if (value === '') { return NaN; }
		return value.split('').reverse().reduce(function(prev, cur, i) {
			return prev + base64.chars.indexOf(cur) * Math.pow(64, i);
		}, 0);
	}
}
base64.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
base64.getChars = function(num, res) {
	var mod = num % 64,
	remaining = Math.floor(num / 64),
	chars = base64.chars.charAt(mod) + res;
	if (remaining <= 0) { return chars; }
	return base64.getChars(remaining, chars);
};
/**
 * handle each visitior per domain
 * u is mandatory visitor finger print or email md5 hashed
 * n is non mandatory name of the registrant
 * m non mandatory email of the registrant
 * d is mandatory Domain name (the front script get this automatic)
 */
exports.handleVisitor = functions.https.onCall((req) => {
	// the unique user id or the browser fingerprint
	const uid = req.u;
	const name = req.n ? (req.n + '-') : '';
	const email = req.m ? req.m : '';
	const domain = req.d
	if (!uid) {
		return false;
	}
	return admin
		.database()
		.ref("/domains/")
		.orderByChild('1')
		.equalTo(domain)
		.once('value').then((res) => {
			const val = res.val()
			const key = Object.keys(val)[0]
				//get the last one
			const domain = admin.database().ref('/domains/' + key)
			domain
				.child('4/' + uid)
				.limitToLast(1)
				.once('value', (res) => {
					if (!res.val()) {
						domain.child('4/' + uid)
						.set({0: name + email})
					}
				});
				return '/domains/' + key + '/4/' + uid
		}).catch((err) => {
			console.error(err);
			return false
		});
});

/**
 * handle write on client domain thread
 * the client it's the only who has permison to write in firebase
 */
exports.sendMessage = functions.https.onCall((data) => {
	const {uid, msg, type, thread} = data;
	const ref = admin.database().ref(thread);
	const ts = base64(new Date().getTime(), 8);
	// get the last one
	return ref.limitToLast(1)
	.once('value').then(res => {
		return admin.auth().getUser(uid)
		.then(function(userRecord) {
			const displayName = userRecord.toJSON().displayName;
			if (res.val() === null || !res.val()) {
				// it has no message
				return setMessage(displayName, 0, ts, msg, uid, ref, type);
			} else {
				const val = res.val();
				// give the last thread id
				const next = isNaN(parsemkey(Object.keys(val)[0]).thid) ? 0 : parsemkey(Object.keys(val)[0]).thid
				return setMessage(displayName, (next + 1), ts, msg, uid, ref, type);
			}
		})
		.catch(function(error) {
			console.log("must be a visitor or registrant");
			if (res.val() === null || !res.val()) {
				// it has no message
				return setMessage(false, 0, ts, msg, uid, ref, type);
			} else {
				const val = res.val();
				// give the last thread id
				const next = isNaN(parsemkey(Object.keys(val)[0]).thid) ? 0 : parsemkey(Object.keys(val)[0]).thid
				return setMessage(false, (next + 1), ts, msg, uid, ref, type);
			}
		});
	});
});
/**
 * set the messages into database
 */
function setMessage(displayName, next, ts, msg, uid, ref, type) {
	if (!displayName) {
		// the user it's a visitor
		return ref.child(base64(next, 8) + ts + type)
		.set({
			0: 'VISITOR-' + msg,
		}).then(() => {
			return true
		}).catch(() => {
			return false
		});
	} else {
		// the user it's an operator
		return ref.child(base64(next, 8) + ts + type)
		.set({
			0: displayName + '-' + msg,
			1: uid
		}).then(() => {
			return true
		}).catch(() => {
			return false
		});
	}
}
/**
 * parse base64 key data retun Object
 * @param {String} base64safe 
 */
function parsemkey(base64safe) {
	// NOTE: returns object
	// TODO: validate base64safe
	return {
		thid: base64( base64safe.slice(0, 8) ),
		ts:  base64( base64safe.slice(8,16) ),
		tid:  base64( base64safe.slice(16,18) )
	};
}
/**
 * thread mandatory, the route for firebase
 * payment mandatory is the response from Culqi or PayPal
 */
exports.setPayment = functions.https.onCall((data) => {
	try {
		const { thread , payment } = data;
		const visitior = thread.split('/')[3];
		updateItemStatus(thread);
		admin.database().ref('/payments/' + visitior).push(payment);
	} catch (err) {
		return false;
	}
	return true;
});
/**
 * update all the messages with the type AB to AC
 * @param {String} thread 
 */
function updateItemStatus (thread) {
	const ref = admin.database().ref(thread);
	ref.once('value', (snapshot) => {
		const val = snapshot.val();
		let update = {};
		Object.keys(val).forEach((key, i) => {
			if (i !== 0) {
				const keyData = parsemkey(key);
				if (keyData.tid === 1) {
					const newKey = (key.slice(0, 16)) + 'AC';
					update[key] = null;
					update[newKey] = val[key];
				}
			}
		});
		return ref.update(update);
	});
}