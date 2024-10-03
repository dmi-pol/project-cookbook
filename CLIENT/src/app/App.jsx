import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import { useState } from "react";
;

import { useEffect } from "react";

import Layout from "./Layot";
import RegistrationPage from "../components/registrationForm";
import axiosInstance, { SetAccessToken } from "../../axiosInstance";
import AuthorizationPage from "../components/authorizationForm";
import RecipesPage from "../Pages/RecipesPage";


function App() {
  const [user, setUser] = useState(null);

   
  const userChecker = async () => {
    try {
      const response = await axiosInstance.get('/tokens/refresh')
      
      if(response.status === 200){
        setUser(response.data.user)
        SetAccessToken(response.data.accessToken)
      }
    } catch (error) {
      console.log(error.message)
      
      
    }
  }
  
  useEffect(() => {
    console.log(user);
    userChecker()
  }, []);
 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout user={user} setUser={setUser} />,
      children: [
        {
          path: "/cats",
          element:  <RecipesPage user={user}/>
        },
        {
          path: "/registration",
          element: <RegistrationPage setUser={setUser} />,
        },
        {
          path: "/authorization",
          element: <AuthorizationPage setUser={setUser} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
