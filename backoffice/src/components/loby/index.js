import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class Loby extends MetaComponent {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super();
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		const sideBar = global.M_instanceElement('div', ['loby-side-menu']);
		const msgBody = global.M_instanceElement('div', ['loby-msg-body']);
		this.createMsgArea(msgBody);
		content.append(sideBar, msgBody);
		return content;
	}
	/**
	 * @description create the mssage box area
	 * @param {HTMLElement} box 
	 */
	createMsgArea (box) {
		const msgHeader = global.M_instanceElement('div', ['msg-head']);
		const msgBody = global.M_instanceElement('div', ['msg-body']);
		const msgInput = global.M_instanceElement('div', ['msg-input']);
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
		const toggleButtom = global.M_instanceElement('div', ['msg-head-logo']);
		const actions = global.M_instanceElement('div', ['msg-head-actions']);
		const logo = global.M_instanceElement(
			'img',
			['rblstck-logo'],
			not, not,
			[{src: 'images/logo.png'}, {width: '30'}, {height: '30'}]
		);
		const channel = global.M_instanceElement(
			'span',
			not, not,
			`#Loby`
		);
		toggleButtom.append(logo, channel);
		box.append(toggleButtom, actions);
	}
	/**
	 * @description create the inputs for the msg area
	 * @param {HTMLElement} box 
	 */
	createInputs (box) {
		const not = undefined;
		const input = global.M_instanceElement(
			'input', ['bottom-input'],
			 not, not,
			 [{type: 'text'}, {placeholder: 'Enter your message'}]
		);
		const inputButton = global.M_instanceElement(
			'div', ['btn', 'icon'],
			not,
			'<i class="fa fa-angle-right"></i>',
			[{type: 'text'}, {placeholder: 'Enter your message'}]
		);
		box.append(input, inputButton);
	}

}

window.customElements.define('yak-loby', Loby);
