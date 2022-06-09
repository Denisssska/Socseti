import {connect} from "react-redux";
import {
    follow,
    setUsers,
    setCurrentPage, setIsFetching,
    setUserTotalCount,
    unfollow,
    UsersType
} from "../../redux/friendsReducer";
import {StateAppType} from "../../redux/redux-store";

import axios from "axios";
import React from "react";

import {Friends} from "./friends";
import {Preloader} from "../preloader/Preloader";

type MapStatePropsType = {
    users: UsersType[]
    currentPage: number
    totalCount: number
    pageSize: number
    isFetching: boolean
}
// type MapDispatchPropsType = {
//     follow: (userId: number) => void
//     unfollow: (userId: number) => void
//     setUsers: (users: UsersType[]) => void
//     setCurrentPage: (currentPage: number) => void
//     setUserTotalCount: (totalCount: number) => void
//     setIsFetching: (isFetching: boolean) => void
// }

export type FriendsAPIType = {
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setUserTotalCount: (totalCount: number) => void
    pageSize: number
    currentPage: number
    totalCount: number
    isFetching: boolean
    setIsFetching: (isFetching: boolean) => void
}
export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '4ecfeb70-7dff-4183-b8c3-af65f71d42cf'
    }
});

class FriendsAPI extends React.Component<FriendsAPIType> {
    componentDidMount = () => {
        this.props.setIsFetching(true)
        instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {withCredentials: true,
                headers: {
                    "API-KEY": '4ecfeb70-7dff-4183-b8c3-af65f71d42cf'
                }
            })
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setUserTotalCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {
                withCredentials: true,
                headers: {
                    "API-KEY": '4ecfeb70-7dff-4183-b8c3-af65f71d42cf'
                }
            })
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        return <div>
            {this.props.isFetching ? <Preloader/> : null}
            <Friends
                onPageChanged={this.onPageChanged}
                {...this.props}/>
        </div>
    }
}

let mapStateToProps = (state: StateAppType): MapStatePropsType => {
    return {
        users: state.users.users,
        currentPage: state.users.currentPage,
        totalCount: state.users.totalCount,
        pageSize: state.users.pageSize,
        isFetching: state.users.isFetching,
    }
}
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setUserTotalCount: (totalCount) => {
//             dispatch(setUserTotalCountAC(totalCount))
//         } ,
//         setIsFetching: (isFetching:boolean) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//     }
// }

export const FriendsContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUserTotalCount,
    setIsFetching
})(FriendsAPI)

