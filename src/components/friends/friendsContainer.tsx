import {connect} from "react-redux";
import {followAC, setAC, unfollowAC, UsersType} from "../../reduxe/friendsReducer";
import {Dispatch} from "redux";
import {StateAppType} from "../../reduxe/redux-store";
import {Friends} from "./friends";

type MapStatePropsType = {
    users: UsersType[]
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}
let mapStateToProps = (state: StateAppType): MapStatePropsType => {
    return {
        users: state.users.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setAC(users))
        }
    }
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

