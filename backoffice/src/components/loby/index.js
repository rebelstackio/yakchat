import { MetaComponent } from '@rebelstack-io/metaflux';
import { instanceElement } from '../../utils';
import '../patchprofile';
import '../editchannel';
import '../verificationpopup';
import '../shoppingcart';
import './index.css';
import './msgarea';
import './msgheader';
import './msginput';

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
		const msgHeader = instanceElement('msg-header');
		const msgBodyContainer = instanceElement('msg-area');
		const msgInput = instanceElement('msg-input');
		box.append(msgHeader, msgBodyContainer, msgInput);
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
