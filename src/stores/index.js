import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import immutableTransform from 'redux-persist-transform-immutable';

import auth from './auth';
import user from './user';
import work from './work';
import time from './time';

import { USER_TYPES } from 'stores/user/type';

const persistConfig = {
	transforms: [immutableTransform()],
	key: 'root',
	storage,
	whitelist: ['user'],
};

const appReducer = combineReducers({
	auth,
	user,
	work,
	time,
});

const rootReducer = (state, action) => {
	if (action?.type === USER_TYPES.LOGOUT) state = undefined;

	return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
