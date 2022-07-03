import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {AddMessageActionCreater} from "../../redux/dialogs-reducer";

export interface IShippingField {
    newMessageFromDialog: string
}

export const AddDialogsForm = () => {
    const dispatch = useDispatch()
    const {register, handleSubmit, reset, formState: {errors, isValid, isSubmitSuccessful}} = useForm<IShippingField>()
    const onSubmit: SubmitHandler<IShippingField> = (data) => {
        console.log(data)
        dispatch(AddMessageActionCreater(data.newMessageFromDialog))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
                {...register('newMessageFromDialog', {required: true})}></textarea>
            {errors?.newMessageFromDialog &&
                <div style={{
                    color: "red",
                }}>{errors?.newMessageFromDialog.message || 'Errors!'}</div>}

            <input type="submit"/>
        </form>

    );
};
