import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from './PrivateRoute';


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
            path: "/jobs/:id", 
            element:  <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        }
      ]
    },
  ]);

  export default router;