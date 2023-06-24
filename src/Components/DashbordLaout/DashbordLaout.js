import React from 'react';
import {  Link, Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'

const DashbordLaout = () => {
    return (
    <div>
        <Navbar></Navbar>
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
               <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-48 h-full bg-base-100 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to={'/dashbord'}>My Orders</Link></li>
                    <li><Link to={'/dashbord/users'}>All Users</Link></li>
                </ul>

            </div>
        </div>
    </div>
    );
};

export default DashbordLaout;