import { MetaComponent } from '@rebelstack-io/metaflux';
import '../../handlers';

class Viewer extends MetaComponent {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super(global.storage);
		this.getMsgList = this.getMsgList.bind(this)
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		this.msgList = this.storage.getState().Main.list;
		this.listContent = document.createElement('div');
		this.listContent.className = 'yak-viewer-list';
		this.getMsgList(this.msgList);
		return this.listContent;
	}
	/**
	 * set the messages list
	 */
	getMsgList (list) {
		this.listContent.innerHTML = '';
		list.map((l) => {
			const listItem = document.createElement('div');
			const msg = document.createElement('span');
			const from = document.createElement('span');
			listItem.className = l.from.name === 'you' ? 'yak-view-item-right' : 'yak-view-item-left';
			msg.className = 'yak-view-msg';
			from.className = 'yak-view-from';
			msg.textContent = l.msg;
			from.textContent = l.from.name + ': ' + l.date;
			listItem.append(msg, from);
			this.listContent.appendChild(listItem);
		})
		this.scrollTop = this.scrollHeight;
	}
	/**
	 * Handle Events in a organized way.
	 */
	handleStoreEvents () {
		return {
			'SEND-MESSAGE': action => {
				this.msgList = this.storage.getState().Main.list;
				this.getMsgList(this.msgList);
			}
		};
	}
}

window.customElements.define('yak-viewer', Viewer);
