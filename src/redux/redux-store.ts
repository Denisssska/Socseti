import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import contentReducer from "./Content-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friendsReducer";
import authReducer from "./authReducer";
import  thunk  from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

export type StoreType= typeof legacy_createStore;
export type StateAppType = ReturnType<typeof reducersBox>
let reducersBox = combineReducers({
    profile: contentReducer,
    dialog: dialogsReducer,
    users: friendsReducer,
    auth:authReducer,
    form:formReducer
})

let store = legacy_createStore(reducersBox,applyMiddleware(thunk))


export default store