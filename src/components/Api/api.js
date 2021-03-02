import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'efc54901-2c3d-44b7-97e5-1065b2bb7292'
    } 
});
export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    unfollowUsers: (userId) => {
        return instance.delete(`unfollow/${userId}`);
    },
    followUsers: (userId) => {
        return instance.get(`follow/${userId}`);
    }
};

export const headerAPI = {
    getHeader: () => {
        return instance.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
        })
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setAuthUserData(id, email, login);
            }
        });
    }
}
