import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import immutableTransform from 'redux-persist-transform-immutable';

import auth from './auth';
import user from './user';
import work from './work';
import time from './time';

const persistConfig = {
	transforms: [immutableTransform()],
	key: 'root',
	storage,
	whitelist: ['user'],
};

const rootReducer = combineReducers({
	auth,
	user,
	work,
	time,
});

export default persistReducer(persistConfig, rootReducer);
