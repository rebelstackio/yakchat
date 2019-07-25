import axios from 'axios';

let authInstance = axios.create({
	baseURL: process.env.AUTH_API_URL,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
});

/**
 * Call yakchat auth server
 */
export function login (email, password) {
	authInstance.post('/login/',
		JSON.stringify({ email, password })
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
	authInstance.post('/signup/' + type, 
		JSON.stringify( obj )
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