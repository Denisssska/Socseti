import {v1} from "uuid";
import {ActionsType} from "./store";
const CHANGE_FROM_POST = 'CHANGE-FROM-POST';
const ADD_MESSAGE = 'add-message';

export const UpdateNewPostActionCreater = (newText: string) => ({
    type: 'CHANGE-FROM-POST', newText: newText
}) as const

let initialState = {
    newMessageFromDialog: '',
    dialogData: [
        {message: 'hi', id: v1(), name: 'Sasha'},
        {message: 'hey', id: v1(), name: 'Pasha'},
    ]
}
export const AddMessageActionCreater = () => ({type: 'add-message'}) as const
const dialogsReducer =(state = initialState,action:ActionsType)=> {
    switch (action.type) {
        case CHANGE_FROM_POST:
            state.newMessageFromDialog = action.newText
            return state;
        case ADD_MESSAGE:
            const newMessage = {
                message: state.newMessageFromDialog,
                id: v1(),
                name: 'Sasha'
            }
            state.dialogData.push(newMessage)
            state.newMessageFromDialog = ''
            return state
        default:
            return state
    }
}
export default dialogsReducer;