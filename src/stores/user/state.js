import { Map } from 'immutable';

export const userState = Map({
	logined: Map({
		user: Map({}),
		accessToken: null,
		loginTime: null,
	}),
});
