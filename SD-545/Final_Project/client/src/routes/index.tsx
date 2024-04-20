import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

export default [
    {
        path: '/login',
        element: <Login/> 
    },
    {
        path: '/home',
        element: <Home/>,
        
    },
    {
        path: '/',
        element: <Navigate to='/login' />
    },
    {
        path: '*',
        element: <NotFound />
    }
   

]