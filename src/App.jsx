import React, { useEffect } from 'react'
import { RouterProvider, useNavigate } from 'react-router-dom'
import router from './router'
import axiosClient from './axios/axios'
import { login } from './redux/slices/loginSlice'
import { useDispatch } from 'react-redux'

function App() {
  const dispatche = useDispatch()
  useEffect(()=>{
    const getUseInfo = async () => {
      try {
        const res = await axiosClient.get('/user').catch(err => console.log(err))
        if (res?.status === 200) {
          const { data: user } = res;
          dispatche(login(user))
        }
      }
      catch (err) {
        console.log(err)
      }
    }
    getUseInfo()
  },[])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App