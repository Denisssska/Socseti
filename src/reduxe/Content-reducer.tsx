import {v1} from "uuid";


const ADD_POST = "ADD-POST";
const CHANGE_FROM_POST = 'CHANGE-FROM-POST';

export type ProfileObjType = {
    id: string
    message: string
    likes: number
}
type ActionsType =
    ReturnType<typeof UpdateNewPostActionCreater> |
    ReturnType<typeof AddPostTextActionCreater>

export const AddPostTextActionCreater = () => ({type: 'ADD-POST'}) as const

export const UpdateNewPostActionCreater = (newText: string) => ({
    type: 'CHANGE-FROM-POST', newText: newText
}) as const

export type InitialStateProfileType = typeof initialStateProfile

let initialStateProfile = {
    newMessageFromPost: '',
    profileObj: [
        {id: v1(), message: 'Hi man', likes: 12},
        {id: v1(), message: 'Hi man', likes: 13},
    ] as ProfileObjType[]
}
const contentReducer = (state: InitialStateProfileType = initialStateProfile, action: ActionsType): InitialStateProfileType => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: v1(),
                message: state.newMessageFromPost,
                likes: 10
            }
            return {...state, newMessageFromPost: '', profileObj: [...state.profileObj, newPost]}

        case CHANGE_FROM_POST:
            return {...state, newMessageFromPost: action.newText}
        default:
            return state
    }
}
export default contentReducer