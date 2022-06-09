import Header from "./header";
import {connect} from "react-redux";
import React from "react";
import {StateAppType} from "../../reduxe/redux-store";
import { DataType, setIsAuth, setUserData} from "../../reduxe/authReducer";
import {instance} from "../friends/friendsContainer";


type MapStateToPropsType = {
    data: DataType
    isAuth:boolean
}
type MapDispatchToPropsType = {
    setUserData: (id:number,login:string,email:string) => void
    setIsAuth:(isAuth:boolean)=>void

}

class AuthHeader extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {
    componentDidMount() {
        instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:true
            })
            .then(response => {
            if(response.data.resultCode===0){
                this.props.setIsAuth(true)
                let {id,login,email}=response.data.data;
                this.props.setUserData(id,login,email)
            }
            console.log(response.data)
        });
    }

    render() {
        return (
                <Header  {...this.props}/>
        )
    }
}

const mapStateToProps = (state: StateAppType):MapStateToPropsType => {
    return {
        data: state.auth.data,
        isAuth:state.auth.isAuth
    }
}
export const HeaderContainer = connect(mapStateToProps, {setUserData, setIsAuth})(AuthHeader)