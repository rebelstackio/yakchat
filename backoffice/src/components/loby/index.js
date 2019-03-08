import { MetaComponent } from '@rebelstack-io/metaflux';
import { instanceElement } from '../../utils';
import cogIcon from '../../css/icons/cog-solid.svg';
import logoutIcon from '../../css/icons/sign-out-alt-solid.svg';
import imageURL from '../../images/logo/yakchat.svg';
import sendIcon from '../../css/icons/chevron-right-solid.svg';
import '../patchprofile';
import '../editchannel';
import './index.css';

class Loby extends MetaComponent {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super(global.storage);
	}
	addListeners() {
		const toggleButton = this.querySelector('.msg-head-logo');
		const inputButton = this.querySelector('#input-button');
		toggleButton.addEventListener('click', () => {
			this.toggleSidebar();
		});
		inputButton.addEventListener('click', () => {
			this.sendMessage(input);
		});
		this.querySelector('#logout').addEventListener('click', () => {
			this.storage.dispatch({ type: 'LOGOUT' });
			document.location.hash = '#/login';
		});
		this.querySelector('#settings').addEventListener('click', () => {
			this.toggleSetting();
		});
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		const sideBar = instanceElement('yak-sidebar', ['loby-side-menu']);
		if (w <= 400) {
			content.classList.add('toggled');
			sideBar.classList.add('toggled');
		}
		const msgBody = instanceElement('div', ['loby-msg-body']);
		this.createMsgArea(msgBody);
		content.append(sideBar, msgBody);
		const settingsPopUp = instanceElement('yak-settings', ['hide']);
		const profilePopUp = instanceElement('yak-patchprofile');
		const editchannelPopUp = instanceElement('yak-editchannel');
		this.append(settingsPopUp, profilePopUp, editchannelPopUp);
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
		const toggleButton = instanceElement('div', ['msg-head-logo']);
		const actions = instanceElement(
			'div',
			['msg-head-actions'],
			not,
			`
				<img src="${cogIcon}" id="settings"></img>
				<img src="${logoutIcon}" id="logout"></img>
			`
		);
		const logo = instanceElement(
			'img',
			['rblstck-logo'],
			not, not,
			[{src: imageURL}, {width: '30'}, {height: '30'}]
		);
		this.channel = instanceElement(
			'span',
			not, 'header-channel',
			`#Loby`
		);
		toggleButton.append(logo, this.channel);
		box.append(toggleButton, actions);
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
			'input-button',
			`<img src="${sendIcon}"></img>`,
			[{type: 'text'}, {placeholder: 'Enter your message'}]
		);
		input.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') {
				this.sendMessage(input);
			}
		});
		box.append(input, inputButton);
	}
	/**
	 * @description dispatch the send message action
	 * @param {HTMLElement} input 
	 */
	sendMessage (input) {
		if (input.value !== '') {
			this.storage.dispatch({ type: 'SEND-MESSAGE', data: input.value })
			input.value = '';
		}
	}
	/**
	 * @description create the messages
	 * @param {Array} msgList 
	 */
	createMessages (msgList) {
		const body = document.querySelector('.msg-body');
		body.innerHTML = '';
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
			body.scrollTop = body.scrollHeight;
		});
	}
	/**
	 * handle the toggle sidebar
	 */
	toggleSidebar () {
		const sideBar = document.querySelector('.loby-side-menu');
		const mainContent = document.querySelector('yak-loby > div');
		if (sideBar.classList.contains('toggled')) {
			sideBar.classList.remove('toggled');
			mainContent.classList.remove('toggled');
		} else {
			sideBar.classList.add('toggled');
			setTimeout(() => { mainContent.classList.add('toggled'); }, 400)
		}
	}
	/**
	 * handle the toggle pop up settings
	 */
	toggleSetting () {
		console.log('toggling the settings');
		this.querySelector('yak-settings').classList.toggle('hide');
	}
	
	handleStoreEvents () {
		return {
			'CHAT-SELECTED': (state) => {
				const {selectedMessages, clientSelected} = state.newState;
				document.querySelector('#header-channel').innerHTML = '#' + clientSelected.name;
				this.createMessages(selectedMessages);
			},
			'SEND-MESSAGE': (state) => {
				const {selectedMessages, clientSelected} = state.newState;
				document.querySelector('#header-channel').innerHTML = '#' + clientSelected.name;
				this.createMessages(selectedMessages);
			}
		};
	}

}

window.customElements.define('yak-loby', Loby);
