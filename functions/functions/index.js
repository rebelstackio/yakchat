const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer')
admin.initializeApp();

exports.singInAnonymous = functions.https.onRequest((request, response) => {
	const headers = request.headers;
	console.log(request.connection.remoteAddress);
	response.send('ok ' + (headers['X-Forwarded-For'] || request.connection.remoteAddress));
})

const routes = ['messages', 'clients', 'channels', 'operators', 'emailreq', 'channelreq']
// permisons
const _p = {
	none: '0000', // 0
	read: '0001', // 1
	write: '0010', // 2
	edit: '0100', // 4
	delete: '1000', // 8
	read_write: '0011' // 3
}
// role set
const visitor = [
	parseInt(_p.read_write, 2),
	parseInt(_p.none, 2),
	parseInt(_p.none, 2),
	parseInt(_p.none, 2),
	parseInt(_p.none, 2),
	parseInt(_p.none, 2)
];

const registrant = [
	parseInt(_p.read_write, 2),
	parseInt(_p.none, 2),
	parseInt(_p.read_write, 2),
	parseInt(_p.read, 2),
	parseInt(_p.read, 2),
	parseInt(_p.none, 2)
];

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
function sendEmail(email, urlString, domain) {
	// 5. Send welcome email to new users
	console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS)
	const mailOptions = {
			from: '<no.reply.yak.chat@gmail.com>',
			to: email,
			subject: 'Yak-chat has send you and invitation',
			html: `
				<div style="height: 100%; width: 100%; text-align: center;">
					<h2 style="color: #666666">We want you to become an Operator</h2>
					click <a href="${domain + urlString}"> here </a> to see the invitation
				</div>
			`
		}
	// 6. Process the sending of this email via nodemailer
	return transporter.sendMail(mailOptions, function (err, info) {
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
	const domain = 'http://localhost:1234';
	return admin.database().ref('/pendingusers/' + uuid)
	.push({
		1: email ? email : '',
		2: name ? name : ''
	})
	.then(res => {
		const urlString = '/?k=' + res.key + (email ? '&m=' + email : '') + (name ? '&n=' + name : '');
		if (email) {
			// dispatch email
			sendEmail(email, urlString, domain);
		}
		return domain + urlString
	})
	.catch(err => {
		console.error(err);
		return false;
	});
})