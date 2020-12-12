import { createAction, handleActions } from 'redux-actions';

import { USER_TYPES } from './type';
import { userState } from './state';

export const onLogout = createAction(USER_TYPES.LOGOUT);

export default handleActions(
	{
		[USER_TYPES.SET_LOGINED]: (state, action) => {
			const user = action?.payload?.user;
			const accessToken = action?.payload?.accessToken;

			return state
				.setIn(['logined', 'user'], user)
				.setIn(['logined', 'accessToken'], accessToken)
				.setIn(['logined', 'loginTime'], new Date());
		},
		[USER_TYPES.LOGOUT]: (state, _) => {
			return userState;
		},
	},
	userState,
);
