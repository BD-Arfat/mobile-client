import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`);
            const data = await res.json();
            return data
        }
    });

    const handleMakeAdmin = (id) =>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method : 'PUT',
            headers : {
                authorization : `bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount>0){
                toast.success('successfull make admin !!!!!!!');
                refetch()
            }
        })
    };

    const handelDelete = (id) => {
        const proceeed = window.confirm(`Do you really want to delete this user?`);
        if(proceeed){
            fetch(`http://localhost:5000/users/${id}`, {
                method : 'DELETE'
            })
            .then(res=>res.json())
            .then(data=> {
                if(data.deletedCount > 0){
                    refetch()
                    toast.success('The user you want to delete has been successfully deleted')
                }
            })
           
        }
    }

    return (
        <div>
            <h2 className='text-3xl font-bold mt-4 ms-3'>All Users</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Favorite Color</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, i) => <tr key={user._id} className="bg-base-200">
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{ user?.role !== 'admin' && <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-success btn-sm'>Admin</button>}</td>
                                <td><button onClick={()=>handelDelete(user._id)} className='btn btn-error btn-sm'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;