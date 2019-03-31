import {axiosInstance} from "../config";
import {AxiosPromise} from "axios";
import {IUser} from "../store/reducers/users.reducer";

export const getUsers: () => AxiosPromise<IUser[]> = () => axiosInstance.get('/participants?key=13302bo');