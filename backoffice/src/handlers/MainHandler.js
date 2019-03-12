import {
	signInWithEmail,
	singOut,
	processInvitation,
	signUp,
	uploadProfileImg,
	patchProfile,
	getClientChannels,
	updateClientChannel,
	saveStorageSetting
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
	channelList: [],
	chnlList : [
		{
			title: 'ToursSercers',
			clientList: [
				{
					name: 'Dummie',
					id: 'random-hash'
				}
			]
		}
	],
	selectedMessages: []
};

const demoMessages = [
	{
		date: new Date().toDateString(),
		message: 'hello, i\'m Lenny and i know every thing of that tour',
		from: 'SERVER'
	},
	{
		date: new Date().toDateString(),
		message: 'Hi Lenny Paracas sounds like a great place, but is good in this time of the year?',
		from: 'CLIENT'
	}
]
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
			state.auth = true;
			state.accessLevel = action.accessLevel;
			state.admin = action.admin;
			state.uid = action.uid;
			state.displayName = action.displayName;
			state.email = action.email;
			if (action.accessLevel >= 5) {
				//get channels
				getClientChannels(action.uid);
			}
			return { newState: state }
		},
		'LOGOUT': (action, state) => {
			singOut();
			localStorage.removeItem('fb-hash');
			state.auth = false;
			state.uid = 0;
			return { newState: state }
		},
		'CHAT-SELECTED': (action, state) => {
			state.clientSelected = action.data;
			state.selectedMessages = demoMessages;
			return { newState: state }
		},
		'SEND-MESSAGE': (action, state) => {
			/**
			 * TODO: make a real api call
			 */
			if (!state.selectedMessages) state.selectedMessages = []
			state.selectedMessages.push({
				date: new Date().toDateString(),
				message: action.data,
				from: 'SERVER'
			});
			return { newState: state }
		},
		'TOGGLE-SOUND': (action, state) => {
			state.isSoundEnable = !state.isSoundEnable;
			return { newState: state }
		},
		'CHNG-PASS': (action, state) => {
			console.log(action.type, action.data);
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
			state.domain = value ? value[1] : '';
			state.storageKeys = value ? value[3]: '';
			//TODO: MAKE THIS SUPPORT ONE TO MANY CHANNELS
			state.channelList = [{title: value ? value[2]: ''}];
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
		}
	}
};
