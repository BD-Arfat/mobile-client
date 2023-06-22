import React from 'react';

const Product = ({ product }) => {
    return (
        <div className="card bg-base-100 shadow-2xl py-7 rounded-2xl border-2 border-black mt-5">
            <figure className="px-10 pt-10">
                <img src={product.picture} alt="Shoes" className="rounded-xl -mt-6" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold text-success text-center">Name : {product.name}</h2>
                <div className='mt-2'>
                    <h3 className='text-lg font-bold text-center'>Network : {product.Network}</h3>
                </div>
                <div className=' flex justify-between mt-2 text-center'>
                    <p>RAM : {product.RAM}</p>
                    <p>ROM : {product.ROM}</p>
                </div>
                <div>
                    <p className='text-lg font-bold text-success text-center'>Price : {product.Price}</p>
                </div>
                <div className='text-center mt-2 text-xl font-bold'>
                    <h1><span className='text-success'>OperatingSystem</span> : {product.OperatingSystem}</h1>
                </div>
            </div>
            <div className="w-full text-center">
                <button className="btn btn-neutral w-80 mx-auto">Buy Now</button>
            </div>
        </div>
    );
};

export default Product;