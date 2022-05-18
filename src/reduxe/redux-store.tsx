import { combineReducers, legacy_createStore} from "redux";
import contentReducer from "./Content-reducer";
import dialogsReducer from "./dialogs-reducer";



export type StoreType= typeof legacy_createStore;
export type StateAppType = ReturnType<typeof reducersBox>
let reducersBox = combineReducers({
    profile: contentReducer,
    dialog: dialogsReducer,
})

let store = legacy_createStore(reducersBox)


export default store