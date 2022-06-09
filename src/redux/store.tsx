import {v1} from "uuid";
// import contentReducer, {AddPostTextActionCreater, UpdateNewPostActionCreater} from "./Content-reducer";
// import dialogsReducer, {AddMessageActionCreater} from "./dialogs-reducer";
//
//  type ArrSideBarType = {
//     name: string
//     surname: string
//     photo: string
// }
//  type DialogDataType = {
//     message: string
//     id: string
//     name: string
// }
// type ProfileObjType = {
//     id: string
//     message: string
//     likes: number
// }
//  type ProfileType = {
//     newMessageFromPost: string
//     profileObj: Array<ProfileObjType>
// }
//  type DialogType = {
//     newMessageFromDialog: string
//     dialogData: Array<DialogDataType>
// }
//  type SideBarType={
//     newMessageFromSideBar:string
//     arrSideBar:Array<ArrSideBarType>
// }
//  type StateType = {
//     profile: ProfileType
//     dialog: DialogType
//     sideBar: SideBarType
// }
//
//
//
// type StoreType = {
//     _state: StateType
//     getState: () => StateType
//     _callSubscriber: () => void
//     dispatch: (action: ActionsType) => void
//     subscribe: (observer: () => void) => void
//
// }
//
// let store: StoreType = {
//     _state: {
//         profile: {
//             newMessageFromPost: '',
//             profileObj: [
//                 {id: v1(), message: 'Hi man', likes: 12},
//                 {id: v1(), message: 'Hi man', likes: 13},
//             ]
//         },
//         dialog: {
//             newMessageFromDialog: '',
//             dialogData: [
//                 {message: 'hi', id: v1(), name: 'Sasha'},
//                 {message: 'hey', id: v1(), name: 'Pasha'},
//             ]
//         },
//         sideBar: {
//             newMessageFromSideBar: '',
//            arrSideBar:[
//                {
//                    name: 'petr',
//                    surname: 'vasilevich',
//                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbKiRahhiApJfySiPT9tTWDuXr0ST0jyBGA&usqp=CAU '
//                },
//                {
//                    name: 'canek',
//                    surname: 'voitich',
//                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ROKsDsq3ieKUh0ISM1ZJqhaccAjCz5FvaQ&usqp=CAU'
//                },
//                {
//                    name: 'nemec',
//                    surname: 'rusich',
//                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9K4NFZ9-De4GF2yxhsbbRbaCv3wW1_0qYlQ&usqp=CAU'
//                }
//            ]
// }
//     },
//     getState() {
//         return this._state
//     },
//     _callSubscriber() {
//     },
//     dispatch(action: ActionsType) {
//         this._state.profile = contentReducer(this._state.profile, action)
//         this._state.dialog = dialogsReducer(this._state.dialog, action)
//         this._callSubscriber()
//     },
//     subscribe(observer: () => void) {
//         this._callSubscriber = observer
//     }
// }
// // export default store;
