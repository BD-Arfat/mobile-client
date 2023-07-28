import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
// Logout Handel
    const handelLogout = () => {
        logout()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }

    const itmes = <>
        <li><Link to={'/'} className='font-bold text-lg'>Home</Link></li>
        <li><Link to={'/abouts'} className='font-bold text-lg'>Abouts</Link></li>
        <li><Link to={'/products'} className='font-bold text-lg'>Products</Link></li>
        {
            user?.uid ?
                <li><Link to={'/dashbord'} className='font-bold text-lg'>Dashbord</Link></li>
                :
                null}
    </>
    return (
        // Start Navbar
        <div className="navbar bg-base-100 shadow-2xl lg:px-10 lg:mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {itmes}
                    </ul>
                </div>
                <Link className=" cursor-pointer font-bold lg:text-3xl">Mobile-Mobile</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {itmes}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <Link onClick={handelLogout} to={'/login'} className="btn btn-neutral px-10 text-white">Log-Out</Link>
                        :
                        <Link className="btn btn-neutral px-10 text-white">Login</Link>
                }
            </div>
            <label htmlFor="my-drawer-2" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;
