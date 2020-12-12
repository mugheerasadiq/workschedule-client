import { TYPE_DONE, TYPE_ERROR } from '../type';

export const AUTH_TYPES = {
    RESET : 'auth/RESET',
    
    LOGIN : 'auth/login',
    LOGIN_DONE : TYPE_DONE('auth/login'),
    LOGIN_ERROR : TYPE_ERROR('auth/login'),

    REGISTER : 'auth/register',
    REGISTER_DONE : TYPE_DONE('auth/register'),
    REGISTER_ERROR : TYPE_ERROR('auth/register'),
};