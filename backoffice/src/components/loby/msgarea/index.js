import { MetaComponent } from '@rebelstack-io/metaflux';
import { instanceElement, parsemkey } from '../../../utils';
import './index.css';

class MsgArea extends MetaComponent {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super(global.storage);
	}
	addListeners() {

	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		const msgBody = instanceElement('div', ['loby-msg-body']);
		this.createMsgArea(msgBody);
		content.append(msgBody);
		return content;
	}
	/**
	 * @description create the mssage box area
	 * @param {HTMLElement} box 
	 */
	createMsgArea (box) {
		const msgBodyContainer = instanceElement('div', ['msg-body-container']);
		const msgBody = instanceElement('div', ['msg-body']);
		msgBodyContainer.appendChild(msgBody);
		box.append(msgBodyContainer);
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
					const type = dataKey.tid;
					const date = new Date(dataKey.ts).toDateString();
					const isYou = msgList[msg][1] === uid;
					const message = msgList[msg][0].split('-');
					if (message[0] != "0"){
						const msgBox = this.createMessageBody(atob(message[1]), message[0], date, type, isYou);
						body.appendChild(msgBox);
					}
					body.scrollTop = body.scrollHeight;
				} 
			});
		} catch (e) {
			//
			console.log(e);
		}
	}
	/**
	 * create message for the cart item type
	 * @param {String} text msgText
	 * @param {Boolean} isYou 
	 * @param {String} mail 
	 * @param {String} date 
	 */
	createCartItem(text, isYou, mail, date) {
		const msgData = text.split('-');
			const qty = parseInt(msgData[5]);
			const price = parseFloat(msgData[6]);
			const total = price * qty;
			global.TPGstorage.dispatch({
				type: 'ADD-ITINERARY-EXT',
				data: {
					time: msgData[3],
					price: price,
					icon: msgData[4],
					title: msgData[1],
					description: msgData[2],
					date: msgData[0],
					qty
				}
			});
			return instanceElement(
				'div',
				[!isYou ? 'yak-view-item-left' : 'yak-view-item-right'],
				false,
				`<div class="msg-itinerary">
					<img src="${this.getItineraryLogos(msgData[4])}">
					<h3>${ msgData[1] }</h3>
					<span>${ msgData[2] }</span>
				</div>
				<div class="msg-price">
					<span>Qty: ${ qty }</span>
					<span>Price: $${ price }</span>
					<span>Total: $${ total }</span>
				</div>
				<span class = "msg-date">${mail} added to shopping cart - ${date}</spna>
				`
			)
	}
	/**
	 * create the message body by type
	 */
	createMessageBody(text, mail, date, type, isYou) {
		if (type === 1) {
			return this.createCartItem(text, isYou, mail, date);
		} else {
			return instanceElement(
				'div',
				[!isYou ? 'yak-view-item-left' : 'yak-view-item-right'],
				false,
				`<span class="msg-text">${text}</span>
				<span class = "msg-date">${mail} - ${date}</spna>
				`
			)
		}
	}
	/**
	 * get the icon url 
	 * @param {String} logoName 
	 */
	getItineraryLogos(logoName) {
		return `https://rebelstackio.github.io/tepagopro/src/assets/icons/itinerary/${logoName}.svg`
	}
	
	handleStoreEvents () {
		return {
			'CHAT-SELECTED': (state) => {
				const {selectedMessages, clientSelected} = state.newState.Main;
				global.TPGstorage.dispatch({ type: 'CLEAR-ITINERARY' });
				document.querySelector('#header-channel').innerHTML = '#' + clientSelected;
				this.createMessages(selectedMessages);
			},
			'MSG-ARRIVE': (state) => {
				const {selectedMessages} = state.newState.Main;
				this.createMessages(selectedMessages);
			}
		};
	}

}

window.customElements.define('msg-area', MsgArea);
