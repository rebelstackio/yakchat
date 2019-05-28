import { MetaComponent } from '@rebelstack-io/metaflux';
import { parsemkey } from '../../utils'
import './index.css';

class Viewer extends MetaComponent {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super(global.storage);
		this.createMsgList = this.createMsgList.bind(this)
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		this.msgList = this.storage.getState().Main.list;
		this.listContent = document.createElement('div');
		global.TPGstorage.dispatch({
			type: 'CHANGE-VIEW',
			viewNumber: 1
		});
		this.createMsgList(this.msgList);
		return this.listContent;
	}
	/**
	 * create the messages list
	 */
	createMsgList (list) {
		this.listContent.innerHTML = '';
		this.listContent.className = 'yak-viewer-list';
		try {
			Object.keys(list).map((l, i) => {
				if (i !== 0) {
					const msgData = list[l][0].split('-');
					const isOperator = list[l].length > 1;
					const keyData = parsemkey(l);
					const listItem = this.createTextMessage(isOperator, msgData, keyData)
					this.listContent.appendChild(listItem);
				}
			})
		} catch (er) {
			///
		}
		this.scrollTop = this.scrollHeight;
	}

	createTextMessage (isOperator, msgData, keyData) {
		const listItem =  document.createElement('div');
		if (keyData.tid === 0) {
			const msg = document.createElement('span');
			const from = document.createElement('span');
			listItem.className = !isOperator ? 'yak-view-item-right' : 'yak-view-item-left';
			msg.className = 'yak-view-msg';
			from.className = 'yak-view-from';
			msg.textContent = atob(msgData[1]);
			from.textContent = msgData[0] + ' ' + new Date(keyData.ts).toDateString()
			listItem.append(msg, from);
		} else {
			const msg = document.createElement('span');
			listItem.className = !isOperator ? 'yak-view-item-right' : 'yak-view-item-left';
			const msgObject = this.getItineraryMsgData(atob(msgData[1]));
			msg.innerHTML = `
			<div class="msg-itinerary">
				<img src="${this.getItineraryLogos(msgObject.icon)}">
				<h3>${ msgObject.title }</h3>
				<span>${ msgObject.description }</span>
			</div>
			<div class="msg-price">
				<span>Qty: ${ msgObject.qty }</span>
				<span>Price: $${ msgObject.price }</span>
				<span>Total: $${ msgObject.price * msgObject.qty }</span>
			</div>
			<span class = "msg-date">${msgData[0]} added to shopping cart - ${ new Date(keyData.ts).toDateString()}</spna>
			`;
			listItem.append(msg);
		}
		return listItem;
	}

	/**
	 * handle the toggle action to scroll down
	 */
	handleTogge () {
		if (this.storage.getState().Main.isOpen) {
			this.scrollTop = this.scrollHeight;
		}
	}
	/**
	 * get the icon url 
	 * @param {String} logoName 
	 */
	getItineraryLogos(logoName) {
		return `https://rebelstackio.github.io/tepagopro/src/assets/icons/itinerary/${logoName}.svg`
	}
	/**
	 * get the itinerary msg data
	 */
	getItineraryMsgData(raw) {
		const splited = raw.split('-');
		let description = splited[2];
		description.replace('\\n', '<br/>');
		const resp = {
			date: splited[0],
			title: splited[1],
			description,
			time: splited[3],
			icon: splited[4],
			qty: parseInt(splited[5]),
			price: parseFloat(splited[6])
		}
		global.TPGstorage.dispatch({
			type: 'ADD-ITINERARY-EXT',
			data: resp
		});
		return resp;
	}
	/**
	 * Handle Events in a organized way.
	 */
	handleStoreEvents () {
		return {
			'MSG-ARRIVE': () => {
				this.msgList = this.storage.getState().Main.list;
				this.createMsgList(this.msgList);
			},
			'FB-CONNECT': () => {
				this.msgList = this.storage.getState().Main.list;
				this.createMsgList(this.msgList);
			},
			'TOGGLE-CHAT': () => {
				this.handleTogge.bind(this)
			}
		};
	}
}

window.customElements.define('yak-viewer', Viewer);
