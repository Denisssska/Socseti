import {userAPI} from "../API/APIInstance";
import {AppThunk} from "./redux-store";


export type ActionsFriendsType =
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setUserTotalCount> |
    ReturnType<typeof setIsFetching> |
    ReturnType<typeof setInProgress>;

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
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const CHANGE_IS_FETCHING = 'CHANGE_IS_FETCHING';
const SET_IN_PROGRESS = 'SET_IN_PROGRESS';

export const follow = (userId: number) => ({type: FOLLOW, userId}) as const
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId}) as const
export const setUsers = (users: UsersType[]) => ({type: SET_USERS, users}) as const
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setUserTotalCount = (totalCount: number) => ({type: SET_TOTAL_COUNT, totalCount}) as const
export const setIsFetching = (isFetching: boolean) => ({type: CHANGE_IS_FETCHING, isFetching}) as const
export const setInProgress = (isFetching: boolean, userId: number) => ({
    type: SET_IN_PROGRESS,
    isFetching,
    userId
}) as const


let initialStateUsers = {
    users: [] as UsersType[],
    pageSize: 5,
    currentPage: 2,
    totalCount: 19280,
    error: null,
    isFetching: true,
    inProgress: [] as number[]

}

const friendsReducer = (state: InitialStateUsersType = initialStateUsers, action: ActionsFriendsType): InitialStateUsersType => {

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
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount}
        case CHANGE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case SET_IN_PROGRESS:
            return {
                ...state,
                inProgress: action.isFetching ? [...state.inProgress, action.userId] : state.inProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const getPageTC = (currentPage: number, pageSize: number):AppThunk => (dispatch) => {
    dispatch(setIsFetching(true))
    userAPI.getPage(currentPage, pageSize)
        .then((data: { items: UsersType[]; totalCount: number; }) => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setUserTotalCount(data.totalCount))
        });
}
export const unFollowTC = (userId: number):AppThunk => (dispatch) => {
    dispatch(setInProgress(true, userId))
    userAPI.deleteUser(userId)
        .then((data: { resultCode: number; }) => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userId))
            }
            dispatch(setInProgress(false, userId))
        })
}
export const followTC = (userId: number):AppThunk => (dispatch) => {
    dispatch(setInProgress(true, userId))
    userAPI.postUser(userId)
        .then((data: { resultCode: number; }) => {
            if (data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(setInProgress(false, userId))
        })
}

export default friendsReducer;