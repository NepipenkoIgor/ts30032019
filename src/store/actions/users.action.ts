import {Action} from 'redux';

export const GET_USERS_PENDING = 'GET_USERS_PENDING';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';

export function getUsersPending(): Action {
    return {
        type: GET_USERS_PENDING,
    };
}

export function getUsersSuccess<T>(payload: T): { type: string, payload: T } {
    return {
        type: GET_USERS_SUCCESS,
        payload
    };
}

export function getUsersError<T>(payload: T): { type: string, payload: T } {
    return {
        type: GET_USERS_ERROR,
        payload
    };
}