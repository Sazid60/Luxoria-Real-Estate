import { FaStar } from "react-icons/fa";


// eslint-disable-next-line react/prop-types
const Review = ({ review }) => {
    // eslint-disable-next-line react/prop-types
    const { image, comment } = review

    return (
        <>

            < div className="bg-white rounded-lg overflow-hidden shadow-md pb-2" >
                <div className="relative">
                    <img className="h-16 w-16 rounded-full mx-auto mt-4" src={image} alt="Reviewer" />
                    <div className="absolute bottom-0 left-0 bg-white rounded-full p-1"> </div>
                    <div className="flex justify-center mt-2 "><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /></div>
                </div>
                <div className="px-4 py-2">
                    <p className="text-sm text-gray-600 italic">
                        <span className="quotes text-base">&quot;</span>{comment}<span className="quotes text-base">&quot;</span>
                    </p>
                </div>
            </div >

        </>



    );
};

export default Review;
