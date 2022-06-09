type ActionsType =
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setUserTotalCount>|
    ReturnType<typeof setIsFetching>;

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

export const follow = (userId: number) => ({type: FOLLOW, userId}) as const
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId}) as const
export const setUsers = (users: UsersType[]) => ({type: SET_USERS, users}) as const
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setUserTotalCount = (totalCount: number) => ({type: SET_TOTAL_COUNT, totalCount}) as const
export const setIsFetching = (isFetching: boolean) => ({type: CHANGE_IS_FETCHING, isFetching}) as const


let initialStateUsers = {
    users: [] as UsersType[],
    pageSize: 5,
    currentPage: 2,
    totalCount: 19280,
    error: null,
    isFetching:true,

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
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount}
        case CHANGE_IS_FETCHING:
            return {...state,isFetching: action.isFetching}
        default:
            return state
    }
}
export default friendsReducer;