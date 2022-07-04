import React, {ChangeEvent} from 'react';
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

export class ContentInfo extends React.Component<ContentInfoType> {

    state = {
        editMode: false,
        value: this.props.status
    }
    onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: event.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ContentInfoType>, prevState: Readonly<{ editMode: boolean, status: string, value: string }>) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                value: this.props.status
            })
        }
    }

    activatedMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    deactivatedMode = () => {

        this.setState({
            editMode: !this.state.editMode,
        })
        this.props.updateProfileStatusTC(this.state.value)
    }
    logOut = () => {
        this.props.logOutTC()
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
                            <div> About me: {this.props.profileUsers.aboutMe}</div>
                            <div>Job description: {this.props.profileUsers.lookingForAJobDescription}</div>
                            <div> Full name: {this.props.profileUsers.fullName}</div>
                            <div>Work : {this.props.profileUsers.lookingForAJob ?
                                <span>Need work</span> :
                                <span>{this.props.profileUsers.lookingForAJobDescription}</span>}</div>
                            <div><a href='#'>{this.props.profileUsers.contacts.github}</a></div>
                            <div><a href='#'>{this.props.profileUsers.contacts.facebook}</a></div>
                        </div>
                    </div>
                </div>

                {!this.state.editMode ? <span className={c.span}
                                              onDoubleClick={this.activatedMode}>{this.props.status || 'No status'}</span> :
                    <input className={c.input} value={this.state.value} autoFocus={true} onChange={this.onChangeValue}
                           onBlur={this.deactivatedMode}/>}
                <div>
                    <AddPostForm/>
                    <button onClick={this.logOut}>LogOut</button>
                </div>

            </div>
        );
    }
}

