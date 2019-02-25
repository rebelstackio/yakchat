import { MetaComponent } from '@rebelstack-io/metaflux';
import { instanceElement } from '../../utils';
import './index.css';

class Loby extends MetaComponent {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super(global.storage);
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		const sideBar = instanceElement('yak-sidebar', ['loby-side-menu']);
		const msgBody = instanceElement('div', ['loby-msg-body']);
		this.createMsgArea(msgBody);
		content.append(sideBar, msgBody);
		return content;
	}
	/**
	 * @description create the mssage box area
	 * @param {HTMLElement} box 
	 */
	createMsgArea (box) {
		const msgHeader = instanceElement('div', ['msg-head']);
		const msgBody = instanceElement('div', ['msg-body']);
		const msgInput = instanceElement('div', ['msg-input']);
		this.createMsgHeader(msgHeader);
		this.createInputs(msgInput);
		box.append(msgHeader, msgBody, msgInput);
	}
	/**
	 * @description create the header
	 * @param {HTMLElement} box 
	 */
	createMsgHeader (box) {
		const not = undefined;
		const toggleButtom = instanceElement('div', ['msg-head-logo']);
		const actions = instanceElement(
			'div',
			['msg-head-actions'],
			not,
			`
				<i class="fa fa-cog" id="options"></i>
				<i class="fa fa-sign-out" id="logout"></i>
			`
		);
		actions.querySelector('#logout').addEventListener('click', () => {
			this.storage.dispatch({ type: 'LOGOUT' });
		});
		const logo = instanceElement(
			'img',
			['rblstck-logo'],
			not, not,
			[{src: 'images/logo.png'}, {width: '30'}, {height: '30'}]
		);
		this.channel = instanceElement(
			'span',
			not, not,
			`#Loby`
		);
		toggleButtom.addEventListener('click', () => {
			this.storage.dispatch({type: 'TOGGLE-MENU'})
		})
		toggleButtom.append(logo, this.channel);
		box.append(toggleButtom, actions);
	}
	/**
	 * @description create the inputs for the msg area
	 * @param {HTMLElement} box 
	 */
	createInputs (box) {
		const not = undefined;
		const input = instanceElement(
			'input', ['bottom-input'],
			 not, not,
			 [{type: 'text'}, {placeholder: 'Enter your message'}]
		);
		const inputButton = instanceElement(
			'div', ['btn', 'icon'],
			not,
			'<i class="fa fa-angle-right"></i>',
			[{type: 'text'}, {placeholder: 'Enter your message'}]
		);
		box.append(input, inputButton);
	}
	/**
	 * @description create the messages
	 * @param {Array} msgList 
	 */
	createMessages (msgList) {
		const body = document.querySelector('.msg-body');
		msgList.forEach(msg => {
			const msgBox = instanceElement(
				'div',
				[msg.from === 'CLIENT' ? 'yak-view-item-left' : 'yak-view-item-right'],
				false,
				`<span class="msg-text">${msg.message}</span>
				 <span class = "msg-date">${msg.date}</spna>
				`
			)
			body.appendChild(msgBox);
		});
	}

	handleStoreEvents () {
		return {
			'TOGGLE-MENU': () => {
				const sideBar = document.querySelector('.loby-side-menu');
				const mainContent = document.querySelector('yak-loby > div');
				if (sideBar.classList.contains('toggled')) {
					sideBar.classList.remove('toggled');
					mainContent.classList.remove('toggled');
				} else {
					sideBar.classList.add('toggled');
					setTimeout(() => { mainContent.classList.add('toggled'); }, 400)
				}
			},
			'CHAT-SELECTED': (state) => {
				const {selectedMessages, clientSelected} = state.newState;
				this.channel.innerHTML = '#' + clientSelected.name;
				this.createMessages(selectedMessages);
			}
		};
	}

}

window.customElements.define('yak-loby', Loby);
