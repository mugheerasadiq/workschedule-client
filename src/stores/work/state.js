import { Map } from 'immutable';
import { initialState } from '../state';

export const workState = Map({
	works: initialState.list,
	created: initialState.object,
	updated: initialState.object,
	deleted: initialState.object,
});
