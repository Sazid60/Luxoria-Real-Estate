
import Banner from "../../Components/Banner";
import BottomBanner from "../../Components/BottomBanner";
import Review from "../../Components/Review";
import EstateCards from "../../Components/EstateCards/EstateCards";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const estateData = useLoaderData()
    console.log(estateData)


    return (
        <div className="mt-6">
            <Banner></Banner>
            <BottomBanner></BottomBanner>
            <EstateCards></EstateCards>
            <Review></Review>
        </div>
    );
};

export default Home;