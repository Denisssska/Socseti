import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '4ecfeb70-7dff-4183-b8c3-af65f71d42cf'
    }
});

export const userAPI = {

    getPage(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(r => r.data)
    },
    getProfile(userId: string) {
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