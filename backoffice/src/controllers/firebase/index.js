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

const app = firebase.initializeApp({ 
	apiKey: process.env.FB_APIKEY,
	authDomain: process.env.FB_AUTHDOMAIN,
	databaseURL: process.env.FB_DATABASEURL,
	projectId: process.env.FB_PROJECTID,
	storageBucket: process.env.FB_STORAGEBUCKET,
	messagingSenderId: process.env.FB_PROJECTID
});
var functions = app.functions();
const storage = app.storage();
/**
 * the reason of this is to map the message into an object,
 * to avoid repeat the keys of the object in each child,
 * SEE: objectCompress(), objectDecompress()
 */
const msgPreset = ['type', {from: ['name']}, 'msg', 'date'];
let threadRoute = '';

let callback = null;
let metadataRef = null;
app.auth().onAuthStateChanged(function(user) {
	try {
		if (user) {
			console.log('Connected',user.uid);
			localStorage.setItem('fb-hash', user.uid)
			// Check if refresh is required.
			metadataRef = firebase.database().ref('metadata/' + user.uid + '/refreshTime');
			callback = (snapshot) => {
			  // Force refresh to pick up the latest custom claims changes.
			  // Note this is always triggered on first call. Further optimization could be
			  // added to avoid the initial trigger when the token is issued and already contains
			  // the latest claims.
			  user.getIdToken(true);
			};
			// Subscribe new listener to changes on that node.
			metadataRef.on('value', callback);
			firebase.auth().currentUser.getIdTokenResult()
			.then((idTokenResult) => {
				// Confirm the user is an Admin.
				global.storage.dispatch({
					type: 'LOGIN-SUCCESS',
					accessLevel: idTokenResult.claims.accessLevel,
					admin: idTokenResult.claims.admin,
					uid: user.uid,
					displayName: idTokenResult.claims.name,
					email: idTokenResult.claims.email
				});
			})
			.catch((error) => {
				console.log(error);
			});
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
	app.auth().signInWithEmailAndPassword(email, password).catch((error) => {
		global.storage.dispatch({
			type: 'LOGIN-FAIL',
			error
		});
	});
}

export function processInvitation (key, email, password, name) {
	app.database()
	.ref('/pendingusers/')
	.equalTo(key)
	.once('value', (v) => {
		console.log(v, 'va')
	});
	const signup = functions.httpsCallable('signup');
	signup({
		email: email,
		password: password,
		displayName: name,
		type: 1
	}).then(res => {
		global.storage.dispatch({type: 'LOGIN-REQ', email: email, password: password});
	})
}
/**
 * 
 * @param {*} displayName 
 * @param {*} email 
 * @param {*} password 
 * @param {*} domain 
 * @param {*} type 
 */
export function signUp (displayName, email, password, domain, type) {
	const signup = functions.httpsCallable('signup');
	signup({
		email: email,
		password: password,
		displayName: displayName,
		type: type === 'client' ? 2 : 1,
		domain
	}).then(res => {
		console.log('yeeey');
		global.storage.dispatch({type: 'LOGIN-REQ', email: email, password: password});
	})
}

export function uploadProfileImg (img, uuid) {
	var storageRef = storage.ref(uuid + "/profile.jpg");
	var uploadTask = storageRef.put(img);
	uploadTask.then(res => {
		global.storage.dispatch({
			type: 'UPLOAD-SUCCESS'
		})
	}).catch(err => {
		console.log('upload fail');
		global.storage.dispatch({
			type: 'UPLOAD-FAIL',
			err
		})
	})
}
/**
 * 
 * @param {*} email 
 * @param {*} newPassword 
 * @param {*} currentPassword 
 * @param {*} displayName 
 */
export function patchProfile (email, newPassword, currentPassword , displayName) {
	let currentUser = app.auth().currentUser;
	const oldMail = currentUser.email;
	const oldName = currentUser.displayName;
	app.auth().signInWithEmailAndPassword(oldMail, currentPassword)
	.then(function(res) {
		const user = res.user;
		if (email !== '' && email !== oldMail) {
			// if not empty and not the same
			user.updateEmail(email)
			.then(() => {
				console.log('email changed');
			})
		}
		if (displayName !== '' && displayName !== oldName) {
			// if not empty and not the same
			user.updateProfile({displayName: displayName})
			.then(() => {
				console.log('display name changed');
			})
		}
		if(newPassword !== '' && newPassword !== currentPassword) {
			user.updatePassword(newPassword).then(() => {
				// Update successful.
				console.log('password changed');
			}, (error) => {
				// An error happened.
			});
		}
	})
}
/**------------------------------------CLIENT---------------------------------- */
/**
 * get the client channel, domain and settings
 * @param {String} uid 
 */
export function getClientChannels(uid) {
	app.database().ref('/domains/' + uid)
	.once('value', (value) => {
		global.storage.dispatch({
			type: 'CHANNEL-ARRIVE',
			data: {
				value: value.val()
			}
		});
	}, (err) => {
		console.log(err)
		// error
	})
}
/**
 * update channel name or domain or both
 * @param {*} channelName 
 * @param {*} domain 
 * @param {*} uid 
 */
export function updateClientChannel (channelName, domain, uid) {
	app.database().ref('/domains/' + uid)
	.set({
		1: domain,
		2: channelName
	}).then(() => {
		console.log('update channel success');
		getClientChannels(uid);
	});
}
/**
 * update the firebase and analytics tokens in client settings
 * @param {Obeject} data 
 */
export function saveStorageSetting (data) {
	const {fbToken, ggleToken, uid} = data;
	app.database().ref('/domains/' + uid)
	.child('3').set({
		[fbToken]: ggleToken
	}).then(() => {
		console.log('updated settings storage data');
	});
}
/*--------------------------END-CLIENT------------------------------------------------*/

export function send (data) {
	const uid = localStorage.getItem('fb-hash');
	const chnlUid = data.chnlUid;
	const visitorId = data.visitorId
	let sendMessage = functions.httpsCallable('sendMessage');
		//const {uid, msg, type, thread} = data;
		sendMessage({
			uid: uid,
			msg: data.message,
			type: 'AA', // text
			thread: 'domains/' + chnlUid + '/4/' + visitorId
		}).then(v => {
			console.log(v);
		})
}
/**
 * @description listen to changes in database with the current thread
 * @param {String} route 
 */
export function listenRow (route) {
	app.database().ref(route).limitToLast(1).on('child_added', function(snapshot) {
		global.storage.dispatch({
			type: 'MSG-ARRIVE',
			msg: {[snapshot.key]: snapshot.val()}
		})
	 });
}

export function removeListener (route) {
	app.database().ref(route)
	.off('child_added');
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