import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from 'react-query';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const {user} = useContext(AuthContext);

    const url = `  https://mobile-server-bd-arfat.vercel.app/orders?email=${user?.email}`

    const {data: orders=[], refetch} = useQuery({
        queryKey : [`orders`,user?.email],
        queryFn : async ()=>{
            const res = await fetch(url, {
                headers : {
                    authorization : `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    const handelDelete = (id) =>{
        const proceeed = window.confirm(`Do you really want to delete this product?`);
        if(proceeed){
            fetch(`  https://mobile-server-bd-arfat.vercel.app/orders/${id}`, {
                method : 'DELETE'
            })
            .then(res=>res.json())
            .then(data=> {
                if(data.deletedCount > 0){
                    refetch()
                    toast.success('The Order you want to delete has been successfully deleted')
                }
            })
           
        }
    }

    return (
        <div>
            <h1 className='ms-3 md:ms-7 mt-5 font-bold md:text-3xl'>My Orders</h1>

            <div className="overflow-x-auto mt-7">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Product-Name</th>
                            <th>Product-Price</th>
                            <th>Phone-Number</th>
                            <th>location</th>
                            <th>Delete</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            orders.map((order, i) =><tr key={order._id} className="bg-base-200">
                            <th>{i+1}</th>
                            <td>{order.Name}</td>
                            <td>{order.email}</td>
                            <td>{order.product}</td>
                            <td>{order.price}</td>
                            <td>{order.phone}</td>
                            <td>{order.location}</td>
                            <td><button onClick={()=>handelDelete(order._id)} className='btn btn-sm btn-error'>Delete</button></td>
                            <td>
                            {order.price && !order.paid &&
                                <Link to={`/dashbord/payment/${order._id}`}><button className='btn btn-sm btn-info'>Payment</button></Link>
                            }
                            {
                                order.price && order.paid && <span className=' text-green-700 text-center font-bold'>paid</span>
                            }
                            </td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;