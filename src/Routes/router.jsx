import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from '../pages/Home/Home/Home'
import Login from "../Pages/Shared/Login/Login";
import Singup from "../Pages/Shared/Singup/Singup";
import ErrorPage from "../Components/Error/ErrorPage";
import Instructors from "../Pages/Instructors/Instructors";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/instructors',
                element: <Instructors></Instructors>
            }
        ]

    },
    {
        path:'/login',
        element: <Login></Login>
    },
    {
        path:'/singup',
        element: <Singup></Singup>
    }
])