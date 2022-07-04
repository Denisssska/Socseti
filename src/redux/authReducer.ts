import {loginAPI, userAPI} from "../API/APIInstance";
import {AppThunk} from "./redux-store";

export  type ActionsAuthType =
    ReturnType<typeof setUserData> |
    ReturnType<typeof changeIsAuth>;

export type DataType = {
    id: number
    login: string
    email: string
}
export type InitialDataStateType = typeof initialDataState

const CHANGE_IS_AUTH = 'CHANGE_IS_AUTH';
const SET_USER_DATA = 'SET_USER_DATA';

export const setUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    id,
    login,
    email, isAuth
}) as const
export const changeIsAuth = (isAuth: boolean) => ({type: CHANGE_IS_AUTH, isAuth}) as const

let initialDataState = {
    data: {} as DataType,
    messages: [],
    fieldsErrors: [],
    resultCode: 0,
    isAuth: false,

}
const authReducer = (state: InitialDataStateType = initialDataState, action: ActionsAuthType): InitialDataStateType => {

    switch (action.type) {
        case "SET_USER_DATA":
            return <InitialDataStateType>{
                ...state,
                data: {id: action.id, login: action.login, email: action.email},
                isAuth: action.isAuth
            }
        case CHANGE_IS_AUTH:
            return {...state, isAuth: action.isAuth}
        default:
            return state
    }
}
export const getAuthTC = (): AppThunk => (dispatch) => {
    userAPI.getAuth()
        .then((data) => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setUserData(id, login, email, true))
            }
        });
}
export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    loginAPI.loginProfile(email, password, rememberMe)
        .then((res) => {
            if (res.data.resultCode === 0)
                dispatch(getAuthTC())
        })
}
export const logOutTC = (): AppThunk => (dispatch) => {
    loginAPI.logOut().then(res => {
        if (res.data.resultCode === 0)
            dispatch(setUserData(null, null, null, false))
    })
}
export default authReducer;