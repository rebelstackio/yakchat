import { MetaComponent } from '@rebelstack-io/metaflux';
import { instanceElement } from '../../utils';
import defaulAvatar from '../../images/user.png';
import cog from '../../css/icons/cog-solid.svg';
import './index.css';
class Sidebar extends MetaComponent {
	constructor () {
		super(global.storage);
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = instanceElement('div', false, 'sidebar-content');
		const uid = localStorage.getItem('fb-hash');
		this.channelList = global.storage.getState().Main.channelList;
		this.accessLevel = global.storage.getState().Main.accessLevel;
		const urlImg = localStorage.getItem(uid) ? localStorage.getItem(uid) : defaulAvatar;
		const chnlBox = instanceElement('div', ['channel-box'], 'channel-t0');
		const thBox = instanceElement('ol', false, 'threads');
		const profile = instanceElement(
			'div',
			['side-profile'],
			false,
			`
				<img src="${urlImg}" class="profile-img"></img>
				<span id="user-name"><span>
			`
		);
		profile.querySelector('.profile-img')
		.addEventListener('click', () => {
			global.storage.dispatch({ type: 'OPEN-PROFILE' })
			document.querySelector('#profile-popup').classList.toggle('hide');
		})
		const search = instanceElement(
			'div',
			['search-box'],
			false,
			`<input type="text" class="search-input"></input>
			 <i class="fa fa-search"></i>
			`
		);
		content.append(profile, search, chnlBox, thBox);
		return content;
	}

	selectChat (cl) {
		global.storage.dispatch({ type: 'CHAT-SELECTED', data: cl });
	}
	/**
	 * create the 
	 * @param {Arrya} channelList 
	 */
	createClientView (channelList, domain) {
		const sidebar = this.querySelector('#sidebar-content');
		const chnlBox = this.querySelector('#channel-t0')
		chnlBox.innerHTML = '';
		channelList.forEach(chnl => {
			const chEl = instanceElement('div', ['collapse'], false,
				`<span class="chnl-title">
					${chnl.title ? chnl.title : 'add'} 
				 	<img src="${cog}"></img>
				 </span>`
			);
			chEl.querySelector('img')
			.addEventListener('click', () => {
				document.querySelector('#channel-popup').classList.toggle('hide');
				global.storage.dispatch({
					type: 'CHANNEL-SELECT',
					data: {
						channel: chnl.title ? chnl.title : '',
						domain
					}
				})
			})
			chnlBox.appendChild(chEl);
		});
		sidebar.appendChild(chnlBox);
	}

	createChnlView (el) {
		const { chnlList } = global.storage.getState().Main;
		const chnlBox = instanceElement('div', ['channel-box']);
		try {
			chnlList.forEach(chnl => {
				const chEl = instanceElement('div', ['collapse'], false,
				`<span class="chnl-title">
					${chnl.title} 
				 	<i class="fa fa-caret-right"></i>
				 </span>`
				 );
				chEl.querySelector('.chnl-title').addEventListener('click', () => {
					chEl.classList.toggle('collapse');
				})
				const ul = instanceElement('ul');
				chnl.clientList.forEach(cl => {
					const li = instanceElement('li', false, cl.id, cl.name);
					li.addEventListener('click', () => {
						this.selectChat(cl);
					})
					ul.appendChild(li);
				})
				chEl.appendChild(ul);
				chnlBox.appendChild(chEl);
			});
			el.appendChild(chnlBox);
		} catch (err) {
			//
		}
	}
	/**
	 * list the client threads in his channel
	 */
	listClientThreads(msgObject) {
		const sidebar = this.querySelector('#sidebar-content');
		const thBox = this.querySelector('#threads');
		thBox.innerHTML = '';
		Object.keys(msgObject).forEach(uid => {
			const type = msgObject[uid][0] === ''
				? 'Visitor'
				: `
					${msgObject[uid][0].split('-')[0]}
					<span>${msgObject[uid][0].split('-')[1]}</span>
				`
			const li = instanceElement('li', ['thread-item'], uid, type);
			li.addEventListener('click', () => {
				this.storage.dispatch({type: 'CHAT-SELECTED', data: {
					clientSelected: type,
					messages: this.storage.getState().Main.threads[uid],
					visitorId: uid
				}})
			})
			thBox.appendChild(li);
		});
		sidebar.appendChild(thBox);
	}

	handleStoreEvents () {
		return {
			'CHANNEL-ARRIVE': (state) => {
				const channelList = this.storage.getState().Main.channelList;
				const domain = this.storage.getState().Main.domain;
				const threads = this.storage.getState().Main.threads;
				this.createClientView(channelList,domain);
				this.listClientThreads(threads);
			},
			'LOGIN-SUCCESS': () => {
				this.querySelector('#user-name').innerHTML = this.storage.getState().Main.displayName;
			},
			'PROFILE-CHANGED': (state) => {
				const { displayName } = state.newState.Main;
				this.querySelector('#user-name').innerHTML = displayName;
			},
			'UPLOAD-SUCCESS': () => {
				const {uid} = this.storage.getState().Main;
				this.querySelector('.profile-img').src = localStorage.getItem(uid);
			}
		}
	}
}

window.customElements.define('yak-sidebar', Sidebar);
