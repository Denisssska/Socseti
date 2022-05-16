import { combineReducers, legacy_createStore} from "redux";
import contentReducer from "./Content-reducer";
import dialogsReducer from "./dialogs-reducer";



export type ReducersBoxType= ReturnType<typeof combineReducers>
let reducersBox = combineReducers({
    profile:contentReducer,
    dialog:dialogsReducer,
})

let store:ReducersBoxType = legacy_createStore(reducersBox)

export default store