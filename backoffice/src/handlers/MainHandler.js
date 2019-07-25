import {
	signInWithEmail,
	singOut,
	processInvitation,
	uploadProfileImg,
	patchProfile,
	getClientChannels,
	updateClientChannel,
	saveStorageSetting,
	send,
	listenRow,
	removeListener,
	getProfileImg,
	getOperatorChannels,
	sendVerification
} from '../controllers/firebase';

import { login, signup } from '../controllers/auth';

const MainDefaultState = {
	auth: localStorage.getItem('fb-hash') ? true : false,
	isSoundEnable: true,
	accessLevel: 0,
	uid: localStorage.getItem('fb-hash') ? localStorage.getItem('fb-hash') : 0,
	admin: false,
	displayName: '',
	email: '',
	domain: '',
	oldChannelList: [],
	oldThreads: [],
	threads: [],
	channelList: [],
	selectedMessages: [],
	chnlUid: 0,
	emailVerified: false
};
/**
 * check if new visitor has been added
 * @param {Object} oldState 
 * @param {Object} newState 
 */
function checkDifferences (oldState, newState) {
	if (JSON.stringify(oldState) !== JSON.stringify(newState)) {
		if(oldState.length !== 0) {
			Object.keys(newState).forEach(chnlId => {
				// count the visitors / registrant per channel
				const oldCount = 
					Object.keys(oldState[chnlId][4] ? oldState[chnlId][4] : {}).length;
				const newCount = 
					Object.keys(newState[chnlId][4] ? newState[chnlId][4] : {}).length;
				if (newCount > oldCount) {
					const thid = getChildAdded(oldState[chnlId][4], newState[chnlId][4])
					notify(
						'There is new visitor on channel: ' + newState[chnlId][2],// message
						chnlId, // channel id
						thid // thread id
					);
				}
			})
		}
	}
}
/**
 * get the just added visitor / registrant in the list
 * @param {*} oldVisitorList 
 * @param {*} newVisitorList 
 */
function getChildAdded (oldVisitorList, newVisitorList) {
	let resp = '';
	Object.keys(newVisitorList).map(key => {
		if (!oldVisitorList[key]){
			// it's the new
			resp = key;
		}
	})
	return resp;
}
/**
 * send browser notification
 * @param {String} msg 
 */
function notify (msg, chid, thid) {
	if (Notification) {
		if (Notification.permission === "granted") {
			// if the user allowed notifications
			var notification = new Notification('YAK CHAT', {
				icon: 'https://res.cloudinary.com/dvv4qgnka/image/upload/c_scale,w_158/v1553216418/yakchat_icon_192.png',
				body: msg,
			});
			notification.onclick = function () {
				notificationSelect(chid, thid);
				notification.close();
			};
		}
	}
}
/**
 * on click the notification dispatch select thath thread
 * @param {*} channel 
 * @param {*} id 
 */
function notificationSelect (channel, id) {
	const {channelList, threads, accessLevel} = global.storage.getState().Main;
	const chnlSelected = accessLevel > 3
		? {4: threads}
		: channelList[channel];
	if (chnlSelected) {
		let threadsSelect = chnlSelected[4][id];
		if (accessLevel === 3) {
			global.storage.dispatch({
				type: 'THREAD-SELECTED',
				threads: chnlSelected[4],
				DID: channel
			});
		}
		global.storage.dispatch({type: 'CHAT-SELECTED', data: {
			clientSelected: threadsSelect[0] !== '' ? threadsSelect[0] : 'Visitor',
			messages: chnlSelected[4][id],
			visitorId: id,
			chnlId: channel
		}})
	}
}

