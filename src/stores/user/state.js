import { Map } from 'immutable';

export const userState = {
    logined : Map({
        user : Map({}),
        accessToken : null,
        loginTime : null
    })
}