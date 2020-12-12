import { combineReducers } from 'redux';

import auth from './auth';
import user from './user';
import work from './work';

const rootReducer = combineReducers({
	auth,
	user,
	work,
});

export default rootReducer;
