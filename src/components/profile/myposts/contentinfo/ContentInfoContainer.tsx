import {
    addPostText,
    changePost, getProfileStatusTC, getProfileTC,
    ProfileObjType, ProfileUsersType, updateProfileStatusTC
} from "../../../../redux/Content-reducer";
import {connect} from "react-redux";
import {ContentInfo} from "./contentinfo";
import {StateAppType} from "../../../../redux/redux-store";
import React from "react";
import {Params, Location, useLocation, useNavigate, useParams, NavigateFunction} from "react-router-dom";
import {withAuthRedirect} from "../../../HOC/WithAuthRedirect";
import {compose} from "redux";
import {logOutTC} from "../../../../redux/authReducer";
import {createSelector} from "reselect";
import {ContentInfoFunctional} from "./contentinfoFunctional";


export type ContentInfoAPIType = mapStateToPropsTypes & mapDispatchToProps;

export type ParamsType = {
    params: Readonly<Params>
    location?: Location
    navigate?: Readonly<NavigateFunction>
}
type mapStateToPropsTypes = {
    newMessageFromPost: string
    profileObj: Array<ProfileObjType>
    profileUsers: ProfileUsersType
    status: string
    initialized:boolean

}
type mapDispatchToProps = {
    addPostText: () => void
    changePost: (newText: string) => void
    getProfileTC: (userId: string) => void
    getProfileStatusTC: (userId: string) => void
    updateProfileStatusTC: (status: string) => void
    logOutTC: () => void
}

const withRouter = () => (props: ContentInfoAPIType) => {
    const params = useParams();
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <ContentInfoAPI
            {...props}
            params={params}
            location={location}
            navigate={navigate}
        />
    );
};

class ContentInfoAPI extends React.Component<ContentInfoAPIType & ParamsType> {

    componentDidMount = () => {
        let userId: string | undefined = this.props.params.userId;
        if (!userId) {
            userId = ' 24035'
        }

        this.props.getProfileTC(userId)
        this.props.getProfileStatusTC(userId)
        console.log(this.props.initialized)
    }

    render() {
        return <div>
            {/*<ContentInfo {...this.props}*/}
            <ContentInfoFunctional {...this.props}
            />
        </div>
    }
}

const mapStateToProps = (state: StateAppType): mapStateToPropsTypes => {
    return {
        // newMessageFromPost: state.profile.newMessageFromPost,
        newMessageFromPost:newMessageFromPost(state),
        profileObj: state.profile.profileObj,
        profileUsers: state.profile.profileUsers,
        status: state.profile.status,
        initialized:state.initialized.initialized

    }
}
export const ContentInfoContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        addPostText,
        changePost,
        getProfileTC, getProfileStatusTC, updateProfileStatusTC, logOutTC
    }),
    withRouter
)(ContentInfoAPI)
// export const ContentInfoContainer = withAuthRedirect(connect(mapStateToProps, {
//     addPostText,
//     changePost,
//     getProfileTC
// })(withRouter()))

const getNewMessageFromPostSelector =(state:StateAppType)=>{
    return state.profile.newMessageFromPost
}
const newMessageFromPost = createSelector(getNewMessageFromPostSelector,(newMessageFromPost)=>{
return newMessageFromPost
})