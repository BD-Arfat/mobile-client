import { createBrowserRouter } from "react-router-dom";
import Maine from "../Maine/Maine";
import Maine2 from "../../Maine2/Maine2";
import Home from "../Pages/Home/Home/Home";
import Products from "../Products/Products";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import PrivetRouts from "../../PrivetRouts/PrivetRouts";
import Dashbord from "../Dashbord/Dashbord";
import DashbordLaout from "../DashbordLaout/DashbordLaout";
import MyOrders from "../DashbordLaout/MyOrders/MyOrders";
import AllUsers from "../DashbordLaout/AllUsers/AllUsers";
import AdminRouts from "../../PrivetRouts/AdminRouts/AdminRouts";
import Payment from "../DashbordLaout/Payment/Payment";

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
                element : <PrivetRouts><Products/></PrivetRouts>
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
    },
    {
        path : '/dashbord',
        element: <PrivetRouts><DashbordLaout></DashbordLaout></PrivetRouts>,
        children : [
            {
                path : '/dashbord',
                element : <MyOrders></MyOrders>
            },
            {
                path : '/dashbord/users',
                element : <AdminRouts><AllUsers/></AdminRouts>
            },
            {
                path : '/dashbord/payment/:id',
                element : <AdminRouts><Payment/></AdminRouts>,
                loader : ({params}) => fetch(`http://localhost:5000/orders/${params.id}`)
            }
        ]
    }
])