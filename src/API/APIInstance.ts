import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '4ecfeb70-7dff-4183-b8c3-af65f71d42cf'
    }
});
export type FormDataType ={email:string,password:string,rememberMe:boolean,captcha:boolean}
export const userAPI = {

    getPage(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(r => r.data)
    },
    getProfile(userId: string|undefined) {
        return instance.get(`profile/${userId}`)
            .then(r => r.data)
    },
    getAuth() {
        return instance.get(`auth/me`)
            .then(r=>r.data)

    },
    deleteUser(id: number) {
        return instance.delete(`follow/${id}`)
            .then(r => r.data)
    },
    postUser(id: number) {
        return instance.post(`follow/${id}`)
            .then(r => r.data)
    }
}
export const profileAPI ={
    getProfileStatus(userId:string|undefined){
        return instance.get(`profile/status/${userId}`)
            .then(r=>r.data)
    },
    updateProfileStatus(status:string){
        return instance.put(`profile/status`,{status:status})
    },
    updateJobDescription(aboutMe:string){
        return instance.put(`profile`,{aboutMe:aboutMe,lookingForAJobDescription:aboutMe,fullName:'Denis Yarmoshko'})
    }
}
export const loginAPI ={
    loginProfile(email:string,password:string,rememberMe:boolean){
        return instance.post(`auth/login`,{email,password,rememberMe})
    },
    logOut(){
        return instance.delete(`auth/login`)
    }
}