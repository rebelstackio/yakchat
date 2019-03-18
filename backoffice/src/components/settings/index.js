import { MetaComponent } from '@rebelstack-io/metaflux';
import { instanceElement } from '../../utils';
import './index.css';

class Settings extends MetaComponent {
	constructor () {
		super(global.storage);
	}
	get fbToken () {
		return this.querySelector('#fb-token').value;
	}
	get ggleToken () {
		return this.querySelector('#ggle-token').value;
	}
	set fbToken (value) {
		this.querySelector('#fb-token').value = value
	}
	set ggleToken (value) {
		this.querySelector('#ggle-token').value = value;
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = instanceElement('div', ['profile-popup-container', 'hide'], 'setting-box-container', `
			<div id="setting-box">
				<div class="profile-title">
					<div>Settings</div>
					<span id="set-close"> X </span>
				</div>
			</div>
		`);
		this.accessLevel = this.storage.getState().Main.accessLevel;
		return content;
	}

	addListeners () {
		const closeButton = this.querySelector('#set-close');
		closeButton.addEventListener('click', () => {
			this.querySelector('.profile-popup-container').classList.toggle('hide');
		});
	}

	createOptions (box) {
		const optionBox = instanceElement('div', ['option-body']);
		this.createChatSettings(optionBox);
		this.createUserSettings(optionBox);
		box.appendChild(optionBox);
	}

	createUserSettings (box) {
		const userBox = instanceElement('div', ['user-settings'], false, '<h2>User settings</h2>');
		const crrntPass = instanceElement('input',
			false, false, false,
			[{type: 'password', placeholder: 'Current Password'}]
		);
		const newPass = instanceElement('input',
			false, false, false,
			[{type: 'password', placeholder: 'New Password'}]
		);
		const newPassRP = instanceElement('input',
			false, false, false,
			[{type: 'password', placeholder: 'Repeat your password'}]
		);
		const Submit = instanceElement('button', ['btn', 'primary'], false, 'Submit')
		const chngPassBox = instanceElement('div', ['set-new-pass']);
		chngPassBox.append(crrntPass, newPass, newPassRP, Submit);
		Submit.addEventListener('click', () => {
			if (crrntPass.value !== '' && newPass.value !== '' && newPassRP.value !== '') {
				if (newPass.value === newPassRP.value) {
					this.storage.dispatch({
						type: 'CHNG-PASS', 
						data: {newPass: newPass.value, oldPass: crrntPass.value}
					})
				} else {
					console.error('error the password dont match')
				}
			} else {
				console.error('all the fields are mandatory')
			}
		})
		userBox.appendChild(chngPassBox);
		box.appendChild(userBox);
	}

	createChatSettings (box) {
		const enableBox = instanceElement('div', false, false, '<h3>Enable sounds</h3>');
		const enableSound = instanceElement('i', ['fa', 'fa-check-square']);
		const chatOptions = instanceElement('div', ['chat-settings'], false, '<h2>Chat settings</h2>');
		enableSound.addEventListener('click', () => {
			this.storage.dispatch({ type: 'TOGGLE-SOUND' });
		})
		chatOptions.appendChild(enableBox);
		enableBox.appendChild(enableSound);
		box.append(chatOptions);
	}

	createClientSettings () {
		const body = this.querySelector('#setting-box');
		const optionBox = this.querySelector('.option-body')
		? this.querySelector('.option-body')
		: instanceElement('div', ['option-body']);
		optionBox.innerHTML = '';
		const actionSettings = instanceElement('div', ['client-action-settings'], false,
		`
			<div id="mail-history" class="btn light">Send Chat history to email</div>
			<div id="dashboard" class="btn light">Dashboard</div>
		`
		);
		const storageSetting = instanceElement('div', ['client-storage-settings'], false,
		`
			<input class="inp light" type="text" id="fb-token" placeholder="Firebase Token"/>
			<input class="inp light" type="text" id="ggle-token" placeholder="Analytics Token"/>
			<div id="save-settings"class="btn primary">Save</div>
		`
		);
		storageSetting.querySelector('#save-settings')
		.addEventListener('click', () => {
			// dispatch the save event
			const fbToken = this.fbToken;
			const ggleToken = this.ggleToken;
			this.storage.dispatch({type: 'SAVE-STORAGE-SETTING', data: {
				fbToken, ggleToken
			}});
		})
		optionBox.append(actionSettings, storageSetting);
		body.appendChild(optionBox);
	}

	handleStoreEvents () {
		return {
			'TOGGLE-SOUND': (action) => {
				const { isSoundEnable } = action.newState;
				const check = 
					document.querySelector('.fa.fa-check-square') ||
					document.querySelector('.fa.fa-square');
				console.log(check);
				check.className = isSoundEnable ? 'fa fa-check-square' : 'fa fa-square'
			},
			'OPEN-SETTINGS': () => {
				if (this.accessLevel >= 5) {
					// client settings
					this.createClientSettings();
					const fbToken = Object.keys(this.storageKeys)[0];
					this.fbToken = fbToken;
					this.ggleToken = this.storageKeys[fbToken];
				} else {
					// operator
					const body = this.querySelector('#setting-box');
					this.createOptions(body);
				}
			},
			'LOGIN-SUCCESS': (state) => {
				this.accessLevel = state.newState.Main.accessLevel;
			},
			'CHANNEL-ARRIVE': (state) => {
				this.storageKeys = state.newState.Main.storageKeys;
			}
		}
	}

}

window.customElements.define('yak-settings', Settings);
