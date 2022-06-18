import {connect} from "react-redux";
import {
    setCurrentPage,
    UsersType, getPageTC, followTC, unFollowTC
} from "../../redux/friendsReducer";
import {StateAppType} from "../../redux/redux-store";
import React from "react";
import {Friends} from "./friends";
import {Preloader} from "../preloader/Preloader";

type MapStatePropsType = {
    users: UsersType[]
    currentPage: number
    totalCount: number
    pageSize: number
    isFetching: boolean
    inProgress: number[]
}
type MapDispatchPropsType = {
    setCurrentPage: (currentPage: number) => void
    getPageTC: (currentPage: number, pageSize: number) => void
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
}

export type FriendsAPIType = MapStatePropsType & MapDispatchPropsType

class FriendsAPI extends React.Component<FriendsAPIType> {
    componentDidMount = () => {
        this.props.getPageTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getPageTC(pageNumber, this.props.pageSize)
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
        inProgress: state.users.inProgress
    }
}
export const FriendsContainer = connect(mapStateToProps, {
    setCurrentPage,
    getPageTC,
    followTC,
    unFollowTC
})(FriendsAPI)


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
