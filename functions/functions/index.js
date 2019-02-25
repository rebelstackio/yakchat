const functions = require('firebase-functions');
const admin = require('firebase-admin');

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