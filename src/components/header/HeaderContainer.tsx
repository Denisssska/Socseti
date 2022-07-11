import {Header} from "./header";
import {connect} from "react-redux";
import React from "react";
import {StateAppType} from "../../redux/redux-store";
import {DataType} from "../../redux/authReducer";


type MapStateToPropsType = {
    data: DataType
    isAuth: boolean
}
type MapDispatchToPropsType = {}

class AuthHeader extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {

    render() {

        return (
            <Header  {...this.props}/>
        )
    }
}

const mapStateToProps = (state: StateAppType): MapStateToPropsType => {
    return {
        data: state.auth.data,
        isAuth: state.auth.isAuth
    }
}

export const HeaderContainer = connect(mapStateToProps )(AuthHeader)