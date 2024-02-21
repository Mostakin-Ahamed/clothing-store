import { useLoaderData } from "react-router-dom";
import { useContext, useRef } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Details = () => {

    const item = useLoaderData()

    const { user } = useContext(AuthContext)
    const formRef = useRef();
    const { _id, image, description, price, duration_hours, service_name } = item;
    const axios = useAxiosPublic()

    const bookItem = e => {
        // e.preventDefault();
        // console.log(tour.image);
        // const form = e.target;
        // const email = user.email;
        // const tourId = _id;
        // console.log(tourId);
        // const tourImage = image;
        // console.log(tourImage);
        // const tourDescription = description;
        // const tourPrice = price;
        // const tourDuration = duration_hours;
        // const guideName = form.guideName.value;
        // const tourDate = form.date.value;
        // const tourName = service_name;
        // const bookedTour = { email, tourId, tourImage, tourDescription, tourPrice, tourDuration, tourName, guideName, tourDate };
        // console.log(bookedTour);

        axios.post('/bookTour', bookedTour)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added to cart!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    formRef.current?.reset();
                }
            })



    }


    return (
        <div>
            <Helmet><title>{item.name}</title></Helmet>
            <div className=" min-h-[700px] flex justify-center  mb-10">
                <img className=" h-full pt-16 " src={image} alt="" />
            </div>
            <div className=" mb-10 ">
                <div className="flex-col justify-center text-center">
                    <h1 className="text-3xl font-bold">Name: {item.name}</h1>
                    <h1 className="text-2xl font-bold">Detail: {item.details}</h1>
                    <h1 className="text-2xl font-bold">Price: ${price}</h1>

                </div>
                <div className="flex justify-center">
                    <button className="btn btn-warning w-1/2 mx-auto" onClick={() => document.getElementById('my_modal_5').showModal()}>Add To Cart</button>
                </div>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <div className="py-4">
                            <h3 className="font-bold text-lg text-center">{item.name}</h3>
                            <form onSubmit={bookItem} className="w-1/2 lg:w-10/12 md:3/4 mx-auto">

                                <figure><img className="object-cover h-full" src={image} alt="Shoes" /></figure>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input type="text" name="productName" placeholder="Product Name" defaultValue={item.name} readOnly className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name="productName"
                                        defaultValue={user.displayName}
                                        placeholder="Service Provider Email"
                                        readOnly className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input type="text" name="productName"
                                        defaultValue={user.email}
                                        readOnly
                                        className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="price"
                                        defaultValue={price} readOnly
                                        className="input input-bordered" />
                                </div>
                                <button className="bg-orange-400 w-full mx-auto mt-4 btn font-bold ">Add To Cart </button>
                            </form>
                        </div>
                        <div className="modal-action ">
                            <form method="dialog">

                                {/* if there is a button in form, it will close the modal */}

                                <div className="flex justify-center ">
                                    <button className="btn ">Close</button>
                                </div>

                            </form>

                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Details;