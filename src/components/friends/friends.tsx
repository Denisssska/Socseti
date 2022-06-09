import React from 'react';
import c from './friends.module.css';
import {UsersType} from "../../redux/friendsReducer";
import {Unybutton} from "../profile/unybutton";
import userPhoto from '../../images/userPhoto.png';
import {NavLink} from "react-router-dom";
import {instance} from "./friendsContainer";

export type FriendsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setUserTotalCount: (totalCount: number) => void
    pageSize: number
    currentPage: number
    totalCount: number
    onPageChanged: (item: number) => void
}

const FriendsSecret: React.FC<FriendsType> = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize / 100)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map((item, id) => {
                return <span key={id} onClick={() => props.onPageChanged(item)}
                             className={props.currentPage === item ? c.selectedPage : ''}>{item}</span>
            })}
        </div>
        {props.users.map(item =>
            <div key={item.id}>
                <div className={c.image}>
                    <NavLink to={'/content/' + item.id}>
                        <img src={item.photos.small != null ? item.photos.small : userPhoto} alt={'ggg'}/>
                    </NavLink>
                    {item.followed ?
                        <Unybutton className={c.button}
                                   name={'follow'}
                                   callback={() => {
                                       instance.delete(`follow/${item.id}`)
                                           .then(response => {
                                               if (response.data.resultCode === 0) {
                                                   props.unfollow(item.id)
                                               }
                                           })
                                   }}

                        /> :
                        <Unybutton callback={() => {
                            instance.post(`follow/${item.id}`)
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(item.id)
                                    }
                                })
                        }} className={c.button}
                                   name={'unfollow'}/>
                    }
                    <div className={c.name}>{item.name}</div>
                    <div className={c.name}>{item.status}</div>
                </div>
            </div>
        )}
    </div>
}


export const Friends = React.memo(FriendsSecret)