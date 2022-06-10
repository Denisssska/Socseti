import {connect} from "react-redux";
import {
    follow,
    setUsers,
    setCurrentPage, setIsFetching,
    setUserTotalCount,
    unfollow,
    UsersType, setInProgress
} from "../../redux/friendsReducer";
import {StateAppType} from "../../redux/redux-store";
import React from "react";
import {Friends} from "./friends";
import {Preloader} from "../preloader/Preloader";
import {userAPI} from "../../API/APIInstance";

type MapStatePropsType = {
    users: UsersType[]
    currentPage: number
    totalCount: number
    pageSize: number
    isFetching: boolean
    inProgress:number[]
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setUserTotalCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    setInProgress:(isFetching:boolean,userId:number)=>void
}

export type FriendsAPIType = MapStatePropsType & MapDispatchPropsType
//     {
//     users: UsersType[]
//     follow: (userId: number) => void
//     unfollow: (userId: number) => void
//     setUsers: (users: UsersType[]) => void
//     setCurrentPage: (currentPage: number) => void
//     setUserTotalCount: (totalCount: number) => void
//     pageSize: number
//     currentPage: number
//     totalCount: number
//     isFetching: boolean
//     setIsFetching: (isFetching: boolean) => void
// }


class FriendsAPI extends React.Component<FriendsAPIType> {
    componentDidMount = () => {
        this.props.setIsFetching(true)

        userAPI.getPage(this.props.currentPage, this.props.pageSize)
            .then((data: { items: UsersType[]; totalCount: number; }) => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setUserTotalCount(data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        userAPI.getPage(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
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
        inProgress:state.users.inProgress
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
    setIsFetching,
    setInProgress
})(FriendsAPI)

