

const BottomBanner = () => {
    return (
        <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">
            <div className='
                mt-3  flex flex-col md:flex-row lg:flex-row lg:items-center justify-around text-left px-6 '>
                <div>
                    <h1 className='lg:text-center'><span className='text-lg md:text-3xl lg:text-4xl font-bold'>45 Years </span>  <br /> <span className='text-[#E1B453] text-sm  md:text-xl lg:text-2xl font-semibold'> Experience</span></h1>
                </div>
                <div>
                    <h1><span className='text-lg md:text-2xl lg:text-4xl font-bold'>200+</span>  <br /> <span className='text-[#E1B453] text-sm md:text-xl lg:text-2xl font-semibold'>Active Listing</span></h1>
                </div>
                <div>
                    <h1><span className='text-lg md:text-2xl lg:text-4xl font-bold'>$340</span>  <br /> <span className='text-[#E1B453] text-sm md:text-xl lg:text-2xl font-semibold'>Million In Sale </span></h1>
                </div>
                <div>
                    <h1><span className='text-lg md:text-2xl lg:text-4xl font-bold'>800+</span>  <br /> <span className='text-[#E1B453] text-sm md:text-xl lg:text-2xl font-semibold'>Happy Clients</span></h1>
                </div>
            </div>
            <hr className="border-gray-700 my-2 opacity-40 mb-1" />
        </div>
    );
};

export default BottomBanner;