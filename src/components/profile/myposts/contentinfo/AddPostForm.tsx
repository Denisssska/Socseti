import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {useDispatch} from "react-redux";
import {addPostText, updatePropertyDescriptionTC} from "../../../../redux/Content-reducer";


export interface IShippingField {
    email: string
    password: string
    captcha: boolean
    rememberMe: boolean
    aboutMe: string
}

export const AddPostForm = () => {
    const dispatch = useDispatch()
    const {register, handleSubmit,reset, formState: {errors, isSubmitSuccessful}} = useForm<IShippingField>()
    const onSubmit: SubmitHandler<IShippingField> = (data) => {
        console.log(data)
        // @ts-ignore
        dispatch(updatePropertyDescriptionTC(data.aboutMe))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <textarea {...register('aboutMe', {required: 'invalid post'})}></textarea>
            {errors?.aboutMe && <div style={{color: "red"}}>{errors?.aboutMe.message||'Errors!'}</div>}
            {isSubmitSuccessful && <div style={{color: "yellowgreen"}}>successfully</div>}
            <input type="submit" />
        </form>

    );
};
