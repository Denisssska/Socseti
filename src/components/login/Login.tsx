import React  from 'react';
// import { Field,  InjectedFormProps, reduxForm} from "redux-form";
// import {FormDataType, loginAPI} from "../../API/APIInstance";
// import {useDispatch} from "react-redux";
// import {setIsAuth} from "../../redux/authReducer";
// import SaApp from "./UseForm";
//
//
//
// const LoginForm:React.FC<InjectedFormProps<FormDataType>> =  (props: { handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined; }) => {
//
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <label htmlFor="email">email</label>
//                 <Field placeholder='login' name='email' component="input"/>
//             </div>
//             <div>
//                 <label htmlFor="password">password</label>
//                 <Field placeholder='password' name='password' component="input"/>
//             </div>
//             <label htmlFor="remember me"> remember me</label>
//             <Field  type='checkbox' component="input" name='remember me'/>
//             <button>Login</button>
//
//         </form>
//
//     );
// };
//
// const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
//
// export const Login = () => {
//     const dispatch = useDispatch()
//     const onSubmit=(formData:FormDataType )=>{
//         console.log(formData)
//         // loginAPI.autorisedProfile(formData.email,formData.password,formData.rememberMe)
//         //         .then((res)=>dispatch(setIsAuth(res.data.data.userId)))
//
//
//     }
//     return (
//         <div>
//             <LoginReduxForm onSubmit={onSubmit}/>
//             <SaApp/>
//         </div>
//     );
// };