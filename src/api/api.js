import * as axios from 'axios'


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "0d496c7b-e769-428d-ac79-dfb255d71bca"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },
  // subscribe(users) {
  //   return instance.post(`follow/${users.id}`)
  //     .then(response => {
  //       return response.data
  //     })
  // },
}
