import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import contentReducer, {ActionsContentType} from "./Content-reducer";
import dialogsReducer, {ActionsDialogsType} from "./dialogs-reducer";
import friendsReducer, {ActionsFriendsType} from "./friendsReducer";
import authReducer, {ActionsAuthType} from "./authReducer";
import thunk, {ThunkAction,ThunkDispatch} from "redux-thunk";
import {ActionsInitializedType, initializedReducer} from "./appReducer";

export type StoreType= typeof legacy_createStore;
export type StateAppType = ReturnType<typeof reducersBox>
let reducersBox = combineReducers({
    profile: contentReducer,
    dialog: dialogsReducer,
    users: friendsReducer,
    auth:authReducer,
    initialized:initializedReducer

})
let store = legacy_createStore(reducersBox,applyMiddleware(thunk))
export default store

export type AppActionsType =ActionsAuthType | ActionsFriendsType | ActionsDialogsType | ActionsContentType|ActionsInitializedType
export type AppDispatch = ThunkDispatch< RootState,
    unknown,
    AppActionsType>

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AppActionsType
    >