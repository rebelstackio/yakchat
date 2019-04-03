import { MetaComponent } from '@rebelstack-io/metaflux';
import { instanceElement, parsemkey } from '../../utils';
import cogIcon from '../../assets/icons/cog-solid.svg';
import logoutIcon from '../../assets/icons/sign-out-alt-solid.svg';
import imageURL from '../../assets/images/logo/yakchat.svg';
import sendIcon from '../../assets/icons/chevron-right-solid.svg';
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
			if (document.location.pathname.match('yakchat') !== null) {
				document.location.pathname = '/yakchat/login/';
			} else {
				document.location.pathname = '/login/';
			}
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
		const settingsPopUp = instanceElement('yak-settings');
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
		const msgBodyContainer = instanceElement('div', ['msg-body-container']);
		const msgBody = instanceElement('div', ['msg-body']);
		msgBodyContainer.appendChild(msgBody);
		const msgInput = instanceElement('div', ['msg-input']);
		this.createMsgHeader(msgHeader);
		this.createInputs(msgInput);
		box.append(msgHeader, msgBodyContainer, msgInput);
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
			'div', ['icon', 'send-message-icon'],
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
	 * @param {Object} msgList 
	 */
	createMessages (msgList) {
		const body = document.querySelector('.msg-body');
		body.innerHTML = '';
		const uid = this.storage.getState().Main.uid;
		try {
			Object.keys(msgList).forEach((msg, i) => {
				if (i !== 0) {
					const dataKey = parsemkey(msg);
					const date = new Date(dataKey.ts).toDateString();
					const isYou = msgList[msg][1] === uid;
					const message = msgList[msg][0].split('-');
					const msgBox = instanceElement(
						'div',
						[!isYou ? 'yak-view-item-left' : 'yak-view-item-right'],
						false,
						`<span class="msg-text">${atob(message[1])}</span>
						<span class = "msg-date">${message[0]} - ${date}</spna>
						`
					)
					body.appendChild(msgBox);
					body.scrollTop = body.scrollHeight;
				} 
			});
		} catch (e) {
			//
		}
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
		document.querySelector('#setting-box-container.profile-popup-container').classList.toggle('hide');
		this.storage.dispatch({type: 'OPEN-SETTINGS'});
	}
	
	handleStoreEvents () {
		return {
			'CHAT-SELECTED': (state) => {
				const {selectedMessages, clientSelected} = state.newState.Main;
				document.querySelector('#header-channel').innerHTML = '#' + clientSelected;
				this.createMessages(selectedMessages);
			},
			'MSG-ARRIVE': (state) => {
				const {selectedMessages} = state.newState.Main;
				this.createMessages(selectedMessages);
			},
			'LOGIN-SUCCESS': (state) => {
				const {accessLevel} = this.storage.getState().Main;
				if (accessLevel === 3) {
					// if it's an operator hide the settings
					this.querySelector('#settings').style.display = 'none';
				}
			}
		};
	}

}

window.customElements.define('yak-loby', Loby);
