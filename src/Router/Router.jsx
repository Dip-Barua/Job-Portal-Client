import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from './PrivateRoute';
import JobApply from "../pages/JobApply/JobApply";
import MyApplication from "../pages/MyApplication/MyApplication";
import AddJob from "../pages/AddJob/AddJob";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>Error</h2>,
      children: [
        {
            path: "/", 
            element: <Home></Home>
        },
        {
            path: "/register", 
            element: <Register></Register>
        }
        ,
        {
            path: "/login", 
            element: <SignIn></SignIn>
        }
        ,
        {
            path: "addjob", 
            element:<PrivateRoute> <AddJob></AddJob></PrivateRoute>
        }
        ,
        {
            path: "/jobs/:id", 
            element:  <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        }
        ,
        {
            path: "/jobApply/:id",  
            element:  <PrivateRoute><JobApply></JobApply></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        }
        ,
        {
            path: "/myApplication",  
            element:  <PrivateRoute><MyApplication></MyApplication></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;