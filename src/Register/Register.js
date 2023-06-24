import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import useToken from '../Hooks/UseToken';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const {createUser, googleUser, updateUser} = useContext(AuthContext)
    // const [error, setError] = useState('')
    // const [data, setData] = useState("");
    // const location = useLocation();
    const Navigate = useNavigate();
    // const from = location.state?.form?.pathName||'/';
    const [createUserEmail, setCreateUseEmail] = useState('')
    const [token] = useToken(createUserEmail);

    if(token){
        Navigate('/')
    }

    const handleRegister = data =>{
        // setError('')
        createUser(data.email, data.password)
        .then(result=> {
            const user = result.user;
            console.log(user);
            const userInfo = {
                displayName : data.name
            }
            updateUser(userInfo)
            .then(()=>{
               saveUser(data.name, data.email)
            })
            .catch(error => {
                console.log(error)
            })
            toast.success('register successfull !!!')
        })
        .catch(error => {
            toast.error(error.message)
        })
    }

    const handelGoogleSubmit = () =>{
        googleUser()
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error =>{
            console.error(error)
            toast.error(error.message)
        })
    }

    const saveUser = (name, email) =>{
        const user = {name,email};
        fetch(`http://localhost:5000/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
             setCreateUseEmail(email)
            })
    }

    

    return (
        <div className='h-[590px] flex justify-center items-center'>
            <div className=''>
                <h1 className='text-4xl font-bold text-center'>Register</h1>
                <form onSubmit={handleSubmit(handleRegister)}>
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
                    <button onClick={handelGoogleSubmit} className='btn btn-neutral btn-outline w-96'>You register with Google</button>
                </form>
            </div>
        </div>
    );
};

export default Register;