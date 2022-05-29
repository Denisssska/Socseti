type ActionsType =
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setAC>;

type PhotosType = {
    small: string
    large: string
}
export type UsersType = {
    id: number
    uniqueUrlName: string
    name: string
    followed: boolean
    status: string
    photos: PhotosType
}
export type InitialStateUsersType = typeof initialStateUsers
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export const followAC = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const setAC = (users: UsersType[]) => ({type: 'SET_USERS', users}) as const


let initialStateUsers = {
    users: [] as UsersType[]
}

const friendsReducer = (state: InitialStateUsersType = initialStateUsers, action: ActionsType): InitialStateUsersType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(item => item.id === action.userId ? {...item, followed: true} : item)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(item => item.id === action.userId ? {...item, followed: false} : item)
            }
        case SET_USERS:
            return {...state, users: action.users}
        default:
            return state
    }
}
export default friendsReducer;