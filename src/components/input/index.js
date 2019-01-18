import { MetaComponent } from '@rebelstack-io/metaflux';

class yakInput extends MetaComponent {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super();
		this.msg = '';
		this.handleInput = this.handleInput.bind(this);
		this.createInput = this.createInput.bind(this);
		this.createButton = this.createButton.bind(this);
		this.handleSend = this.handleSend.bind(this);
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		content.className = 'yak-input-content';
		this.createButton();
		this.createInput();
		content.appendChild(this.input);
		content.appendChild(this.send);
		return content;
	}
	/**
	 * create the main input & handle
	 */
	createInput () {
		this.input = document.createElement('input');
		this.input.setAttribute('type', 'text');
		this.input.className = 'main-input';
		this.input.addEventListener('click', () => {
			this.className = 'focus';
		});
		this.input.addEventListener('input', this.handleInput);
		this.input.addEventListener('focusout', () => {
			this.className = '';
		});
		this.input.addEventListener('keypress', (e) => {
			if (e.key === 'Enter') {
				this.handleSend();
			}
		})
	}
	/**
	 * create the send button & handle
	 */
	createButton () {
		this.send = document.createElement('div');
		this.send.className = 'yak-send-disable';
		const text = document.createElement('p');
		text.textContent = 'Send';
		this.send.appendChild(text);
		this.send.addEventListener('click', this.handleSend);
	}
	/**
	 * function handle, dispatch send message action
	 */
	handleSend () {
		if (this.msg !== '') {
			const msg = {type: 'text', from: {name: 'you'}, msg: this.msg, date: 'a sec ago'}
			global.storage.dispatch({
				type: 'SEND-MESSAGE',
				msg: msg
			})
		}
		this.msg = '';
		this.input.value = '';
		this.send.className = 'yak-send-disable';
	}
	/**
	 * handle the main input content & enable send button
	 */
	handleInput (e) {
		if (e.inputType === 'insertText') {
			this.msg = this.msg ? this.msg + e.data : e.data;
			this.send.className = 'yak-send-enable';
		} else {
			const splited = this.msg.split('');
			this.msg = splited.splice(0, splited.length - 1).join('');
			this.send.className = this.msg !== '' ? 'yak-send-enable' : 'yak-send-disable';
		}
	}

}

window.customElements.define('yak-input', yakInput);
