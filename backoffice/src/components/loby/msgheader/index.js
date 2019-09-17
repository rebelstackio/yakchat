import { MetaComponent } from '@rebelstack-io/metaflux';
import { instanceElement } from '../../../utils';
import cogIcon from '../../../assets/icons/cog-solid.svg';
import logoutIcon from '../../../assets/icons/sign-out-alt-solid.svg';
import imageURL from '../../../assets/images/logo/yakchat.svg';
import './index.css';

class MsgHeader extends MetaComponent {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super(global.storage);
	}
	addListeners() {
		const toggleButton = this.querySelector('.msg-head-logo');
		toggleButton.addEventListener('click', () => {
			this.toggleSidebar();
		});
		this.querySelector('#logout').addEventListener('click', () => {
			this.storage.dispatch({ type: 'LOGOUT' });
			document.location.pathname = '/login/';
		});
		/*
		this.querySelector('#settings').addEventListener('click', () => {
			this.toggleSetting();
		});*/
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = instanceElement('div', ['msg-head']);
		this.createMsgHeader(content);
		return content;
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
		};
	}

}

window.customElements.define('msg-header', MsgHeader);
