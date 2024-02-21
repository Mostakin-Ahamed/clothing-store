import { Parallax } from 'react-parallax';

import cover from '/banner.jpg';
import customer from '/student.jpg';
import customer1 from '/student2 .jpg';
import customer2 from '/student4.jpg';
import customer3 from '/student3.jpg';

import { Fade } from 'react-awesome-reveal';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { FaQuoteRight } from "react-icons/fa";

const FeedBack = () => {
    return (
        <div>
            <Parallax blur={5} bgImage={cover} bgImageAlt="" strength={800}>
                <Fade duration={3000}>
                    <h1 className='uppercase text-center text-5xl font-extrabold text-gray-800-500 mt-28 w-auto mb-20 py-4 outline outline-offset-2 outline-8'>What our customers say</h1>
                </Fade>
                <div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >

                        <SwiperSlide style={{ backgroundColor: 'transparent' }}>
                            <div className='w-3/5 mx-auto space-y-8 mb-20 bg-transparent'>
                                <FaQuoteRight className='mx-auto '></FaQuoteRight>
                                <p className='text-center '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam aspernatur debitis laudantium odio facilis esse minus similique doloremque. Aut nostrum odio debitis soluta ipsa sed id mollitia corporis assumenda magnam.</p>
                                <div className='w-24 mx-auto'>
                                    <img className='rounded-full ' src={customer} alt="" />
                                </div>
                                <h2 className='text-black text-2xl font-bold text-center'>Mostakin Ahamed</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ backgroundColor: 'transparent' }}>
                            <div className='w-3/5 mx-auto space-y-8 mb-20 bg-transparent'>
                                <FaQuoteRight className='mx-auto '></FaQuoteRight>
                                <p className='text-center '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam aspernatur debitis laudantium odio facilis esse minus similique doloremque. Aut nostrum odio debitis soluta ipsa sed id mollitia corporis assumenda magnam.</p>
                                <div className='w-24 mx-auto'>
                                    <img className='rounded-full ' src={customer1} alt="" />
                                </div>
                                <h2 className='text-black text-2xl font-bold text-center'>Hemel Khan</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ backgroundColor: 'transparent' }}>
                            <div className='w-3/5 mx-auto space-y-8 mb-20 bg-transparent'>
                                <FaQuoteRight className='mx-auto '></FaQuoteRight>
                                <p className='text-center '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam aspernatur debitis laudantium odio facilis esse minus similique doloremque. Aut nostrum odio debitis soluta ipsa sed id mollitia corporis assumenda magnam.</p>
                                <div className='w-24 mx-auto'>
                                    <img className='rounded-full ' src={customer2} alt="" />
                                </div>
                                <h2 className='text-black text-2xl font-bold text-center'>Minhajur Rahaman</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ backgroundColor: 'transparent' }}>
                            <div className='w-3/5 mx-auto space-y-8 mb-20 bg-transparent'>
                                <FaQuoteRight className='mx-auto '></FaQuoteRight>
                                <p className='text-center '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam aspernatur debitis laudantium odio facilis esse minus similique doloremque. Aut nostrum odio debitis soluta ipsa sed id mollitia corporis assumenda magnam.</p>
                                <div className='w-24 mx-auto'>
                                    <img className='rounded-full ' src={customer3} alt="" />
                                </div>
                                <h2 className='text-black text-2xl font-bold text-center'>Abdul Mohammad Efti</h2>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Parallax>
        </div>
    );
};

export default FeedBack;