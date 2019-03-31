import {AnyAction} from "redux";
import {GET_USERS_SUCCESS} from "../actions/users.action";

export interface IUser {
    profileName: string;
    firstName: string;
    surname: string;
    photo: string;
    country: string;
}

const initialState: IUser[] = [];
export const usersReducer = (state: IUser[] = initialState, action: AnyAction): IUser[] => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return [...state, ...action.payload];
        default:
            return state;
    }
};