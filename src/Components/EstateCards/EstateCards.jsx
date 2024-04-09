
import { CiBadgeDollar, CiLocationOn } from "react-icons/ci";

import { TbRulerMeasure } from "react-icons/tb";
import { Link } from "react-router-dom";

const EstateCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 lg:px-28">
            {/* Card */}
            <div className="bg-base-100 shadow-md p-2 rounded-none ">
                <figure className="w-full"><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="" />
                </figure>
                <div className="p-2">
                    <div>
                        <h2 className="font-bold text-lg mb-2 text-[#E1B453]">Majestic Manor</h2>
                        <h2 className="font-medium text-xs mb-4">Single Family Homes</h2>

                        <div className="flex items-center justify-between mb-4">
                            <p className="font-bold text-sm text-[#E1B453] flex items-center gap-1 "><span className="text-black"><TbRulerMeasure /></span>2500 SQFT</p>
                            <h1 className="font-bold text-xs bg-[#E1B453] flex justify-center items-center px-1 py-0.5 text-white rounded-sm">Status</h1>
                        </div>
                    </div>
                    <div className="flex justify-between mb-4 mt-2 text-center">
                        <p className="font-bold text-xs flex items-center gap-1 "><span className="text-black"><CiLocationOn /></span> Dhanmondi</p>
                        <p className="font-bold text-xs  flex items-center gap-1 "><span className="text-black"><CiBadgeDollar /></span>2500$/Month</p>
                    </div>
                    <div className="flex gap-2 mb-2 mt-2 text-center">
                        <p className="border border-[#E1B453] p-1 rounded-sm text-xs ">Graden</p>
                        <p className="border border-[#E1B453] p-1 rounded-sm text-xs ">2 Bed</p>
                        <p className="border border-[#E1B453] p-1 rounded-sm text-xs ">Backyard</p>
                    </div>
                    <div className="card-actions w-full">
                        <Link className="w-full" to={`/estate-details/1`}>
                            <button className="btn bg-[#E1B453] w-full text-white text-xs btn-sm mt-2">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateCards;