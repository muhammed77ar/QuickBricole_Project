import axiosClient from "../axios/axios"

export const ClientAPI = {
  signup : async (data)=>{
    return await axiosClient.post('/register/user',data);
  },
  logout : async ()=>{
    return await axiosClient.post('/logout');
  },
  updateProfile : async (data,id)=>{
    return await axiosClient.post('/users/'+id,data);
  },
}