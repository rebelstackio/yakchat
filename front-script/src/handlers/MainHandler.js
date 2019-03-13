import { signInAnonymous, send, singUpWithEmail } from '../controllers/firebase';

/*
* DEFAULT HANDLER
*/

const MainDefaultState = {
	list: {},
	isOpen: true,
	thread: undefined,
	isLoading: true
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
			state.Main.isLoading = false;
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
			const {email, name} = action
			singUpWithEmail(email, name);
			return { newState: state }
		}
	}
};
