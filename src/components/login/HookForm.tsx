import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {loginAPI} from "../../API/APIInstance";
import {setIsAuth} from "../../redux/authReducer";
import {useDispatch} from "react-redux";


export interface IShippingField {
    email: string
    password: string
    captcha: boolean
    rememberMe: boolean
}

const HookForm = () => {
    const dispatch = useDispatch()
    const {register, handleSubmit, reset, formState: {errors, isSubmitSuccessful,isValid}} = useForm<IShippingField>({
        mode: 'onBlur'
    })
    const onSubmit: SubmitHandler<IShippingField> = (data) => {
        console.log(data)
        loginAPI.autorisedProfile(data.email, data.password, data.rememberMe)
            .then((res) => dispatch(setIsAuth(res.data.data.userId)))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...(register('password', {
                required: 'Enter password please',
                minLength: {
                    value: 8,
                    message: '5 symbols minimal'
                }
            }))} placeholder='password'/>
            {errors.password && <div style={{color: "red"}}>{errors?.password.message || 'Error!'}</div>}
            <input {...(register('captcha', {required: 'Enter captcha please'}))} placeholder='captcha'/>
            {errors.captcha && <div style={{color: "red"}}>{errors.captcha.message}</div>}
            <input {...(register('email', {
                validate: undefined,
                required: 'Enter email please'
            }))} placeholder="email"/>
            {errors.email && <div style={{color: "red"}}>{errors.email.message}</div>}
            <input type="checkbox"{...register("rememberMe", {required: 'checked me please'})}/>
            {errors.rememberMe && <div style={{color: "red"}}>{errors.rememberMe.message}</div>}
            {isSubmitSuccessful && <div style={{color: "yellowgreen"}}>successfully</div>}
            {/*<button >Send</button>*/}
            <input type="submit" disabled={!isValid}/>
        </form>

    );
};

export default HookForm;