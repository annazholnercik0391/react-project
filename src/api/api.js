import * as axios from 'axios'


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "f14a6b5c-4eb8-4fff-80ba-677ba0802854"
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