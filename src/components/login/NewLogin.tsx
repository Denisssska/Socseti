import React from 'react';
// import {useForm, Resolver} from 'react-hook-form';
// import {FormDataType, loginAPI} from "../../API/APIInstance";
// import {useDispatch} from "react-redux";
// import {setIsAuth} from "../../redux/authReducer";
//
//
// const resolver: Resolver<FormDataType> = async (values) => {
//     return {
//         values: values.email ? values : {},
//         errors: !values.email
//             ? {
//                 email: {
//                     type: 'required',
//                     message: 'This is required.',
//                 },
//             }
//             : {},
//     };
// };
//
// export default function Login() {
//
//     const {register, unregister, handleSubmit, formState: {errors}} = useForm<FormDataType>({resolver});
//     const dispatch=useDispatch()
//     const onSubmit = handleSubmit((data:FormDataType) => {
//
//         console.log(data)
//         loginAPI.autorisedProfile(data.email,data.password,data.rememberMe)
//                .then((res)=>dispatch(setIsAuth(res.data.data.userId)))
//     });
//     const remember = register('rememberMe');
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.currentTarget.checked);
//     return (
//         <form onSubmit={onSubmit}>
//             <input {...register("email")} placeholder="login"/>
//             {errors?.email && <p>{errors.email.message}</p>}
//
//             <input {...register("password")} placeholder="password"/>
//
//             <input type="checkbox"{...register("rememberMe")} onChange={e => {
//                 remember.onChange(e);
//                 handleChange(e);
//             }}
//             />
//             <input type="submit"/>
//             <button type="button" onClick={() => unregister("email")}>LogOut</button>
//         </form>
//     );
// }
