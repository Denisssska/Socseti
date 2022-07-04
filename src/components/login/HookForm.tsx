import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {loginTC} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import c from './HookForm.module.css';

export interface IShippingField {
    email: string
    password: string
    captcha: boolean
    rememberMe: boolean
}

const HookForm = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector((state) => state.auth.isAuth)

    const {register, handleSubmit, reset, formState: {errors, isSubmitSuccessful, isValid}} = useForm<IShippingField>({
        mode: 'onBlur'
    })
    const onSubmit: SubmitHandler<IShippingField> = (data) => {
        dispatch(loginTC(data.email, data.password, data.rememberMe))
        reset()
    }

    if (state) return <Navigate to={'/content'}/>
    return (

        <form className={c.form} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...(register('password', {
                    required: 'Enter password please',
                    minLength: {
                        value: 8,
                        message: '5 symbols minimal'
                    }
                }))} placeholder='password'/>
                {errors.password && <span style={{color: "red"}}>{errors?.password.message || 'Error!'}</span>}
            </div>
            <div>
                <input {...(register('email', {
                    validate: undefined,
                    required: 'Enter email please'
                }))} placeholder="email"/>
                {errors.email && <span style={{color: "red"}}>{errors.email.message}</span>}
            </div>
            <div>
                <input type="checkbox"{...register("rememberMe", {required: 'checked me please'})}/>
                {errors.rememberMe && <div style={{color: "red"}}>{errors.rememberMe.message}</div>}
                <input type="submit" disabled={!isValid}/>
                {isSubmitSuccessful && <div style={{color: "yellowgreen"}}>successfully</div>}
            </div>

        </form>

    );
};

export default HookForm;