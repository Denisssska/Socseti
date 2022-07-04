import {v1} from "uuid";
import { profileAPI, userAPI} from "../API/APIInstance";
import {AppThunk} from "./redux-store";

const ADD_POST = "ADD-POST";
const CHANGE_FROM_POST = 'CHANGE-FROM-POST';
const SET_PROFILE_USERS = 'SET_PROFILE_USERS';
const SET_PROFILE_USER_STATUS ='SET_PROFILE_USER_STATUS';
export type ProfileObjType = {
    id: string
    message: string
    likes: number
}
export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type ProfileUsersType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }

}
export type ActionsContentType =
    ReturnType<typeof changePost> |
    ReturnType<typeof addPostText> |
    ReturnType<typeof setProfileUserStatus> |
    ReturnType<typeof setProfileUsers>;

export const addPostText = (aboutMe:string) => ({type: ADD_POST,aboutMe}) as const
export const setProfileUsers = (profileUsers: ProfileUsersType) => ({type: SET_PROFILE_USERS, profileUsers}) as const
export const setProfileUserStatus = (status:string) => ({type: SET_PROFILE_USER_STATUS, status}) as const

export const changePost = (newText: string) => ({
    type: CHANGE_FROM_POST, newText: newText
}) as const

export type InitialStateProfileType = typeof initialStateProfile

let initialStateProfile = {
    newMessageFromPost: '',
    profileObj: [
        {id: v1(), message: 'Hi man', likes: 12},
        {id: v1(), message: 'Hi man', likes: 13},
    ] as ProfileObjType[],
    profileUsers: null as unknown  as ProfileUsersType,
    status:''
}
const contentReducer = (state: InitialStateProfileType = initialStateProfile, action: ActionsContentType): InitialStateProfileType => {

    switch (action.type) {
        case SET_PROFILE_USER_STATUS:{
            return {...state,status: action.status }
        }
        case ADD_POST:
            return {...state, profileUsers:{...state.profileUsers,aboutMe:action.aboutMe,lookingForAJobDescription:action.aboutMe} }

        case CHANGE_FROM_POST:
            return {...state, newMessageFromPost: action.newText}
        case SET_PROFILE_USERS:
            return {...state, profileUsers: action.profileUsers}
        default:
            return state
    }
}
export const getProfileTC=(userId:string|undefined):AppThunk=>(dispatch)=>{
    userAPI.getProfile(userId)
        .then((data: ProfileUsersType) => {
            dispatch(setProfileUsers(data))
        });
}
export const getProfileStatusTC=(userId:string|undefined):AppThunk=>(dispatch)=>{
    profileAPI.getProfileStatus(userId)
        .then((res) => {
              dispatch(setProfileUserStatus(res))
        });
}
export const updateProfileStatusTC=(status:string):AppThunk=>(dispatch)=>{
      profileAPI.updateProfileStatus(status)
          .then(res=>{
              if(res.data.resultCode === 0){
                    dispatch(setProfileUserStatus(status))
                  }

          })
}
export const updatePropertyDescriptionTC=(aboutMe:string):AppThunk=>(dispatch)=>{
      profileAPI.updateJobDescription(aboutMe)
          .then(res=>{
              if(res.data.resultCode === 0){
                    dispatch(addPostText(aboutMe))
                  }

          })
}

export default contentReducer