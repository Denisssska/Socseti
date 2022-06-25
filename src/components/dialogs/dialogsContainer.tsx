import {Dialogs} from "./dialogs";
import {connect} from "react-redux";
import {
    AddMessageActionCreater,
    changePostActionCreater,
    DialogDataType
} from "../../redux/dialogs-reducer";
import {compose, Dispatch} from "redux";
import {StateAppType} from "../../redux/redux-store";

import {withAuthRedirect} from "../HOC/WithAuthRedirect";
import React from "react";


type MapStatePropsType = {
    dialogData: DialogDataType[]
    newMessageFromDialog: string

}
type MapDispatchPropsType = {
    addPost: () => void
    changeFromPost: (newText: string) => void
}

let mapStateToProps = (state: StateAppType): MapStatePropsType => {
    return {
        dialogData: state.dialog.dialogData,
        newMessageFromDialog: state.dialog.newMessageFromDialog,

    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(AddMessageActionCreater())
        },
        changeFromPost: (newText: string) => {
            dispatch(changePostActionCreater(newText))
        }
    }
}
// let AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)
// export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));
