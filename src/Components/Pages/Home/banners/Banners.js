import React from 'react';
import image1 from '../../../../image/iPhone11.jpeg'
import image2 from '../../../../image/iPhone13.jpeg'
import image3 from '../../../../image/iPhone14Pro.jpeg'

const Banners = () => {
    return (
        <div className=' mt-5 w-11/12 mx-auto shadow-2xl py-10 rounded-3xl'>
            <div className='-mt-28'>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <div className="hero">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img style={{ width: 500 }} src={image1} className=" md:w-96 md:mx-auto" alt='iphone-12' />
                                <div className='md:w-1/2 text-justify md:pr-20 md:mx-auto'>
                                    <h1 className="text-2xl font-bold md:text-5xl">I Phone 12</h1>
                                    <p className="py-6">We have very good iPhone 12 here, iPhone 12 Pro, iPhone 12 Pro Max. Inshallah you will get what you want. I can provide you with all prevention services. You can order mobile by looking at our website carefully. You can contact us if you want.</p>
                                    <button className="btn btn-neutral text-white font-bold">choose your product</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <div className="hero ">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                            <img style={{ width: 500 }} src={image2} className=" md:w-96 md:mx-auto" alt='iphone-13' />
                                <div className='md:w-1/2 text-justify md:pr-20 md:mx-auto'>
                                    <h1 className="text-2xl font-bold md:text-5xl">I Phone 13</h1>
                                    <p className="py-6">We have very good iPhone 13 here, iPhone 13 Pro, iPhone 13 Pro Max. Inshallah you will get what you want. I can provide you with all prevention services. You can order mobile by looking at our website carefully. You can contact us if you want.</p>
                                    <button className="btn btn-neutral text-white font-bold">choose your product</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <div className="hero my-20">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                            <img style={{ width: 500 }} src={image3} className=" md:w-96 md:mx-auto" alt='iphone-14' />
                                <div className='md:w-1/2 text-justify md:pr-20 md:mx-auto'>
                                    <h1 className="text-2xl font-bold md:text-5xl">I Phone 14</h1>
                                    <p className="py-6">We have very good iPhone 14 here, iPhone 14 Pro, iPhone 14 Pro Max. Inshallah you will get what you want. I can provide you with all prevention services. You can order mobile by looking at our website carefully. You can contact us if you want.</p>
                                    <button className="btn btn-neutral text-white font-bold">choose your product</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full gap-2 -mt-20">
                    <a href="#item1" className="btn btn-xs btn-neutral">1</a>
                    <a href="#item2" className="btn btn-xs btn-neutral">2</a>
                    <a href="#item3" className="btn btn-xs btn-neutral">3</a>
                </div>
            </div>
        </div>
    );
};

export default Banners;