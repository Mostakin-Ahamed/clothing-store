
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Types.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
// import useTourTypes from '../../../../Hooks/useTourTypes';
import { Link } from 'react-router-dom';

const Types = () => {



    return (
        <div className='mt-10'>
            <div>
                <h1 className='text-5xl font-extrabold text-slate-500 text-center'>Categories</h1>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Link ><img className='w-full h-full object-cover' src="https://i.ibb.co/NFtvNq8/male5.png" />
                    <h2 className='font-bold text-3xl text-black absolute -mt-16 ml-3'>Shoes</h2></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link ><img className='h-full object-cover' src="https://i.ibb.co/5hhgzxJ/pa4.png" />
                    <h2 className='font-bold text-3xl text-black absolute -mt-16 ml-3'>Pants</h2></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link ><img className='h-full object-cover' src="https://i.ibb.co/B6MynYy/m2.png" />
                    <h2 className='font-bold text-3xl text-black absolute -mt-16 ml-3'>Shirt</h2></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link ><img className='h-full object-cover' src="https://i.ibb.co/TMnCS7m/fmale3.png" />
                    <h2 className='font-bold text-3xl text-black absolute -mt-16 ml-3'>Dress</h2></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link><img className='h-full object-cover' src="https://i.ibb.co/6nrXn9x/m4.png" />
                    <h2 className='font-bold text-3xl text-black absolute -mt-16 ml-3'>T-Shirt</h2></Link>
                </SwiperSlide>
                
            </Swiper>
            <hr className='border-dashed border-gray-400' />
        </div>
    );
};

export default Types;