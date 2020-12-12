import { Map, List } from 'immutable';

export const initialState = {
    object : Map({
        loading : false,
        done : false,
        error : null,
        data : Map({}),
    }),
    list : Map({
        loading : false,
        done : false,
        error : null,
        data : List([]),
    })
};