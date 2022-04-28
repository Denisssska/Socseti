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
export type StoreType = {
    _state: StateType
    rerenderEntireTree: (state: StateType) => void
    addPost: () => void
    changeFromPost: (newText: string) => void
    subscribe: () => void
}

let store = {
    _state: {

        newMessageFromPost: '',
        profileObj: [
            {id: v1(), message: 'Hi man', likes: 12},
            {id: v1(), message: 'Hi man', likes: 13},
            {id: v1(), message: 'Hi man', likes: 14},
        ],
        dialogData: [
            {message: 'hi', id: v1(), name: 'Sasha'},
            {message: 'hey', id: v1(), name: 'Pasha'},
            {message: 'by', id: v1(), name: 'Pasha'},
            {message: 'my', id: v1(), name: 'Masha'}
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
    _rerenderEntireTree() {
    },
    addPost() {
        const newPost = {
            id: v1(),
            message: this._state.newMessageFromPost,
            likes: 10
        }
        this._state.profileObj.push(newPost)
        this._state.newMessageFromPost = ''
        this._rerenderEntireTree()
    },
    changeFromPost(newText: string) {
        this._state.newMessageFromPost = newText
        this._rerenderEntireTree()
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
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