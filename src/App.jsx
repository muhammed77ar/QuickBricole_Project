import React, { useEffect } from 'react'
import { RouterProvider, useNavigate } from 'react-router-dom'
import router from './router'
import axiosClient from './axios/axios'
import { login } from './redux/slices/loginSlice'
import { useDispatch } from 'react-redux'
import { setCategories } from './redux/slices/categoriesSlice'

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

  const getCategory = async () => {
    try{
     const response = await axiosClient.get(`/categories`)
     if (response?.status === 200) {
      const {data} = response;
      dispatche(setCategories(data))
    }
    }catch(err){
     console.log(err)
    }

 }
 useEffect(()=>{
   getCategory()
 }, [])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App