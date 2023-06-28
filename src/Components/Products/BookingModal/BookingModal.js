import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({ modalProudcts, setModalProducts }) => {
    const { name, Price, picture } = modalProudcts;
    const {user} = useContext(AuthContext)

    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const product = form.product.value;
        const price = form.price.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const order = {
            Name: name,
            email: email,
            phone: phone,
            location: location,
            product : product,
            price : price
        };


        fetch(`  https://mobile-server-bd-arfat.vercel.app/order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setModalProducts(null);
                    toast.success('your booking successfull !!!!');
                    console.log(data)
                }
            })



    };




    return (
        <>
            <dialog onSubmit={handelSubmit} id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <label onClick={() => setModalProducts(null)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-2xl">{name}</h3>
                    <p className="py-4 text-xl font-bold">Price : {Price}</p>
                    <img className='mx-auto' src={picture} alt="" />

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Enter Your Name</span>
                        </label>
                        <input type="text" name='name' className="input input-bordered input-success w-full" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Enter Your Email</span>
                        </label>
                        <input type="email" name='email' disabled defaultValue={user?.email} className="input input-bordered input-success w-full" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name='product' disabled defaultValue={name} className="input input-bordered input-success w-full" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Price</span>
                        </label>
                        <input type="text" name='price' disabled defaultValue={Price} className="input input-bordered input-success w-full" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Enter Your Phone Number</span>
                        </label>
                        <input type="phone" name='phone' className="input input-bordered input-success w-full" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Enter Your Location</span>
                        </label>
                        <input type="location" name='location' className="input input-bordered input-success w-full" />
                    </div>

                    <input type="submit" className='btn btn-neutral w-full mt-4' value='add to cart' />

                </form>
            </dialog>
        </>
    );
};

export default BookingModal;