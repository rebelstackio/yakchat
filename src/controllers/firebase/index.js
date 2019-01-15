import * as firebase from 'firebase';
import { getClientInfo } from '../../utils';

let app = firebase.initializeApp({ 
	apiKey: "AIzaSyD5lLizDWKXMKd5LYs8mMbB_0hvYVIKQ1w",
	authDomain: "testing-chat-2af19.firebaseapp.com",
	databaseURL: "https://testing-chat-2af19.firebaseio.com",
	projectId: "testing-chat-2af19",
	storageBucket: "testing-chat-2af19.appspot.com",
	messagingSenderId: "535251093263"
});

let threadRoute = '';

app.auth().onAuthStateChanged(function(user) {
	console.log('Connected',user.uid);
	// ...
});

/**
 * set the anonymous connection
 */
export async function signInAnonymous () {
	await app.auth().signInAnonymously();
	let hash = '';
	if (lsTest() && localStorage.getItem('yak-hash')) {
		hash = localStorage.getItem('yak-hash');
	} else {
		hash = await getClientInfo();
		localStorage.setItem('yak-hash', hash);
	}
	getMessages('Anonymous/messages/', hash);
	
}
/**
 * @description get the messages and dispatch it
 * @param {String} route 
 */
function getMessages (route, hash) {
	app.database().ref(route).once('value').then(res => {
		let b = true
		res.forEach(chld => {
			const keys = Buffer.from(chld.key, 'base64').toString('ascii').split(':');
			if (keys[0] === hash) {
				const mssgs = chld.child('2');
				threadRoute = route + chld.key;
				global.storage.dispatch({
					type: 'FB-CONNECT',
					msgList: getMsgArray(mssgs)
				})
				console.log('has-threads');
				b = false;
				listenRow(threadRoute);
			}
		})
		if (b) {
			global.storage.dispatch({
				type: 'CREATE-ANN-THREAD',
				hash: hash
			})
		}
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
			msg: snapshot.val()
		})
	 });
}
/**
 * function util to transform the object into an array
 * @param {Object} msg 
 */
function getMsgArray (msg) {
	const retorno = [];
	const val = msg.val();
	if (val!== null) {
		Object.keys(val).forEach(key => {
			retorno.push(val[key]);
		})
	}
	return retorno
}
/**
 * on sending message event create the new msage
 */
global.storage.on('SEND-MESSAGE', (action) => {
	if (threadRoute !== '') {
		app.database().ref(threadRoute).child('2').push().set(action.msg);
	}
})
/**
 * use the storage to create new anonymous thread if there is no one with the browser hash
 */
global.storage.on('CREATE-ANN-THREAD', (action) => {
	const {hash} = action;
	app.database().ref("Anonymous/messages/")
		.child(Buffer.from(hash + ':null').toString('base64'))
		.set({
			1: hash
		});
})
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