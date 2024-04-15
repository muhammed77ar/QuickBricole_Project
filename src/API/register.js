import axiosClient from './../axios/axios';
export const regesterAPI = {
  registerHandyman :(data)=>{
    return axiosClient.post('/register/handyman',data)
  },
  registerClient :(data)=>{
    return axiosClient.post('/register/user',data)
  },
}