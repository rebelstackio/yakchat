import { MetaComponent } from '@rebelstack-io/metaflux';
import { instanceElement } from '../../utils';
import defaulAvatar from '../../../public/images/user.png';
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
		const profile = instanceElement(
			'div',
			['side-profile'],
			false,
			`
				<img src="${urlImg}" class="profile-img"></img>
			`
		);
		profile.querySelector('.profile-img')
		.addEventListener('click', () => {
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
		content.append(profile, search);
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
			? this.querySelector('#channel-t0')
			: instanceElement('div', ['channel-box'], 'channel-t0');
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
	handleStoreEvents () {
		return {
			'CHANNEL-ARRIVE': (state) => {
				this.createClientView(state.newState.channelList, state.newState.domain);
			}
		}
	}
}

window.customElements.define('yak-sidebar', Sidebar);
