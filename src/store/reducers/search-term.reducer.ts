import {AnyAction} from "redux";
import {SEARCH_BY_TERM} from "../actions/search-term.action";

const initialState: string = '';
export const searchTermReducer = (state: string = initialState, action: AnyAction): string => {
    switch (action.type) {
        case SEARCH_BY_TERM:
            return action.payload;
        default:
            return state;
    }
};