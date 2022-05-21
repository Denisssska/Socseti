import {v1} from "uuid";

type ActionsType =
    ReturnType<typeof changePostActionCreater> |
    ReturnType<typeof AddMessageActionCreater>

export type DialogDataType = {
    message: string
    id: string
    name: string
}
export type InitialStateDialogType = typeof initialStateDialog
const CHANGE_FROM_DIALOG_POST = 'CHANGE_FROM_DIALOG_POST';
const ADD_MESSAGE = 'ADD_MESSAGE';

export const changePostActionCreater = (newMessageText: string) => ({
    type: 'CHANGE_FROM_DIALOG_POST', newMessageText: newMessageText
}) as const
export const AddMessageActionCreater = () => ({type: 'ADD_MESSAGE'}) as const


let initialStateDialog = {
    newMessageFromDialog: '',
    dialogData: [
        {message: 'hi', id: v1(), name: 'Sasha'},
        {message: 'hey', id: v1(), name: 'Pasha'},
    ] as DialogDataType[]
}

const dialogsReducer = (state: InitialStateDialogType = initialStateDialog, action: ActionsType): InitialStateDialogType => {

    switch (action.type) {
        case CHANGE_FROM_DIALOG_POST:
            return {...state, newMessageFromDialog: action.newMessageText}
        case ADD_MESSAGE:
            const newMessage = {
                message: state.newMessageFromDialog,
                id: v1(),
                name: 'Sasha'
            }
            return {...state, newMessageFromDialog: '',
                dialogData: [...state.dialogData, newMessage]}
        default:
            return state
    }
}
export default dialogsReducer;