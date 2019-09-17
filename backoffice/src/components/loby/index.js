import { MetaComponent } from '@rebelstack-io/metaflux';
import { instanceElement, parsemkey } from '../../utils';
import cogIcon from '../../assets/icons/cog-solid.svg';
import logoutIcon from '../../assets/icons/sign-out-alt-solid.svg';
import imageURL from '../../assets/images/logo/yakchat.svg';
import sendIcon from '../../assets/icons/paper-plane-solid.svg';
import shoppingIcon from '../../assets/icons/cart-plus-solid.svg';
import '../patchprofile';
import '../editchannel';
import '../verificationpopup';
import '../shoppingcart';
import './index.css';
import './msgarea';

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
			const input = document.querySelector('.msg-input > input');
			this.sendMessage(input);
		});
		this.querySelector('#logout').addEventListener('click', () => {
			this.storage.dispatch({ type: 'LOGOUT' });
			document.location.pathname = '/login/';
		});
		/*
		this.querySelector('#settings').addEventListener('click', () => {
			this.toggleSetting();
		});*/
		document.querySelector('.shopping-icon').addEventListener('click', () => {
			document.querySelector('#shopping-popup-container').classList.toggle('hide');
		});
		document.querySelector('#close-shopping').addEventListener('click', ()=> {
			document.querySelector('#shopping-popup-container').classList.toggle('hide');
		})
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		const sideBar = instanceElement('yak-sidebar', ['loby-side-menu']);
		global.TPGstorage.dispatch({
			type: 'CHANGE-VIEW',
			viewNumber: 1
		});
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
		const verificaiontPopUp = instanceElement('yak-verification');
		this.append(settingsPopUp, profilePopUp, editchannelPopUp, verificaiontPopUp);
		return content;
	}
	/**
	 * @description create the mssage box area
	 * @param {HTMLElement} box 
	 */
	createMsgArea (box) {
		const msgHeader = instanceElement('div', ['msg-head']);
		const msgBodyContainer = instanceElement('msg-area');
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
				<!-- <img src="${cogIcon}" id="settings"></img> -->
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
			`#Lobby`
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
		const shopButtom = instanceElement (
			'div', ['icon', 'shopping-icon'],
			false,`
			<img src="${shoppingIcon}"> </img>
			`
		)
		input.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') {
				this.sendMessage(input);
			}
		});
		box.append(input, inputButton, shopButtom);
	}
	/**
	 * @description dispatch the send message action
	 * @param {HTMLElement} input 
	 */
	sendMessage (input) {
		if (input.value !== '') {
			this.storage.dispatch({ type: 'SEND-MESSAGE', data: input.value, msgType: 'AA' })
			input.value = '';
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
			mainContent.classList.add('toggled');
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
			'LOGIN-SUCCESS': (state) => {
				const { accessLevel, emailVerified } = state.newState.Main;
				/*if (accessLevel === 3) {
					// if it's an operator hide the settings
					this.querySelector('#settings').style.display = 'none';
				}*/
				console.log(emailVerified);
				if (!emailVerified) {
					document.querySelector('#verification-popup-container').classList.remove('hide');
				}
			}
		};
	}

}

window.customElements.define('yak-loby', Loby);
