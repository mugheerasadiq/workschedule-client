import { Map } from 'immutable';
import { initialState } from '../state';

export const authState = Map({
	login: initialState.object,
	register: initialState.object,
});
