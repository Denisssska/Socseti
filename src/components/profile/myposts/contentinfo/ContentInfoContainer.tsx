import {
    addPostText,
    changePost, getProfileTC,
    ProfileObjType, ProfileUsersType
} from "../../../../redux/Content-reducer";
import {connect} from "react-redux";
import {ContentInfo} from "./contentinfo";
import {StateAppType} from "../../../../redux/redux-store";
import React from "react";
import {Params, Location, useLocation, useNavigate, useParams, NavigateFunction} from "react-router-dom";
import {withAuthRedirect} from "../../../HOC/WithAuthRedirect";
import {compose} from "redux";


export type ContentInfoAPIType = mapStateToPropsTypes & mapDispatchToProps;

type ParamsType = {
    params: Readonly<Params>
    location: Location
    navigate: Readonly<NavigateFunction>
}
type mapStateToPropsTypes = {
    newMessageFromPost: string
    profileObj: Array<ProfileObjType>
    profileUsers: ProfileUsersType

}
type mapDispatchToProps = {
    addPostText: () => void
    changePost: (newText: string) => void
    getProfileTC: (userId: string | undefined) => void
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
            userId = '2'
        }
        this.props.getProfileTC(userId)

    }

    render() {
        return <div>
            <ContentInfo {...this.props}
            />
        </div>
    }
}

const mapStateToProps = (state: StateAppType): mapStateToPropsTypes => {
    return {
        newMessageFromPost: state.profile.newMessageFromPost,
        profileObj: state.profile.profileObj,
        profileUsers: state.profile.profileUsers,

    }
}
export const ContentInfoContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        addPostText,
        changePost,
        getProfileTC
    }),
    withRouter
)(ContentInfoAPI)
// export const ContentInfoContainer = withAuthRedirect(connect(mapStateToProps, {
//     addPostText,
//     changePost,
//     getProfileTC
// })(withRouter()))
