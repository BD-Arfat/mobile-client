import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <div className='h-[590px] flex justify-center items-center'>
            <div className=''>
                <h1 className='text-4xl font-bold text-center'>Register</h1>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name")} className="input input-bordered input-primary w-96" required/>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email")} className="input input-bordered input-primary w-96" required />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password")} className="input input-bordered input-primary w-96" required/>
                    </div>
                    <input className='mt-4 w-96 btn btn-neutral' type="submit" />
                    <p className='mt-4'>Have you already registered? <Link to={'/login'} className='font-bold'>Login</Link></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-neutral btn-outline w-96'>You register with Google</button>
                </form>
            </div>
        </div>
    );
};

export default Register;