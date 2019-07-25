import axios from 'axios';

/**
 * Call yakchat auth server
 */
export function login (email, password) {
	axios.post(process.env.LOGIN_API, 
		JSON.stringify({ email, password }), 
		{headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}}
	)
	.then((response) => {
		console.log(response);
		localStorage.setItem('udata', JSON.stringify({
			accessLevel: 5,
			admin: false,
			uid: '0FxY4aLtrnhRaIzQAbmNNzyarN72',
			displayName: 'GithubClient',
			email: 'gh-client-t01@rebeldemo.com',
			emailVerified: true
		}))
		if (process.env.ENVIROMENT === 'PRODUCTION') {
			document.location.pathname = '/backoffice.html';
		} else {
			document.location.pathname = '/'
		}
		localStorage.setItem('authorization', response.headers.authorization);
	})
	.catch((error) => {
		console.log(error);
		global.storage.dispatch({
			type: 'LOGIN-FAIL',
			error
		});
	})
}

/**
 * Call yakchat auth server
 */
export function signup (email, password, webpage, type, displayname) {
	let obj = { displayname, password, email };
	if (type === "client") obj.webpage = webpage;
	axios.post(process.env.SIGNUP_API + '/' + type, 
		JSON.stringify( obj ), 
		{headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}}
	)
	.then((response) => {
		console.log(response);
		if (process.env.ENVIROMENT === 'PRODUCTION') {
			document.location.pathname = '/backoffice.html';
		} else {
			document.location.pathname = '/login/'
		}
		localStorage.setItem('authorization', response.headers.authorization);
	})
	.catch((error) => {
		console.log(error);
		global.storage.dispatch({
			type: 'SIGNUP-FAIL',
			error
		});
	})
}