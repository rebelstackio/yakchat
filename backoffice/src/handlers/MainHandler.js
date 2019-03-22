import {
	signInWithEmail,
	singOut,
	processInvitation,
	signUp,
	uploadProfileImg,
	patchProfile,
	getClientChannels,
	updateClientChannel,
	saveStorageSetting,
	send,
	listenRow,
	removeListener,
	getProfileImg,
	getOperatorChannels
} from '../controllers/firebase';

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
	chnlUid: 0
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
					notify('There is new visitor on channel: ' + newState[chnlId][2]);
				}
			})
		}
	}
}
/**
 * send browser notification
 * @param {String} msg 
 */
function notify (msg) {
	if (Notification) {
		if (Notification.permission === "granted") {
			// if the user allowed notifications
			var notification = new Notification('YAK CHAT', {
				icon: 'https://res.cloudinary.com/dvv4qgnka/image/upload/c_scale,w_158/v1553216418/yakchat_icon_192.png',
				body: msg,
			});
			notification.onclick = function () {
				window.open(
					document.location.protocol 
					+ '//' +
					document.location.host + "/#/lobby"
				);
			};
		}
	}
}

export default {
	MainDefaultState,
	MainHandler: {
		'LOGIN-REQ': (action, state) => {
			state.email = action.email;
			state.password = action.password;
			signInWithEmail(state.email, state.password);
			return { newState: state };
		},
		'LOGIN-SUCCESS': (action, state) => {
			state.Main.auth = true;
			state.Main.accessLevel = action.accessLevel;
			state.Main.admin = action.admin;
			state.Main.uid = action.uid;
			state.Main.displayName = action.displayName;
			state.Main.email = action.email;
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
			singOut();
			localStorage.removeItem('fb-hash');
			state.Main.auth = false;
			state.Main.uid = 0;
			return { newState: state }
		},
		'CHAT-SELECTED': (action, state) => {
			state.Main.clientSelected = action.data.clientSelected;
			state.Main.selectedMessages = action.data.messages;
			const chnlUid = state.Main.accessLevel > 3 ? state.Main.uid : state.Main.chnlUid
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
			})
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
			signUp(displayName, email, password, domain, type);
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
			state.Main.allThreds = Object.keys(value).map(key => {
				return { [value[key][2] !== '' ? value[key][2]: 'NOT-SET']: value[key][4] }
			})
			return { newState: state }
		},
		'THREAD-SELECTED': (action, state) => {
			const { DID, threads } = action;
			state.Main.chnlUid = DID;
			state.Main.threads = threads;
			return { newState: state }
		}
	}
};
