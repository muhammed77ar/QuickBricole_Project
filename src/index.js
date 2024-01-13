/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import App2 from './application';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Homee from './pages/homee';
import FindProfessional from './pages/findProfessional';
import FindWork from './pages/findWork';
import Login from './pages/login';
import PostService from './pages/postService';
import QuickService from './pages/quickService';
import ClientSignUp from './pages/ClientsignUp';
import BricoleurSignUp from './pages/bricoleurSignUp';

const router = createBrowserRouter([
        {
                path : "/",
                element : <App2 />,
                children : [
                        {
                                path : "",
                                element : <Homee />
                        },
                        {path : "findProfessional", element : <FindProfessional />},
                        {path : "findWork", element : <FindWork />},
                        {path : "login", element : <Login /> },
                        {path : "clientsignUp", element : <ClientSignUp />},
                        {path : "bricoleursignUp", element : <BricoleurSignUp />},
                        {path : "postService", element : <PostService />},
                        {path : "quickService", element : <QuickService />},
                ]
        }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <RouterProvider router={router}>
                <App2 />
        </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
