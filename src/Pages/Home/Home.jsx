import { useEffect, useState } from "react";
import Banner from "../../Components/Banner";
import BottomBanner from "../../Components/BottomBanner";
import Review from "../../Components/Review";


const Home = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="mt-6">
            <Banner></Banner>
            <BottomBanner></BottomBanner>
            <div>
                <h1 className="text-center text-4xl font-semibold">Reviews</h1>

                <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto mb-6 mt-6">
                    {
                        reviews.map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>

            </div>


        </div>
    );
};

export default Home;