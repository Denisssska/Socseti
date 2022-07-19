import React, {ChangeEvent, useState} from 'react';
import c from '../../content.module.css'
import {ProfileObjType, ProfileUsersType} from "../../../../redux/Content-reducer";
import {Preloader} from "../../../preloader/Preloader";
import {Params} from "react-router-dom";
import {AddPostForm} from "./AddPostForm";

type ContentInfoType = {
    changePost: (newText: string) => void
    addPostText: () => void
    newMessageFromPost: string
    profileObj: Array<ProfileObjType>
    profileUsers: ProfileUsersType
    updateProfileStatusTC: (status: string) => void
    params: Readonly<Params>
    status: string
    logOutTC: () => void
}

export const ContentInfoFunctional:React.FC<ContentInfoType>=({
                                                        changePost,addPostText,newMessageFromPost,
                                                        params,profileUsers,
                                                    profileObj,updateProfileStatusTC,status,
                                                        logOutTC})=> {
let[editMode,setEditMode]=useState(false)
let[statusChange,setStatusChange]=useState(status)

    const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setStatusChange(event.currentTarget.value)
    }
   const activatedMode = () => {
       setEditMode(!editMode)
    }

    const deactivatedMode = () => {
    setEditMode(!editMode)
        updateProfileStatusTC(statusChange)
    }
    const logOut = () => {
        logOutTC()
    }


        if (!profileUsers)
            return <Preloader/>

        return (
            <div className={c.face}>
                <div className={c.contentImg}>
                    <div className={c.about}>
                        <img src={profileUsers.photos.large} width='50px' alt="photo"/>
                        <div className={c.profile}>
                            <div> About me: {profileUsers.aboutMe}</div>
                            <div>Job description: {profileUsers.lookingForAJobDescription}</div>
                            <div> Full name: {profileUsers.fullName}</div>
                            <div>Work : {profileUsers.lookingForAJob ?
                                <span>Need work</span> :
                                <span>{profileUsers.lookingForAJobDescription}</span>}</div>
                            <div><a href='#'>{profileUsers.contacts.github}</a></div>
                            <div><a href='#'>{profileUsers.contacts.facebook}</a></div>
                        </div>
                    </div>
                </div>

                {!editMode ? <span className={c.span}
                                              onDoubleClick={activatedMode}>{status || 'No status'}</span> :
                    <input className={c.input} value={statusChange} autoFocus={true} onChange={onChangeValue}
                           onBlur={deactivatedMode}/>}
                <div>
                    <AddPostForm/>
                    <button onClick={logOut}>LogOut</button>
                </div>

            </div>
        );
    }


