import * as firebase from 'firebase';
import { getClientInfo } from '../../utils';

/**
 * for testing and string size comparations
 */
String.prototype.lengthInUtf8Bytes = function() {
	// Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
	var m = encodeURIComponent(this).match(/%[89ABab]/g);
	return this.length + (m ? m.length : 0);
}
/**
 * TODO: create proper development firebase so the team have access
 * initialize the firebase
 */
let app = firebase.initializeApp({ 
	apiKey: "AIzaSyD5lLizDWKXMKd5LYs8mMbB_0hvYVIKQ1w",
	authDomain: "testing-chat-2af19.firebaseapp.com",
	databaseURL: "https://testing-chat-2af19.firebaseio.com",
	projectId: "testing-chat-2af19",
	storageBucket: "testing-chat-2af19.appspot.com",
	messagingSenderId: "535251093263"
});
/**
 * the reason of this is to map the message into an object,
 * to avoid repeat the keys of the object in each child,
 * SEE: objectCompress(), objectDecompress()
 */
const msgPreset = ['type', {from: ['name']}, 'msg', 'date'];
let threadRoute = '';

app.auth().onAuthStateChanged(function(user) {
	try {
		console.log('Connected',user.uid);
	} catch (er) {
		// ...
	}
});
/**
 * TODO: create user from email address
 * @description function for sing up with your email address, then stablish connection
 * @param {String} email
 */
export function singUpWithEmail (email) {
	//createThread('singup', 'some-hash-id');
	throw 'NOT-IMPLEMENTED';
}
/**
 * TODO: stablish an user email connection
 * @description function that stablish an user email connection with firebase
 * @param {String} email
 */
export function signInWithEmail (email) {
	throw 'NOT-IMPLEMENTED';
}
/**
 * @description function that stablish an anonymous connection with firebase
 */
export async function signInAnonymous () {
	try {
		await app.auth().signInAnonymously();
		let hash = '';
		if (lsTest() && localStorage.getItem('yak-hash')) {
			hash = localStorage.getItem('yak-hash');
		} else {
			hash = await getClientInfo();
			localStorage.setItem('yak-hash', hash);
		}
		getMessages('anonymous/messages/', hash);
	} catch {
		//
	}
}
/**
 * TODO: make this function to be compatible with singin users
 * @description get the messages and dispatch it
 * @param {String} route the firebase message route
 * @param {String} hash MD5 hash 
 */
function getMessages (route, hash) {
	try {
		app.database().ref(route).once('value').then(res => {
			let b = true
			res.forEach(chld => {
				const keys = atob(chld.key).split(':');
				if (keys[0] === hash) {
					const mssgs = chld.child('2');
					threadRoute = route + chld.key;
					listenRow(threadRoute);
					global.storage.dispatch({
						type: 'FB-CONNECT',
						msgList: getMsgArray(mssgs)
					})
					console.log('has-threads');
					b = false;
				}
			})
			if (b) {
				createThread(route, hash);
			}
		})
	} catch {
		///
	}
}
/**
 * @description create a thread if it's the first time in the plataform
 * @param {String} route route base for the messages
 * @param {String} id 
 */
function createThread (route, id) {
	app.database().ref(route)
	.child(btoa(id + ':null'))
	.set({
		1: id
	}).then(() => {
		threadRoute = route + btoa(id + ':null');
		listenRow(threadRoute);
	})
}
/**
 * @description listen to changes in database with the current thread
 * @param {String} route 
 */
function listenRow (route) {
	app.database().ref(route + '/2').limitToLast(1).on('child_added', function(snapshot) {
		global.storage.dispatch({
			type: 'MSG-ARRIVE',
			msg: objectDecompress(snapshot.val(), msgPreset)
		})
	 });
}
/**
 * function util to transform the object into an array
 * @param {Object} msg 
 */
function getMsgArray (msg) {
	const resp = [];
	const val = msg.val();
	if (val!== null) {
		Object.keys(val).forEach(key => {
			resp.push(objectDecompress(val[key], msgPreset));
		})
	}
	return resp
}
/**
 * on sending message event create the new msage
 */
global.storage.on('SEND-MESSAGE', (action) => {
	if (threadRoute !== '') {
		const t = objectCompress(action.msg);
		app.database().ref(threadRoute)
		.child('2')
		.push()
		.set(t)
		.catch(err => {
			console.log(err);
		});
	}
})
/**
 * turn Object into an formated plain text, Only support one child
 * @returns String
 * @param {Object} t 
 */
function objectCompress (t) {
	const resp = []
	Object.keys(t).forEach(key => {
		let pairs = "";
		if (typeof t[key] === 'object') {
			pairs = objectCompress(t[key]).split(',').join(':');
		} else {
			pairs = t[key];
		}
		resp.push(pairs);
	})
	return resp.join(',');
}
/**
 * turn plain formated text into an object, Only support one child
 * @returns Object
 * @param {String} s
 * @param {Array} preset the keys for the object 
 */
function objectDecompress (s, preset) {
	let resp = {};
	s.split(',').forEach((value, i) => {
		if (typeof preset[i] === 'object') {
			Object.keys(preset[i]).forEach(key => {
				resp[key] = {};
				value.split(':').forEach((properties, j) => {
					resp[key][preset[i][key][j]] = properties;
				})
			})
		} else {
			resp[preset[i]] = value;
		}
	})
	return resp;
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