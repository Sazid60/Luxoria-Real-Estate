
import { CiBadgeDollar, CiLocationOn } from "react-icons/ci";

import { TbRulerMeasure } from "react-icons/tb";

const EstateCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="card card-compact bg-base-100 shadow-xl p-4 rounded-none">
                <figure className=""><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                </figure>
                <div className="p-4">
                    <div>
                        <h2 className="font-bold text-lg md:text-lg lg:text-xl mb-6">Single Family Homes</h2>
                        <div className="flex items-center justify-between">
                            <p className="font-bold text-sm md:text-lg lg:text-lg text-[#E1B453] flex items-center gap-2 "><span className="text-black"><TbRulerMeasure /></span>2500 SQFT</p>
                            <h1 className="font-bold text-sm  bg-[#E1B453] flex justify-center items-center px-2 py-1 text-white rounded-sm">Status</h1>
                        </div>
                    </div>
                    <div className="flex justify-between mb-4 mt-4 text-center">
                        <p className="font-bold text-sm md:text-sm lg:text-lg flex items-center gap-2 "><span className="text-black"><CiLocationOn /></span> Dhanmondi</p>
                        <p className="font-bold text-sm md:text-sm lg:text-lg flex items-center gap-2 "><span className="text-black"><CiBadgeDollar /></span>2500$/Month</p>
                    </div>
                    <div className="card-actions w-full">
                        <button className="btn bg-[#E1B453] w-full text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateCards;