import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = (data) =>{
        console.log(data)

    }
    return (
        <div className='h-[590px] flex justify-center items-center'>
            <div className=''>
                <h1 className='text-4xl font-bold text-center'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email")}  className="input input-bordered input-primary w-96" required/>
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password")}  className="input input-bordered input-primary w-96" required/>
                    </div>
                    <input className='mt-4 w-96 btn btn-neutral' type="submit" />
                    <p className='mt-4'>Have you not registered yet? <Link to={'/register'} className='font-bold'>Register</Link></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-neutral btn-outline w-96'>You login with Google</button>
                </form>
            </div>
        </div>
    );
};

export default Login;