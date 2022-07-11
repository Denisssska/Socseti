import {Navigate} from "react-router-dom";
import React from "react";
import {StateAppType} from "../../redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsForRedirectType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: StateAppType): MapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: React.ComponentType<T>) {
    const AuthRedirectComponent = (props: MapStateToPropsForRedirectType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth)
            return <Navigate to={"/login"}/>
        return <Component {...restProps as T}/>
    }

    return connect(mapStateToPropsForRedirect)(AuthRedirectComponent)
}

