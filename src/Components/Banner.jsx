
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { TypeAnimation } from 'react-type-animation';

import { Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <div className='relative'>
                <div className='absolute inset-0 flex flex-col z-10 translate-x-4 md:translate-x-16 lg:translate-x-16 translate-y-8 md:translate-y-16 lg:translate-y-16 w-[70%] h-[70%]'>
                    <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl text-white mb-6'>Discover Your <br /> New <span className='text-[#E1B453]'>Home</span></h1>
                    <TypeAnimation className='text-white text-xl md:text-2xl lg:text-4xl font-semibold'
                        sequence={['Single-Family', 600, ' Town-Houses', 600, 'Apartments', 600, 'Student-Housing', 600, 'Senior-Living-Communities', 600, 'Vacation-Rentals', 600]}
                        // style={{ fontSize: '2em', fontWeight:700, color:"white" }}
                        repeat={Infinity}
                    />
                </div>

                <div>
                    <Swiper
                        spaceBetween={0}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
             
                        <SwiperSlide><div className='bg-[url(/banner-1.jpg)] h-[200px] md:h-[300px] lg:h-[400px] w-full bg-cover bg-center bg-no-repeat'>
                            <div className='absolute inset-0 bg-gradient-to-b from-black  to-transparent opacity-60'></div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide><div className='bg-[url(/banner-2.jpg)] h-[200px] md:h-[300px] lg:h-[400px] w-full bg-cover bg-center bg-no-repeat'>
                            <div className='absolute inset-0 bg-gradient-to-b from-black  to-transparent opacity-60'></div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide><div className='bg-[url(/banner-3.jpg)] h-[200px] md:h-[300px] lg:h-[400px] w-full bg-cover bg-center bg-no-repeat'>
                            <div className='absolute inset-0 bg-gradient-to-b from-black  to-transparent opacity-60'></div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide><div className='bg-[url(/banner-4.jpg)] h-[200px] md:h-[300px] lg:h-[400px] w-full bg-cover bg-center bg-no-repeat'>
                            <div className='absolute inset-0 bg-gradient-to-b from-black  to-transparent opacity-60'></div>
                        </div></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>


    );
};

export default Banner;