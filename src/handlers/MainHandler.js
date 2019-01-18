/*
* DEFAULT HANDLER
*/

const MainDefaultState = {
	list: [
		{
			type: 'text',
			from: {
				name: 'otto-roboto'
			},
			msg: 'Welcome to Yak Chat',
			date: 'a minute ago'
		},
		{
			type: 'text',
			from: {
				name: 'you'
			},
			msg: 'Hi Otto Roboto',
			date: 'a sec ago'
		}
	],
	isOpen: true
};

export default {
	MainDefaultState,
	MainHandler: {
		'SEND-MESSAGE': (action, state) => {
			state.Main.list.push(action.msg)
			return { newState: state };
		},
		'TOGGLE-CHAT': (action, state) => {
			state.Main.isOpen = !state.Main.isOpen;
			return { newState: state }
		}
	}
};
