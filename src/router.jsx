import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter} from "react-router-dom"
import Homee from './pages/homee';
import FindProfessional from './pages/findProfessional';
import FindWork from './pages/findWork';
import Login from './pages/login';
import PostService from './pages/postService';
import QuickService from './pages/quickService';
import ClientSignUp from './pages/ClientsignUp';
import BricoleurSignUp from './pages/bricoleurSignUp';
import Signup from './pages/signup';
import GuestLayout from './Layouts/GuestLayout';
import ClientLayout from './Layouts/ClientLayout';
import HandymanLayout from './Layouts/HandymanLayout';
import AuthLayout from './Layouts/AuthLayout';

const router = createBrowserRouter([
        {
          element: <GuestLayout/>,
            children : [
                        {
                          path : "/",
                          element : <Homee/>
                        },
                        {path : "findProfessional", element : <FindProfessional />},
                        {path : "findWork", element : <FindWork />},
                        {path : "postService", element : <PostService />},
                        {path : "quickService", element : <QuickService />},
                ]
        },
        {
          element: <ClientLayout/>,
            children : [
                        {
                          path : "client/",
                          element : <Homee/>
                        },
                        {path : "client/findProfessional", element : <FindProfessional />},
                        {path : "client/projectslist", element : <FindWork />},
                        {path : "client/clientsignUp", element : <ClientSignUp />},
                        {path : "client/bricoleursignUp", element : <BricoleurSignUp />},
                        {path : "client/postService", element : <PostService />},
                        {path : "client/quickService", element : <QuickService />},
                ]
        },
        {
          element: <HandymanLayout/>,
            children : [
                        {
                          path : "/handyman",
                          element : <Homee/>
                        },
                        {path : "/handyman/findWork", element : <FindWork />},
                ]
        },
        {
          element: <AuthLayout/>,
            children : [
                    {path : "login", element : <Login /> },
                    {path : "clientsignUp", element : <ClientSignUp />},
                    {path : "bricoleursignUp", element : <BricoleurSignUp />},
                    {path : "signup", element : <Signup /> },
                ]
        }
          
])
export default router;