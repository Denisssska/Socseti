import {v1} from "uuid";
import {ActionsType} from "./store";

const ADD_POST = "ADD-POST";
const CHANGE_FROM_POST = 'CHANGE-FROM-POST';

export const AddPostTextActionCreater = () => ({type: 'ADD-POST'}) as const
export const UpdateNewPostActionCreater = (newText: string) => ({
    type: 'CHANGE-FROM-POST', newText: newText
}) as const

let initialState = {
    newMessageFromPost: '',
    profileObj: [
        {id: v1(), message: 'Hi man', likes: 12},
        {id: v1(), message: 'Hi man', likes: 13},
    ]
}
const contentReducer = (state=initialState, action: ActionsType) => {

    switch (action.type) {
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