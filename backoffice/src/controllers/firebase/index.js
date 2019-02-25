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
	apiKey: "AIzaSyAYzDrJanF6W6iO_TWxg3suaHz7lyBnih0",
	authDomain: "yakchat-20e2a.firebaseapp.com",
	databaseURL: "https://yakchat-20e2a.firebaseio.com",
	projectId: "yakchat-20e2a",
	storageBucket: "yakchat-20e2a.appspot.com",
	messagingSenderId: "20591052421"
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
		if (user) {
			console.log('Connected',user.uid);
			localStorage.setItem('fb-hash', user.uid)
		} else {
			console.log('im not loged');
		}
	} catch (er) {
		// ...
	}
});
/**
 * @description function to logout
 */
export function singOut () {
	app.auth().signOut()
	.then(function() {
		// Sign-out successful.
		console.log('LOGOUT');
	})
	.catch(function(error) {
		// An error happened
		console.log(error);
	});
}
/*
 * @description function that stablish an user email connection with firebase
 * @param {String} email
 * @param {String} password
 */
export function signInWithEmail (email, password) {
	app.auth().signInWithEmailAndPassword(email, password)
	.then(() => {
		global.storage.dispatch({
			type: 'LOGIN-SUCCESS'
		})
	})
	.catch(function() {
		global.storage.dispatch({
			type: 'LOGIN-FAIL'
		})
	});
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