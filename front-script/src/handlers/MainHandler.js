import { signInAnonymous, send, singUpWithEmail } from '../controllers/firebase';

/*
* DEFAULT HANDLER
*/

const MainDefaultState = {
	list: {},
	isOpen: true,
	thread: undefined
};

export default {
	MainDefaultState,
	MainHandler: {
		'MSG-ARRIVE': (action, state) => {
			const newList = Object.assign({}, state.Main.list, action.msg)
			state.Main.list = newList;
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
		},
		'SIGN-UP': (action, state) => {
			const {email, name, msg} = action
			singUpWithEmail(email, name, msg);
			return { newState: state }
		}
	}
};
