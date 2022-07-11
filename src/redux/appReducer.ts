import {loginAPI, userAPI} from "../API/APIInstance";
import {AppThunk} from "./redux-store";
import {getAuthTC} from "./authReducer";

export  type ActionsInitializedType =
    ReturnType<typeof changeInitialized>

export type DataType = {
  initialized:boolean
}
export type InitialDataStateType = typeof initialDataState

const CHANGE_INITIALIZED = 'CHANGE_INITIALIZED';



export const changeInitialized = () => ({type:CHANGE_INITIALIZED}) as const

let initialDataState = {
   initialized:false
}
export const initializedReducer = (state: InitialDataStateType = initialDataState, action: ActionsInitializedType): InitialDataStateType => {

    switch (action.type) {
        case "CHANGE_INITIALIZED":{
            return{...state,initialized: true}
        }
        default:
            return state
    }
}

export const initializedTC = (): AppThunk => {
    return (dispatch) => {
        let promise = dispatch(getAuthTC())
        // @ts-ignore
        promise.then(() => {
            dispatch(changeInitialized())
        })

    };
}
