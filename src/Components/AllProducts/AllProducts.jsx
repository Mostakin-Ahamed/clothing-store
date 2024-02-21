import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Swal from "sweetalert2";
import { addToDb } from "../../FakeDB/FakeDB";



const BestDeals = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const popular = products.filter(product => (product.price < 50) && (product.price > 20))
    const handleBuyNow = (product) => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product added in your cart',
            showConfirmButton: false,
            timer: 1500
        })
        addToDb(product.id)

    }
    return (
        <div className="my-16 max-h-[900px]">
            <Slide direction="down">
                <div className="flex justify-center">
                    <h1 className="text-3xl font-bold text-center border-double border-y-8 border-[#9be9a0] inline-block">
                        Our Best Deals
                    </h1>
                </div>
            </Slide>
            <Slide direction="up" duration={1000} className="my-4">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        popular.map(item => (
                            <SwiperSlide key={item.id}>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img className="h-36" src={item.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item.name}</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions justify-center">
                                            <button className="btn btn-primary">Details</button>
                                        </div>
                                    </div>
                                </div></SwiperSlide>))
                    }


                </Swiper>
            </Slide>


        </div>
    );
};

export default BestDeals;