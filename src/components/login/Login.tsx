import React  from 'react';
import { Field,  InjectedFormProps, reduxForm} from "redux-form";
import {FormDataType, loginAPI} from "../../API/APIInstance";



const LoginForm:React.FC<InjectedFormProps<FormDataType>> =  (props: { handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined; }) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="login">login</label>
                <Field placeholder='login' name='login' component="input"/>
            </div>
            <div>
                <label htmlFor="password">password</label>
                <Field placeholder='password' name='password' component="input"/>
            </div>
            <label htmlFor="remember me"> remember me</label>
            <Field  type='checkbox' component="input" name='remember me'/>
            <button>Login</button>

        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {

    const onSubmit=(formData:FormDataType )=>{

            loginAPI.autorisedProfile(formData.email)
                .then((res)=>console.log(res.data))
        loginAPI.autorisedProfile(formData.password)
                .then((res)=>console.log(res.data))
        loginAPI.autorisedProfile(formData.rememberMe)
                .then((res)=>console.log(res.data))
        loginAPI.autorisedProfile(formData.captcha)
                .then((res)=>console.log(res.data))

    }
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};