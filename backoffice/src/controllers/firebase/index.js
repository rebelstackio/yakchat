import * as firebase from 'firebase';

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
	app.auth().signInWithEmailAndPassword(email, password)
	.then(() => {
		if (document.location.pathname.match('yakchat') !== null) {
			document.location.pathname = '/yakchat/backoffice';
		} else {
			document.location.pathname = '/'
		}
	})
	.catch((error) => {
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
 * fetch the firebase url for your profile image
 * @param {*} uid 
 */
export function getProfileImg(uid) {
	var storageRef = storage.ref(uid + "/profile.jpg");
	if (!localStorage.getItem(uid)) {
		storageRef.getDownloadURL().then(function(url) {
				localStorage.setItem(uid, url)
				global.storage.dispatch({ type: 'UPLOAD-SUCCESS' });
			}).catch(function(error) {
		});
	}
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
				global.storage.dispatch({ type: 'PROFILE-CHANGED', data:{
					email
				}});
			})
		}
		if (displayName !== '' && displayName !== oldName) {
			// if not empty and not the same
			user.updateProfile({displayName: displayName})
			.then(() => {
				global.storage.dispatch({ type: 'PROFILE-CHANGED', data:{
					displayName
				}});
			})
		}
		if(newPassword !== '' && newPassword !== currentPassword) {
			user.updatePassword(newPassword).then(() => {
				// Update successful.
				console.log('password changed');
				global.storage.dispatch({ type: 'PROFILE-CHANGED', data:{}});
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
	.on('value', (value) => {
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
	const ref = app.database().ref('/domains/' + uid)
	if (channelName !== '') {
		ref.child('2').set(channelName)
		.then(() => {
			console.log('update channel success');
			global.storage.dispatch({ type: 'CHANNEL-CHANGED' });
			getClientChannels(uid);
		});
	}
	if (domain !== '') {
		ref.child('1').set(domain)
		.then(() => {
			console.log('update domain success')
			global.storage.dispatch({ type: 'CHANNEL-CHANGED' });
			getClientChannels(uid);
		})
	}
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
		global.storage.dispatch({ type: 'SETTINGS-CHANGED' });
		console.log('updated settings storage data');
	});
}
/*--------------------------END-CLIENT------------------------------------------------*/
/**-------------------------OPERATORS------------------------------------------------ */
export function getOperatorChannels () {
	app.database().ref('domains/')
	.on('value', (res) => {
		let chArray = {}
		res.forEach((d) => {
			chArray[d.key] = d.toJSON();
		})
		global.storage.dispatch({ type: 'OPERATOR-DATA',
		data: {
			value: chArray
		}})
	})
}
/**-------------------------END-OPERATORS-------------------------------------------- */
export function send (data) {
	const uid = localStorage.getItem('fb-hash');
	const chnlUid = data.chnlUid;
	const visitorId = data.visitorId
	let sendMessage = functions.httpsCallable('sendMessage');
		if (uid && chnlUid && visitorId) {
			sendMessage({
				uid: uid,
				msg: data.message,
				type: 'AA', // text
				thread: 'domains/' + chnlUid + '/4/' + visitorId
			}).then(v => {
				console.log(v);
			})
		}
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
