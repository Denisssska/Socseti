import {v1} from "uuid";

export type SideBarType = {
    name: string
    surname: string
    photo: string
}
export type DialogDataType = {
    message: string
    id: string
    name: string
}
export type ProfileObjType = {
    id: string
    message: string
    likes: number
}
export type StateType = {
    newMessageFromPost: string
    profileObj: Array<ProfileObjType>
    dialogData: Array<DialogDataType>
    sideBar: Array<SideBarType>
}

export type ActionsType = ReturnType<typeof AddPostTextActionCreater> |
    ReturnType<typeof UpdateNewPostActionCreater>|
    ReturnType<typeof AddMessageActionCreater>
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    dispatch: (action: ActionsType) => void
    subscribe: (observer: () => void) => void
}


export const AddPostTextActionCreater = () => ({type: 'ADD-POST'}) as const
export const UpdateNewPostActionCreater = (newText: string) => ({
    type: 'CHANGE-FROM-POST',
    newText: newText
}) as const
export const AddMessageActionCreater = ()=>({type:'add-message'}) as const

let store: StoreType = {
    _state: {

        newMessageFromPost: '',
        profileObj: [
            {id: v1(), message: 'Hi man', likes: 12},
            {id: v1(), message: 'Hi man', likes: 13},

        ],
        dialogData: [
            {message: 'hi', id: v1(), name: 'Sasha'},
            {message: 'hey', id: v1(), name: 'Pasha'},
        ],
        sideBar: [
            {
                name: 'petr',
                surname: 'vasilevich',
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbKiRahhiApJfySiPT9tTWDuXr0ST0jyBGA&usqp=CAU '
            },
            {
                name: 'canek',
                surname: 'voitich',
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ROKsDsq3ieKUh0ISM1ZJqhaccAjCz5FvaQ&usqp=CAU'
            },
            {
                name: 'nemec',
                surname: 'rusich',
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9K4NFZ9-De4GF2yxhsbbRbaCv3wW1_0qYlQ&usqp=CAU'
            }
        ]
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
    },
    dispatch(action: ActionsType) {
        if (action.type === "ADD-POST") {
            const newPost = {
                id: v1(),
                message: this._state.newMessageFromPost,
                likes: 10
            }
            this._state.profileObj.push(newPost)
            this._state.newMessageFromPost = ''
            this._callSubscriber()
        } else if (action.type === 'CHANGE-FROM-POST') {
            this._state.newMessageFromPost = action.newText
            this._callSubscriber()
        }else if(action.type === 'add-message'){
            const newMessage = {
                message:this._state.newMessageFromPost,
                id:v1(),
                name:'Sasha'
            }
            this._state.dialogData.push(newMessage)
            this._state.newMessageFromPost=''
            this._callSubscriber()
        }
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    }
}
export default store;

// let rerenderEntireTree: (state: StateType) => void = () => {
//
// }
// const state: StateType = {
//
//     newMessageFromPost: '',
//     profileObj: [
//         {id: v1(), message: 'Hi man', likes: 12},
//         {id: v1(), message: 'Hi man', likes: 13},
//         {id: v1(), message: 'Hi man', likes: 14},
//     ],
//     dialogData: [
//         {message: 'hi', id: v1(), name: 'Sasha'},
//         {message: 'hey', id: v1(), name: 'Pasha'},
//         {message: 'by', id: v1(), name: 'Pasha'},
//         {message: 'my', id: v1(), name: 'Masha'}
//     ],
//     sideBar: [
//         {
//             name: 'petr',
//             surname: 'vasilevich',
//             photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbKiRahhiApJfySiPT9tTWDuXr0ST0jyBGA&usqp=CAU '
//         },
//         {
//             name: 'canek',
//             surname: 'voitich',
//             photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ROKsDsq3ieKUh0ISM1ZJqhaccAjCz5FvaQ&usqp=CAU'
//         },
//         {
//             name: 'nemec',
//             surname: 'rusich',
//             photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9K4NFZ9-De4GF2yxhsbbRbaCv3wW1_0qYlQ&usqp=CAU'
//         }
//     ]
// };
//
// export let addPost = () => {
//     const newPost: ProfileObjType = {
//         id: v1(),
//         message: state.newMessageFromPost,
//         likes: 10
//     }
//     state.profileObj.push(newPost)
//     state.newMessageFromPost = ''
//     rerenderEntireTree(state)
// }
// export const changeFromPost = (newText: string) => {
//     state.newMessageFromPost = newText
//     rerenderEntireTree(state)
// }
//
// export const subscribe = (observer: (state: StateType) => void) => {
//     rerenderEntireTree = observer
// }
// export default state;