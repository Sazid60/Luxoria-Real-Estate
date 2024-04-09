
import Banner from "../../Components/Banner";
import BottomBanner from "../../Components/BottomBanner";
import EstateCards from "../../Components/EstateCards/EstateCards";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";


const Home = () => {
    const estateData = useLoaderData()
    // console.log(estateData)


    return (
        <div className="mt-6">
            <Banner></Banner>
            <BottomBanner></BottomBanner>

            <div>
                <h1 className="text-center text-4xl font-semibold mb-6">Properties</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 lg:px-28">
                    {
                        estateData.map(singleEstateData => <EstateCards key={singleEstateData.id} singleEstateData={singleEstateData}></EstateCards>)
                    }

                </div>
            </div>

            <>
            <h1 className="text-center text-4xl font-semibold">Reviews</h1>

            <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto mb-6 mt-6">
                < div className="bg-white rounded-lg overflow-hidden shadow-md pb-2" >
                    <div className="relative">
                        <img className="h-16 w-16 rounded-full mx-auto mt-4" src="/reviewer-1.jpg" alt="Reviewer" />
                        <div className="absolute bottom-0 left-0 bg-white rounded-full p-1"> </div>
                        <div className="flex justify-center mt-2 "><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /></div>
                    </div>
                    <div className="px-4 py-2">
                        <p className="text-sm text-gray-600 italic">
                            <span className="quotes text-base">&quot;</span>The apartment we bought through this website exceeded our expectations. The location is perfect, and the amenities are top-notch. We are very satisfied with our purchase.<span className="quotes text-base">&quot;</span>
                        </p>
                    </div>
                </div>
                < div className="bg-white rounded-lg overflow-hidden shadow-md pb-2" >
                    <div className="relative">
                        <img className="h-16 w-16 rounded-full mx-auto mt-4" src="/reviewer-2.jpg" alt="Reviewer" />
                        <div className="absolute bottom-0 left-0 bg-white rounded-full p-1"> </div>
                        <div className="flex justify-center mt-2 "><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /></div>
                    </div>
                    <div className="px-4 py-2">
                        <p className="text-sm text-gray-600 italic">
                            <span className="quotes text-base">&quot;</span>We are thrilled with our new apartment! The process of buying it was smooth, and the real estate agents were very helpful. The apartment itself is spacious and beautifully designed. We couldn't be happier.<span className="quotes text-base">&quot;</span>
                        </p>
                    </div>
                </div>
            </div>
        </>

        </div>
    );
};

export default Home;