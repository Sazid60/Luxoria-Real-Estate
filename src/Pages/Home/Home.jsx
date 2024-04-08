import Banner from "../../Components/Banner";
import Review from "../../Components/Review";


const Home = () => {
    return (
        <div className="mt-6">
            <Banner></Banner>
            <div className='
                mt-3  flex flex-col md:flex-row lg:flex-row lg:items-center justify-around text-left p-6 '>
                <div>
                    <h1 className='lg:text-center'><span className='text-2xl md:text-3xl lg:text-5xl font-bold'>45 Years </span>  <br /> <span className='text-[#E1B453] text-lg  md:text-2xl lg:text-4xl font-semibold'> Experience</span></h1>
                </div>
                <div>
                    <h1><span className='text-xl md:text-2xl lg:text-4xl font-bold'>200+</span>  <br /> <span className='text-[#E1B453] text-lg md:text-xl lg:text-2xl font-semibold'>Active Listing</span></h1>
                </div>
                <div>
                    <h1><span className='text-xl md:text-2xl lg:text-4xl font-bold'>$340</span>  <br /> <span className='text-[#E1B453] text-lg md:text-xl lg:text-2xl font-semibold'>Million In Sale </span></h1>
                </div>
                <div>
                    <h1><span className='text-xl md:text-2xl lg:text-4xl font-bold'>800+</span>  <br /> <span className='text-[#E1B453] text-lg md:text-xl lg:text-2xl font-semibold'>Happy Clients</span></h1>
                </div>
            </div>
            <hr className="border-gray-700 my-2 opacity-40 mb-6" />
            <Review></Review>

        </div>
    );
};

export default Home;