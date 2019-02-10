import { signInWithEmail, singOut } from '../controllers/firebase';

const MainDefaultState = {
	auth: false,
};

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
			state.auth = false;
			return { newState: state }
		}
	}
};
