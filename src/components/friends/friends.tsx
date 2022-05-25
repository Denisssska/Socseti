import React from 'react';
import c from './friends.module.css';
import {UsersType} from "../../reduxe/friendsReducer";
import {Unybutton} from "../profile/unybutton";
import axios from 'axios';
import userPhoto from '../../images/userPhoto.png';

export type FriendsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}
// const instance = axios.get({
//     withCredentials: true,
//     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//     headers:     {
//         "API-KEY": '4ecfeb70-7dff-4183-b8c3-af65f71d42cf'
//     }
// });
export const Friends: React.FC<FriendsType> = ({users, follow, unfollow, setUsers}) => {


    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            setUsers(response.data.items)
            console.log(response.data.items)
        })
    }

    return <div>
        {users.map(item =>
            <div key={item.id} className={c.flex}>
                <div className={c.image}>
                    {/*<img src={item.Photos.small != null? item.Photos.small: userPhoto} alt="photo"/>*/}
                    <img src={userPhoto} alt={'ph'}/>
                </div>
                <div>
                    {item.followed ?
                        <Unybutton callback={() => unfollow(item.id)} className={c.button} name={'follow'}/> :
                        <Unybutton callback={() => follow(item.id)} className={c.button} name={'unfollow'}/>
                    }
                    <div className={c.name}>{item.name}</div>
                    <div className={c.name}>{item.status}</div>
                </div>
            </div>
        )}
    </div>

}
// export const Friends = React.memo(FriendsSecret)