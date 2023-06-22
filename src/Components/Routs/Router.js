import { createBrowserRouter } from "react-router-dom";
import Maine from "../Maine/Maine";
import Home from "../Pages/Home/Home/Home";
import Products from "../Products/Products";

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
    }
])