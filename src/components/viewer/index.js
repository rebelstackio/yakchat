import { MetaComponent } from '@rebelstack-io/metaflux';

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
		this.createMsgList(this.msgList);
		global.storage.on('TOGGLE-CHAT', this.handleTogge.bind(this))
		return this.listContent;
	}
	/**
	 * create the messages list
	 */
	createMsgList (list) {
		this.listContent.className = 'yak-viewer-list';
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
	 * handle the toggle action to scroll down
	 */
	handleTogge () {
		if (this.storage.getState().Main.isOpen) {
			this.scrollTop = this.scrollHeight;
		}
	}
	/**
	 * Handle Events in a organized way.
	 */
	handleStoreEvents () {
		return {
			'SEND-MESSAGE': () => {
				this.msgList = this.storage.getState().Main.list;
				this.createMsgList(this.msgList);
			},
			'FB-CONNECT': (state) => {
				console.log(state)
				this.msgList = this.storage.getState().Main.list;
				this.createMsgList(this.msgList);
			}
		};
	}
}

window.customElements.define('yak-viewer', Viewer);
