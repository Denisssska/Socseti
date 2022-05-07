import {v1} from "uuid";
import {ActionsType, StateType} from "./state";

const ADD_POST = "ADD-POST";
const CHANGE_FROM_POST = 'CHANGE-FROM-POST';

export const AddPostTextActionCreater = () => ({type: 'ADD-POST'}) as const
export const UpdateNewPostActionCreater = (newText: string) => ({
    type: 'CHANGE-FROM-POST', newText: newText
}) as const
const contentReducer=(state:StateType,action:ActionsType)=>{
    switch (action.type){
        case ADD_POST:
            const newPost = {
                id: v1(),
                message: state.newMessageFromPost,
                likes: 10
            }
            state.profileObj.push(newPost)
            state.newMessageFromPost = ''
            return state;
        case CHANGE_FROM_POST:
            state.newMessageFromPost = action.newText
            return state
        default:
            return state
    }
}

export default contentReducer