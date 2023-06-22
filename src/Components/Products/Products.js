import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect( ()=>{
        fetch(`http://localhost:5000/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h1 className='text-center font-bold text-2xl md:text-5xl mt-28'>Our All Products</h1>
            <p className='text-center mt-5 px-20'>We know which phone you need. So we have brought you all kinds of apple products. Take a look and live</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-28 w-11/12 mx-auto'>
                {
                    products.map(product => <Product key={product._id} product={product}/>)
                }
            </div>
            <div className='text-center mt-10'>
                <button className='btn btn-success w-80'>See More</button>
            </div>
        </div>
    );
};

export default Products;