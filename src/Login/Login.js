import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import useToken from '../Hooks/UseToken';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const {loginUser, googleUser} = useContext(AuthContext)
    const location = useLocation();
    const Navigate = useNavigate();
    const from = location.state?.form?.pathName||'/';
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    if(token){
        Navigate(from, {replace:true})
    }

    const handleLogin = (data) =>{
        loginUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setLoginUserEmail(data.email)
            toast.success('successfull you login !!!!')
        })
        .catch(error =>{
            console.error(error)
            toast.error(error.message)
        })

    };

    

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
                    <p className='mt-4'>Have you not registered yet? <Link to={'/register'} className='font-bold'>Register</Link></p>
                    <input className='mt-4 w-96 btn btn-neutral' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Login;