
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='relative'>
            <div className='absolute inset-0 flex flex-col items-center justify-center z-10'>
                <h1 className='font-bold lg:text-6xl text-white'>Discover Your <br /> New <span className='text-[#E1B453]'>Home</span></h1>
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
                    <SwiperSlide><div className='bg-[url(https://i.ibb.co/yVs9M4v/banner-1.jpg)] h-[200px] md:h-[300px] lg:h-[400px] w-full bg-cover bg-center bg-no-repeat'>
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40'></div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div className='bg-[url(https://i.ibb.co/f91pGLL/banner-2.jpg)] h-[200px] md:h-[300px] lg:h-[400px] w-full bg-cover bg-center bg-no-repeat'>
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40'></div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div className='bg-[url(https://i.ibb.co/Yy9xKtv/banner-3.jpg)] h-[200px] md:h-[300px] lg:h-[400px] w-full bg-cover bg-center bg-no-repeat'>
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40'></div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div className='bg-[url(https://i.ibb.co/7SQXQBb/banner-4.jpg)] h-[200px] md:h-[300px] lg:h-[400px] w-full bg-cover bg-center bg-no-repeat'>
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40'></div>
                    </div></SwiperSlide>
                </Swiper>
            </div>
        </div>


    );
};

export default Banner;