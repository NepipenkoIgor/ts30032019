import {ActionsObservable, ofType} from "redux-observable";
import {AnyAction} from "redux";
import {GET_USERS_PENDING, getUsersError, getUsersSuccess} from "../actions/users.action";
import {catchError, map, switchMap} from "rxjs/operators";
import {fromPromise} from "rxjs/internal-compatibility";
import {getUsers} from "../../services";
import {AxiosResponse} from "axios";
import {IUser} from "../reducers/users.reducer";
import {of} from "rxjs";

export const usersEpic = (actions$: ActionsObservable<AnyAction>) =>
    actions$.pipe(
        ofType(GET_USERS_PENDING),
        switchMap(() => {
            return fromPromise(
                getUsers()
                    .then((res: AxiosResponse<IUser[]>) => res.data)
            )
                .pipe(
                    map((users: IUser[]) => getUsersSuccess(users)),
                    catchError((_err: Error) => of(getUsersError('Error on request')))
                );
        })
    );