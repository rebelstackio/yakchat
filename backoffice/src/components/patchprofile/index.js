import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class PatchProfile extends MetaComponent {
	
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super();
	}

	get email() {
		return this.querySelector('#email').value;
	}

	get password() {
		return this.querySelector('#password').value;
	}

	get displayName() {
		return this.querySelector("#display-name").value;
	}

	get currentPassword () {
		return this.querySelector('#current-password').value;
	}

	set displayName (name) {
		this.querySelector('#display-name').value = name;
	}

	set email(email) {
		this.querySelector('#email').value = email;
	}

	addListeners() {
		const input = this.querySelector('#upload');
		const preview = this.querySelector('.prof-pict > img');
		this.querySelector('#patch')
		.addEventListener('click', () => {
			this.handleSend(this.email, this.password, this.currentPassword , this.displayName)
		})
		input
		.addEventListener('change', (e) => {
			const pict = input.files[0];
			var reader  = new FileReader();
			reader.onloadend = function () {
				preview.src = reader.result;
				const uid = localStorage.getItem('fb-hash');
				localStorage.setItem(uid, reader.result);
			}
			if (pict) {
				reader.readAsDataURL(pict); //reads the data as a URL
				this.handleUpload(pict);
			} else {
				preview.src = "";
			}
		});
		global.storage.on('LOGIN-SUCCESS', (state) => {
			this.displayName = state.newState.displayName;
			this.email = state.newState.email;
		})
	}

	render () {
		const uid = localStorage.getItem('fb-hash');
		const profileUrl = localStorage.getItem(uid)
		? localStorage.getItem(uid)
		: '';
		return /*html*/`
		<div id="profile-popup">
			<h2> edit profile </h2>
			<div class="prof-pict">
				<label for="upload" class="custom-file-upload">
					Upload
				</label>
				<input id="upload" type="file">
				<img src="${profileUrl}" height="200" alt="Image preview...">
				<!--an image tag-->
			</div>
			<input type="text" placeholder="change name" id="display-name"/>
			<input type="password" placeholder="Current Password" id="current-password"/>
			<input type="password" placeholder="change password" id="password"/>
			<input type="email" placeholder="change email" id="email"/>
			<input type="submit" id="patch" value="save"/>
		</div>
		`;
	}

	handleSend (email, password, currentPassword , displayName) {
		global.storage.dispatch({
			type: 'PATCH-PROFILE', 
			data : {
				email, password, displayName, currentPassword
			}
		});
	}

	handleUpload (img) {
		global.storage.dispatch({
			type: 'UPLOAD-PROFILE-IMG',
			data: {
				img,
				uid: global.storage.getState().Main.uid
			}
		})
	}

}

window.customElements.define('yak-patchprofile', PatchProfile);
