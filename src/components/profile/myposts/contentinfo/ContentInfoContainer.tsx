import {AddPostTextActionCreater, ProfileObjType, UpdateNewPostActionCreater} from "../../../../reduxe/Content-reducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {ContentInfo} from "./contentinfo";
import {StateAppType} from "../../../../reduxe/redux-store";

type mapStateToProps = {
    newMessageFromPost: string
    profileObj: Array<ProfileObjType>
}
type mapDispatchToProps = {
    addPostText: () => void
    changePost: (newText: string) => void
}
let mapStateToProps = (state: StateAppType): mapStateToProps => {
    return {
        newMessageFromPost: state.profile.newMessageFromPost,
        profileObj: state.profile.profileObj
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        addPostText: () => {
            dispatch(AddPostTextActionCreater())

        },
        changePost: (newText: string) => {
            dispatch(UpdateNewPostActionCreater(newText))
        }
    }
}
export const ContentInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ContentInfo)
