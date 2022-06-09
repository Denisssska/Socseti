import React, {ChangeEvent} from 'react';
import c from '../../content.module.css'
import {Unybutton} from "../../unybutton";
import {Post} from "../post/post";
import {ProfileObjType, ProfileUsersType} from "../../../../redux/Content-reducer";
import {Preloader} from "../../../preloader/Preloader";

type ContentInfoType = {
    changePost: (newText: string) => void
    addPostText: () => void
    newMessageFromPost: string
    profileObj: Array<ProfileObjType>
    profileUsers: ProfileUsersType

}
export const ContentInfo: React.FC<ContentInfoType> = ({
                                                           profileObj,
                                                           newMessageFromPost,
                                                           changePost,
                                                           addPostText,
                                                           profileUsers
                                                       }) => {

    // let posts = profileObj.map((item) =>
    //     <Post key={item.id}
    //           id={item.id}
    //           message={item.message}
    //           likes={item.likes}/>
    // )
    const addPost = () => {
        addPostText()
    }
    const changeFromPost = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = event.currentTarget.value
        changePost(newText)
    }
    if (!profileUsers) {
        return <Preloader/>
    }
    return (
        <div className={c.face}>
            <div className={c.contentImg}>
                <div className={c.about}>
                    <img  src={profileUsers.photos.large} width='50px' alt="photo"/>
                    <div className={c.profile}>
                        <div>{profileUsers.aboutMe}</div>
                        <div>{profileUsers.fullName}</div>
                        <div>Work : {profileUsers.lookingForAJob?
                            <span>Need work</span>:<span>{profileUsers.lookingForAJobDescription}</span>}</div>
                        <div><a href={'#'}>{profileUsers.contacts.github}</a></div>
                        <div><a href='#'>{profileUsers.contacts.facebook}</a></div>

                    </div>

                </div>
                {/*<img*/}
                {/*    src="https://kartinkin.net/uploads/posts/2020-07/1593792591_33-p-fon-brawl-stars-57.jpg"*/}
                {/*    alt="aaa"/>*/}
            </div>
            <textarea value={newMessageFromPost} onChange={changeFromPost} className={c.textarea}/>
            <div>
                <Unybutton callback={addPost} name='Push' className={c.yellow}/>
            </div>
            {/*{posts}*/}
        </div>
    );
};
