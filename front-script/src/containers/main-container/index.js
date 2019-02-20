import { MetaContainer } from '@rebelstack-io/metaflux';
import '../../css/general.css';
import '../../handlers';
import '../../components/input';
import '../../components/viewer';
import '../../components/header';
import '../../components/signup';

class YakMainContainer extends MetaContainer {
	// eslint-disable-next-line class-method-use-this
	render () {
		this.content = document.createElement('div');
		this.content.id = 'container';
		this.content.className = 'simple-chatbox';
		this.input = document.createElement('yak-input');
		this.viewer = document.createElement('yak-viewer');
		const header = document.createElement('yak-header');
		this.input.classList.add('hide');
		this.viewer.classList.add('hide');
		global.storage.on('TOGGLE-CHAT', this.handleMinEvent.bind(this));
		global.storage.on('SING-UP-REQ', this.handleSignEvent.bind(this));
		this.content.append(header, this.input, this.viewer);
		this.createSignUpForm();
		return this.content;
	}
	/**
	 * @description create the sigup form by default has the class .hide
	 */
	createSignUpForm () {
		const signpup = document.createElement('yak-signup');
		this.content.appendChild(signpup);
	}
	/**
	 * @description hadle the toggle chat action
	 */
	handleMinEvent () {
		const isOpen = global.storage.getState().Main.isOpen;
		this.viewer.className = !isOpen ? 'hide' : 'show';
		this.input.className = !isOpen ? 'hide' : 'show';
		this.content.classList.toggle('no-border');
	}
	/**
	 * @description toggle between the sign-up and the message viewver
	 */
	handleSignEvent () {
		this.viewer.classList.toggle('hide');
		this.input.classList.toggle('hide');
		const signup = document.querySelector('yak-signup');
		signup.classList.toggle('hide');
		if (signup.classList.contains('hide')) {
			document.querySelector('.fa.fa-user-secret').className = 'fa fa-user';
			global.storage.dispatch({ type: 'SING-ANONYMOUS' })
		} else {
			document.querySelector('.fa.fa-user').className = 'fa fa-user-secret';
		}
	}
}

window.customElements.define('yak-main-container', YakMainContainer);
