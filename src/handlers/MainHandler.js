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
			//console.log(state.Main.list);
			state.Main.list.push(action.msg)
			return { newState: state };
		},
		'TOGGLE-CHAT': (action, state) => {
			state.Main.isOpen = !state.Main.isOpen;
			return { newState: state }
		},
		'FB-CONNECT': (action, state) => {
			state.Main.list = action.msgList;
			return { newState: state }
		}
	}
};
