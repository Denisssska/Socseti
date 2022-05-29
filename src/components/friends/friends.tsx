import React from 'react';
import c from './friends.module.css';
import {UsersType} from "../../reduxe/friendsReducer";
import {Unybutton} from "../profile/unybutton";
import axios from 'axios';
import userPhoto from '../../images/userPhoto.png';

export type FriendsType = {
    readonly users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '4ecfeb70-7dff-4183-b8c3-af65f71d42cf'
    }
});

class FriendsSecret extends React.Component<FriendsType> {
    constructor(props: FriendsType) {
        super(props);
        instance.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        });
    }
    render() {
        return <div>
            {this.props.users.map(item =>
                <div key={item.id}>
                    <div className={c.image}>
                        <img src={item.photos.small != null ? item.photos.small : userPhoto} alt={'ggg'}/>
                        {item.followed ?
                            <Unybutton callback={() => this.props.unfollow(item.id)} className={c.button}
                                       name={'follow'}/> :
                            <Unybutton callback={() => this.props.follow(item.id)} className={c.button}
                                       name={'unfollow'}/>
                        }
                        <div className={c.name}>{item.name}</div>
                        <div className={c.name}>{item.status}</div>
                    </div>
                </div>
            )}
        </div>
    }
}

export const Friends = React.memo(FriendsSecret)