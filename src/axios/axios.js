import axios from "axios";

const axiosClient = axios.create({
    baseURL:  process.env.REACT_APP_BASE_URL+'/api',
    withCredentials:true,
    withXSRFToken:true,
    headers:{'Content-Type': ['multipart/form-data',
      'application/json'],
      'Accept':'application/json', 
  }
}
)
axiosClient.interceptors.request.use((config)=>{
  const token = window.localStorage.getItem('access_token');
  console.log(token)
  config.headers.Authorization = 'Bearer '+token
  return config
})

axiosClient.interceptors.response.use((response)=>{
  return response
},(err)=>{
  const {response}= err;
  if(response?.status === 401){
    window.localStorage.removeItem('access_token')
  }
  throw err
})
export default axiosClient;
