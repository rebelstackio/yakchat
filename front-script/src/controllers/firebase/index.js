import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';
import 'firebase/database';
import { getClientInfo } from '../../utils';

/**
 * for testing and string size comparations
 */
String.prototype.lengthInUtf8Bytes = function() {
	// Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
	var m = encodeURIComponent(this).match(/%[89ABab]/g);
	return this.length + (m ? m.length : 0);
}

const app = firebase.initializeApp({ 
	apiKey: process.env.FB_APIKEY,
	authDomain: process.env.FB_AUTHDOMAIN,
	databaseURL: process.env.FB_DATABASEURL,
	projectId: process.env.FB_PROJECTID,
	storageBucket: process.env.FB_STORAGEBUCKET,
	messagingSenderId: process.env.FB_PROJECTID
}, 'yakchat-frontscript');

const channel = 'testing';
var functions = app.functions();
/**
 * the reason of this is to map the message into an object,
 * to avoid repeat the keys of the object in each child,
 * SEE: objectCompress(), objectDecompress()
 */
const msgPreset = ['type', {from: ['name']}, 'msg', 'date'];
const newPreset = ['date', 'message', 'by'];
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
	}).catch(() => {
		return '';
	})
}
/**
 * @description function that stablish an anonymous connection with firebase
 */
export async function signInAnonymous () {
	try {
		await app.auth().signInAnonymously();
		let hash = '';
		const route = await handleVisitor();
		getMessages(route);
		listenRow(route);
	} catch (er) {
		//
	}
}

async function handleVisitor() {
	if (lsTest() && localStorage.getItem('yak-hash')) {
		hash = localStorage.getItem('yak-hash');
	} else {
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
 * TODO: make this function to be compatible with singin users
 * @description get the messages and dispatch it
 * @param {String} route the firebase message route
 */
function getMessages (route) {
	try {
		app.database()
		.ref(route)
		.once('value').then((res) => {
			global.storage.dispatch({
				type: 'FB-CONNECT',
				msgList: res.val()
			})
		}).catch(err => {
			console.log(err)
		})
	} catch (err) {
		///
		console.log(err)
	}
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
		//const {uid, msg, type, thread} = data;
		sendMessage({
			uid: localStorage.getItem('yak-hash'),
			msg: msg.message,
			type: 'AA', // text
			thread: threadRoute
		}).then(v => {
			console.log(v);
		})
	}
}
/**
 * @description util function to make a localStorage test
 */
function lsTest() {
	var test = 'test';
	try {
		localStorage.setItem(test, test);
		localStorage.removeItem(test);
		return true;
	} catch(e) {
		return false;
	}
}