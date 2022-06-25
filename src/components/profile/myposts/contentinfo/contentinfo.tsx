import React, {ChangeEvent} from 'react';
import c from '../../content.module.css'
import {Unybutton} from "../../unybutton";

import {ProfileObjType, ProfileUsersType} from "../../../../redux/Content-reducer";
import {Preloader} from "../../../preloader/Preloader";

type ContentInfoType = {
    changePost: (newText: string) => void
    addPostText: () => void
    newMessageFromPost: string
    profileObj: Array<ProfileObjType>
    profileUsers: ProfileUsersType

}

export class ContentInfo extends React.Component<ContentInfoType> {
    state = {
        editMode: true,
        value:'HI Man'

    }

    activatedMode=()=> {
        console.log(this)
        this.setState({
            editMode: !this.state.editMode
        })
    }

    deactivatedMode=() =>{
        this.setState({
            editMode: !this.state.editMode,

        })
    }
    onChangeValue=(event:ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            value:event.currentTarget.value
        })
}
    addPost() {
        this.props.addPostText()
    }

    changeFromPost(event: ChangeEvent<HTMLTextAreaElement>) {
        let newText = event.currentTarget.value
        this.props.changePost(newText)
    }

    render() {
        if (!this.props.profileUsers)
            return <Preloader/>

        return (
            <div className={c.face}>
                <div className={c.contentImg}>
                    <div className={c.about}>
                        <img src={this.props.profileUsers.photos.large} width='50px' alt="photo"/>
                        <div className={c.profile}>
                            <div>{this.props.profileUsers.aboutMe}</div>
                            <div>{this.props.profileUsers.fullName}</div>
                            <div>Work : {this.props.profileUsers.lookingForAJob ?
                                <span>Need work</span> :
                                <span>{this.props.profileUsers.lookingForAJobDescription}</span>}</div>
                            <div><a href='#'>{this.props.profileUsers.contacts.github}</a></div>
                            <div><a href='#'>{this.props.profileUsers.contacts.facebook}</a></div>
                        </div>
                    </div>
                </div>
                <textarea value={this.props.newMessageFromPost} onChange={this.changeFromPost}
                          className={c.textarea}/>
                { this.state.editMode?<span onDoubleClick={this.activatedMode}>{this.state.value}</span>:
                    <input value={this.state.value} autoFocus={true} onChange={(event)=>this.onChangeValue(event)}
                    onBlur={this.deactivatedMode}/>}
                <div>
                    <Unybutton callback={this.addPost.bind(this)} name='Push' className={c.yellow}/>
                </div>

            </div>
        );
    }
}

