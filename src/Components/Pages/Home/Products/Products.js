import React, {  useState } from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';
import BookingModal from '../../../Products/BookingModal/BookingModal';
import { useQuery } from 'react-query';

const Products = () => {
    const [modalProudcts, setModalProudcts] = useState([]);
    const {data : products = []} = useQuery({
        queryKey : ['products'],
        queryFn : async () => {
            const res = await fetch (`  https://mobile-server-bd-arfat.vercel.app/product`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-center font-bold text-2xl md:text-5xl mt-28'>Advertisement</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-28 w-11/12 mx-auto'>
                {
                    products.map(product => <Product key={product._id} product={product} setModalProudcts={setModalProudcts}/>)
                }
            </div>
            <div className='text-center mt-10'>
                <Link to={'/products'} className='btn btn-success w-80'>See More</Link>
            </div>
            {modalProudcts && <BookingModal modalProudcts={modalProudcts} setModalProducts={setModalProudcts}/>}
        </div>
    );
};

export default Products;