import { Map } from 'immutable';
import { initialState } from '../state';

export const workState = Map({
	works: initialState.list,
	before: initialState.list,
	after: initialState.list,
	created: initialState.object,
	updated: initialState.object,
	deleted: initialState.object,
});
