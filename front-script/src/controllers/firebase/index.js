import { getClientInfo } from '../../utils';

/**
 * initialize app
 */
const app = firebase.initializeApp({ 
	apiKey: process.env.FB_APIKEY,
	authDomain: process.env.FB_AUTHDOMAIN,
	databaseURL: process.env.FB_DATABASEURL,
	projectId: process.env.FB_PROJECTID,
	storageBucket: process.env.FB_STORAGEBUCKET,
	messagingSenderId: process.env.FB_PROJECTID
}, 'yakchat-frontscript');
// cloud functions
var functions = app.functions();
let threadRoute = '';

app.auth().onAuthStateChanged(function(user) {
	try {
		console.log('Connected',user.uid);
	} catch (er) {
		// ...
	}
});
/**
 * @description function for sing up with your email address, then stablish connection
 * @param {String} email
 * @param {String} iniMsg
 * @param {String} name
 */
export function singUpWithEmail (email, name) {
	const hash = email.md5Encode();
	const d = document.location.host;
	//TODO: validate the email to not exist in this channel
	let handler = functions.httpsCallable('handleVisitor');
	handler({
		u: hash,
		d,
		m: email,
		n: name
	}).then(v => {
		threadRoute = v.data;
		listenRow(threadRoute);
		localStorage.setItem('yak-hash', hash);
		getMessages(threadRoute);
		global.storage.dispatch({type: 'SING-UP-REQ'})
		return v.data
	}).catch((err) => {
		console.log(err)
		return '';
	})
}
/**
 * @description function that stablish an anonymous connection with firebase
 */
export async function signInAnonymous () {
	try {
		await app.auth().signInAnonymously();
		const route = await handleVisitor();
		getMessages(route);
		listenRow(route);
	} catch (er) {
		//
	}
}
/**
 * handle new visitor or conenct with visitor fingerprint
 */
async function handleVisitor() {
	let hash = localStorage.getItem('yak-hash');
	if (!hash) {
		hash = await getClientInfo();
		localStorage.setItem('yak-hash', hash);
	}
	const d = document.location.host;
	let handler = functions.httpsCallable('handleVisitor');
	return await handler({
		u: hash,
		d
	}).then(v => {
		threadRoute = v.data;
		return v.data
	}).catch(() => {
		return '';
	})
}
/**
 * @description get the messages and dispatch it
 * @param {String} route the firebase message route
 */
function getMessages (route) {
	app.database()
	.ref(route)
	.once('value').then((res) => {
		global.storage.dispatch({
			type: 'FB-CONNECT',
			msgList: res.val()
		})
	}).catch(err => {
		console.log(err)
	});
}
/**
 * @description listen to changes in database with the current thread
 * @param {String} route 
 */
function listenRow (route) {
	app.database().ref(route).limitToLast(1).on('child_added', function(snapshot) {
		global.storage.dispatch({
			type: 'MSG-ARRIVE',
			msg: {[snapshot.key]:snapshot.val()}
		})
	 });
}
/**
 * handle send with cloud function
 */
export function send (msg) {
	if (threadRoute !== '') {
		let sendMessage = functions.httpsCallable('sendMessage');
		sendMessage({
			uid: localStorage.getItem('yak-hash'),
			msg: msg.message,
			type: 'AA', // text
			thread: threadRoute
		}).then(v => {
			//
		})
	}
}

export function setPayments (data) {
	if (threadRoute !== '') {
		let setPayment = functions.httpsCallable('setPayment');
		setPayment({
			thread: threadRoute, 
			payment: data
		});
	}
}