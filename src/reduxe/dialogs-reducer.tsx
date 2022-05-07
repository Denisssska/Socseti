import {v1} from "uuid";
import {ActionsType, StateType} from "./state";
const CHANGE_FROM_POST = 'CHANGE-FROM-POST';
const ADD_MESSAGE = 'add-message';

export const UpdateNewPostActionCreater = (newText: string) => ({
    type: 'CHANGE-FROM-POST', newText: newText
}) as const
export const AddMessageActionCreater = () => ({type: 'add-message'}) as const
const dialogsReducer =(state:StateType,action:ActionsType)=> {
    switch (action.type) {
        case CHANGE_FROM_POST:
            state.newMessageFromPost = action.newText
            return state;
        case ADD_MESSAGE:
            const newMessage = {
                message: state.newMessageFromPost,
                id: v1(),
                name: 'Sasha'
            }
            state.dialogData.push(newMessage)
            state.newMessageFromPost = ''
            return state
        default:
            return state
    }
}
export default dialogsReducer;