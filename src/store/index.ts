import {applyMiddleware, compose, createStore, Store} from 'redux';
import { createEpicMiddleware } from "redux-observable";
import {rootReducers} from "./reducers";
import {IUser} from "./reducers/users.reducer";
import {rootEpics} from "./epics";


declare const __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (arg: { name: string }) => typeof compose;

export interface IStore {
    searchTerm: string;
    users: IUser[];
}

const rootEpicMiddleware = createEpicMiddleware();

const composeEnhancers: typeof compose =
    typeof window === 'object' &&
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            name: 'Typescript masterclass'
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(rootEpicMiddleware),
    // other store enhancers if any
);
export const store: Store<IStore> = createStore(rootReducers, enhancer);

rootEpicMiddleware.run(rootEpics);