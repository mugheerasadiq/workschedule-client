import { handleActions } from 'redux-actions';

import { workState } from './state';
import { WORK_TYPES } from './type';

import * as workApi from '../../services/work';

import {
    createImmutableState,
    createPromiseThunk,
    createPromiseState,
    getAccessToken
} from '../redux';

export const onReset = ({ dispatch }) => {
    console.log('works Reset...');
    dispatch(WORK_TYPES.RESET);
}

//pagination?

export const onGetWorks = createPromiseThunk(
    WORK_TYPES.GET_WORKS,
    workApi.getWorks
);

export const onGetWork = createPromiseThunk(
    WORK_TYPES.GET_WORK,
    workApi.getWork,  
);

export const onUpdateWorks = createPromiseThunk(
    WORK_TYPES.UPDATE_WORKS,
    workApi.updateWorks,
    getAccessToken,
    { after : [ onReset ]}
);

export const onCreateWorks = createPromiseThunk(
    WORK_TYPES.CREATE_WORKS,
    workApi.createWorks,
    getAccessToken,
    { after : [ onReset ]}
);

export const onDeleteWorks = createPromiseThunk(
    WORK_TYPES.DELETE_WORKS,
    workApi.deleteWorks,
    getAccessToken,
    { after : [ onReset ]}
);

export default handleActions(
    {
        [WORK_TYPES.RESET] : (state, _) => {
            return workState;
        },
        [WORK_TYPES.GET_WORKS] : (state, _) => {
            const loadingState = createPromiseState.loading();
            return createImmutableState(state, 'works', loadingState);
        },
        [WORK_TYPES.GET_WORKS_DONE] : (state, action) => {
            const doneState = createPromiseState.done(action?.payload);
            return createImmutableState(state, 'works', doneState);
        },
        [WORK_TYPES.GET_WORKS_ERROR] : (state, action) => {
            const errorState = createPromiseState.error(action?.payload);
            return createImmutableState(state, 'works', errorState);
        },
        [WORK_TYPES.GET_WORK] : (state, _) => {
            const loadingState = createPromiseState.loading();
            return createImmutableState(state, 'work', loadingState);
        },
        [WORK_TYPES.GET_WORK_DONE] : (state, action) => {
            const doneState = createPromiseState.done(action?.payload);
            return createImmutableState(state, 'work', doneState);
        },
        [WORK_TYPES.GET_WORK_ERROR] : (state, action) => {
            const errorState = createPromiseState.error(action?.payload);
            return createImmutableState(state, 'work', errorState);
        },
        [WORK_TYPES.CREATE_WORKS] : (state, _) => {
            const loadingState = createPromiseState.loading();
            return createImmutableState(state, 'created', loadingState);
        },
        [WORK_TYPES.CREATE_WORKS_DONE] : (state, _) => {
            const doneState = createPromiseState.done();
            return createImmutableState(state, 'created', doneState);
        },
        [WORK_TYPES.CREATE_WORKS_ERROR] : (state, action) => {
            const errorState = createPromiseState.error(action?.payload);
            return createImmutableState(state, 'created', errorState);
        },
        [WORK_TYPES.UPDATE_WORKS] : (state, _) => {
            const loadingState = createPromiseState.loading();
            return createImmutableState(state, 'updated', loadingState);
        },
        [WORK_TYPES.UPDATE_WORKS_DONE] : (state, _) => {
            const doneState = createPromiseState.done();
            return createImmutableState(state, 'updated', doneState);
        },
        [WORK_TYPES.UPDATE_WORKS_ERROR] : (state, action) => {
            const errorState = createPromiseState.error(action?.payload);
            return createImmutableState(state, 'updated', errorState);
        },
        [WORK_TYPES.DELETE_WORKS] : (state, _) => {
            const loadingState = createPromiseState.loading();
            return createImmutableState(state, 'deleted', loadingState);
        },
        [WORK_TYPES.DELETE_WORKS_DONE] : (state, _) => {
            const doneState = createPromiseState.done();
            return createImmutableState(state, 'deleted', doneState);
        },
        [WORK_TYPES.DELETE_WORKS_ERROR] : (state, action) => {
            const errorState = createPromiseState.error(action?.payload);
            return createImmutableState(state, 'deleted', errorState);
        }
    },
    workState
)