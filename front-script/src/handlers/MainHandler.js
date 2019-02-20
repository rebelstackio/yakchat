import {signInAnonymous, send} from '../controllers/firebase';

/*
* DEFAULT HANDLER
*/

const MainDefaultState = {
	list: [],
	isOpen: true,
	thread: undefined
};

export default {
	MainDefaultState,
	MainHandler: {
		'MSG-ARRIVE': (action, state) => {
			let tmp = state.Main.list;
			if (JSON.stringify(tmp[tmp.length - 1]) !== JSON.stringify(action.msg)) {
				state.Main.list.push(action.msg)
			}
			return { newState: state };
		},
		'TOGGLE-CHAT': (action, state) => {
			state.Main.isOpen = !state.Main.isOpen;
			return { newState: state }
		},
		'FB-CONNECT': (action, state) => {
			state.Main.list = action.msgList;
			return { newState: state }
		},
		'SEND-MESSAGE': (action, state) => {
			send(action.msg);
			return { newState: state }
		},
		'SING-ANONYMOUS': (action, state) => {
			signInAnonymous();
			return { newState: state }
		}
	}
};