export default {
	MainDefaultState,
	MainHandler: {
		'LOGIN-REQ': (action, state) => {
			login(action.email, action.password);
			return { newState: state };
		},
		'LOGIN-SUCCESS': (action, state) => {
			const { accessLevel, admin, uid, displayName, email, emailVerified } = action.data
			state.Main.auth = true;
			state.Main.accessLevel = accessLevel;
			state.Main.admin = admin;
			state.Main.uid = uid;
			state.Main.displayName = displayName;
			state.Main.email = email;
			state.Main.emailVerified = emailVerified;
			getProfileImg(state.Main.uid);
			if (action.accessLevel >= 5) {
				//client
				getClientChannels(action.uid);
			} else if (action.accessLevel === 3) {
				//operator
				getOperatorChannels();
			}
			return { newState: state }
		},
		'LOGOUT': (action, state) => {
			localStorage.removeItem('authorization');
			localStorage.removeItem('udata');
			document.location.pathname = '/login';
			localStorage.removeItem('fb-hash');
			state.Main = MainDefaultState;
			return { newState: state }
		},
		'CHAT-SELECTED': (action, state) => {
			state.Main.clientSelected = action.data.clientSelected;
			state.Main.selectedMessages = action.data.messages;
			const { chnlId } = action.data;
			let chnlUid
			if ( state.Main.accessLevel > 3) {
				chnlUid =  state.Main.uid
			} else {
				chnlUid = chnlId ? chnlId : state.Main.chnlUid;
				state.Main.chnlUid = chnlId ? chnlId : state.Main.chnlUid;
			}
			if (state.Main.visitorId !== action.data.visitorId) {
				// remove listener
				removeListener('/domains/' + chnlUid + '/4/' + state.Main.visitorId)
			}
			listenRow('/domains/' + chnlUid + '/4/' + action.data.visitorId)
			state.Main.visitorId = action.data.visitorId;
			return { newState: state }
		},
		'MSG-ARRIVE': (action, state) => {
			const newList = Object.assign({}, state.Main.selectedMessages, action.msg)
			state.Main.selectedMessages = newList;
			state.Main.threads[state.Main.visitorId] = newList;
			return { newState: state };
		},
		'SEND-MESSAGE': (action, state) => {
			send({
				visitorId: state.Main.visitorId,
				chnlUid: state.Main.accessLevel > 3 ? state.Main.uid : state.Main.chnlUid,
				message: btoa(action.data)
			}, action.msgType);
			return { newState: state }
		},
		'TOGGLE-SOUND': (action, state) => {
			state.Main.isSoundEnable = !state.isSoundEnable;
			return { newState: state }
		},
		'CHNG-PASS': (action, state) => {
			return { newState: state }
		},
		'SIGNUP': (action, state) => {
			const {email, displayName, password, type, domain} = action.data
			signup(email, password, domain, type, displayName);
			return {newState: state}
		},
		'ACEPT-INVITATION': (action, state) => {
			processInvitation(action.data.key, action.data.m, action.data.ps, action.data.un);
			return { newState: state }
		},
		'UPLOAD-PROFILE-IMG': (action, state) => {
			const {img, uid} = action.data;
			uploadProfileImg(img, uid);
			return { newState: state }
		},
		'PATCH-PROFILE': (action, state) => {
			const {email, password, currentPassword, displayName} = action.data;
			patchProfile(email, password, currentPassword, displayName);
			return { newState: state }
		},
		'CHANNEL-ARRIVE': (action, state) => {
			const {value} = action.data;
			state.Main.domain = value ? value[1] : '';
			state.Main.storageKeys = value ? value[3]: '';
			state.Main.oldThreads = state.Main.threads;
			state.Main.threads = value ? value[4]: [];
			//TODO: MAKE THIS SUPPORT ONE TO MANY CHANNELS
			checkDifferences(state.Main.oldChannelList, {'t':value});
			state.Main.oldChannelList = {'t':value};
			state.Main.channelList = [{title: value ? value[2]: ''}];
			return { newState: state } 
		},
		'UPDATE-CHANNEL': (action, state) => {
			updateClientChannel(
				action.data.channel,
				action.data.domain,
				action.data.uid
			);
			return { newState: state }
		},
		'SAVE-STORAGE-SETTING': (action, state) => {
			action.data.uid = localStorage.getItem('fb-hash');
			saveStorageSetting(action.data)
			return { newState: state }
		},
		'PROFILE-CHANGED': (action, state) => {
			const { displayName, email } = action.data
			state.Main.displayName = displayName ? displayName : state.Main.displayName;
			state.Main.email = email ? email : state.Main.email;
			return { newState: state }
		},
		'OPERATOR-DATA': (action, state) => {
			const { value } = action.data
			state.Main.oldThreads = state.Main.channelList[state.Main.chnlUid]
			? state.Main.channelList[state.Main.chnlUid][4]
			: [];
			checkDifferences(state.Main.channelList, value);
			state.Main.channelList = value;
			let allThreads = {}
			Object.keys(value).forEach(key => {
				if (value[key][4])
					Object.keys(value[key][4]).forEach(vID => {
						value[key][4][vID].chnlId = key;
					});
				allThreads = Object.assign(allThreads, value[key][4]);
			});
			state.Main.allThreads = allThreads;
			return { newState: state }
		},
		'THREAD-SELECTED': (action, state) => {
			const { DID, threads } = action;
			state.Main.chnlUid = DID;
			state.Main.threads = threads;
			return { newState: state }
		},
		'SEND-VERIFICATION': (action, state) => {
			sendVerification();
			return { newState: state }
		}
	}
};
