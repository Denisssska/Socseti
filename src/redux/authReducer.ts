import {userAPI} from "../API/APIInstance";

type ActionsType =
    ReturnType<typeof setUserData> |
    ReturnType<typeof setIsAuth>;

export type DataType = {
    id: number
    login: string
    email: string
}

export type initialDataStateType = typeof initialDataState

const CHANGE_IS_AUTH = 'CHANGE_IS_AUTH';
const SET_USER_DATA = 'SET_USER_DATA';
export const setUserData = (id: number, login: string, email: string) => ({
    type: SET_USER_DATA,
    id,
    login,
    email
}) as const
export const setIsAuth = (isAuth: boolean) => ({type: CHANGE_IS_AUTH, isAuth}) as const

let initialDataState = {
    data: {} as DataType,
    messages: [],
    fieldsErrors: [],
    resultCode: 0,
    isAuth: false,

}
const authReducer = (state: initialDataStateType = initialDataState, action: ActionsType): initialDataStateType => {

    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                data: {id: action.id, login: action.login, email: action.email},
                isAuth: true
            }
        case CHANGE_IS_AUTH:
            return {...state, isAuth: action.isAuth}
        default:
            return state
    }
}
export const getAuthTC = () => (dispatch: any) => {
    userAPI.getAuth()
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(setIsAuth(true))
                let {id, login, email} = data.data;
                dispatch(setUserData(id, login, email))
            }
        });
}
export default authReducer;