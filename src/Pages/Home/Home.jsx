
import Banner from "../../Components/Banner";
import BottomBanner from "../../Components/BottomBanner";
import Review from "../../Components/Review";
import EstateCards from "../../Components/EstateCards/EstateCards";
import { useLoaderData } from "react-router-dom";


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

            <Review></Review>
        </div>
    );
};

export default Home;