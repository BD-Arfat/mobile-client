import { createBrowserRouter } from "react-router-dom";
import Maine from "../Maine/Maine";
import Maine2 from "../../Maine2/Maine2";
import Home from "../Pages/Home/Home/Home";
import Products from "../Products/Products";
import Login from "../../Login/Login";
import Register from "../../Register/Register";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Maine/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '/products',
                element : <Products/>
            }
        ]
    },
    {
        path : '/',
        element : <Maine2/>,
        children : [
            {
                path : '/login',
                element : <Login/>
            },
            {
                path : '/register',
                element : <Register/>
            }
        ]
    }
])