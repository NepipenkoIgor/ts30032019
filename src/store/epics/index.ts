import {combineEpics} from "redux-observable";
import {usersEpic} from "./users.epic";

export const rootEpics = combineEpics(usersEpic);