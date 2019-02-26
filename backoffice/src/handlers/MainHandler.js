import { signInWithEmail, singOut } from '../controllers/firebase';
import { stat } from 'fs';

const MainDefaultState = {
	auth: localStorage.getItem('fb-hash') ? true : false,
	isSoundEnable: true,
	chnlList : [
		{
			title: 'ToursSercers',
			clientList: [
				{
					name: 'Eustaquio',
					id: 'random-hash'
				},
				{
					name: 'Filomeno',
					id: 'random-hash-2'
				},
				{
					name: 'Anonymous',
					id: 'random-hash-3'
				}
			]
		},
		{
			title: 'RainForestTours',
			clientList: [
				{
					name: 'Eustaquio',
					id: 'random-hash'
				},
				{
					name: 'Filomeno',
					id: 'random-hash-2'
				},
				{
					name: 'Anonymous',
					id: 'random-hash-3'
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
			return { newState: state }
		},
		'LOGOUT': (action, state) => {
			singOut();
			localStorage.removeItem('fb-hash');
			state.auth = false;
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
		}
	}
};
