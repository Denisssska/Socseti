import {v1} from "uuid";

export type ActionsDialogsType = ReturnType<typeof AddMessageActionCreater>

export type DialogDataType = {
    message: string
    id: string
    name: string
}
export type InitialStateDialogType = typeof initialStateDialog
const ADD_MESSAGE = 'ADD_MESSAGE';

export const AddMessageActionCreater = (newMessage: string) => ({type: 'ADD_MESSAGE', newMessage}) as const
let initialStateDialog = {
    newMessageFromDialog: '',
    dialogData: [
        {message: 'hi', id: v1(), name: 'Sasha'},
        {message: 'hey', id: v1(), name: 'Pasha'},
    ] as DialogDataType[]
}

const dialogsReducer = (state: InitialStateDialogType = initialStateDialog, action: ActionsDialogsType): InitialStateDialogType => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                message: action.newMessage,
                id: v1(),
                name: 'Sasha'
            }
            return {
                ...state, newMessageFromDialog: action.newMessage,
                dialogData: [...state.dialogData, newMessage]
            }
        default:
            return state
    }
}
export default dialogsReducer;