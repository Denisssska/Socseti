import Header from "./header";
import {connect} from "react-redux";
import React from "react";
import {StateAppType} from "../../redux/redux-store";
import {DataType, getAuthTC} from "../../redux/authReducer";


type MapStateToPropsType = {
    data: DataType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getAuthTC: () => void
}

class AuthHeader extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {
    componentDidMount() {
        this.props.getAuthTC()
    }
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

export const HeaderContainer = connect(mapStateToProps, {getAuthTC})(AuthHeader)