import {Dialogs} from "./dialogs";
import {connect} from "react-redux";
import {
    AddMessageActionCreater,
    changePostActionCreater,
    DialogDataType

} from "../../redux/dialogs-reducer";
import {Dispatch} from "redux";
import {StateAppType} from "../../redux/redux-store";


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
        newMessageFromDialog: state.dialog.newMessageFromDialog
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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
