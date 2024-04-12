
import { CiBadgeDollar, CiLocationOn } from "react-icons/ci";

import { TbRulerMeasure } from "react-icons/tb";
import { Link } from "react-router-dom";


const EstateCards = ({ singleEstateData }) => {
    const { id, image, estate_title, segment, description, price, status, area, location, facilities } = singleEstateData

    return (
        <>
            {/* Card */}
            <div className="bg-base-100 shadow-md p-2 rounded-none hover:scale-105 hover:shadow-2xl " data-aos="fade-up" data-aos-duration="500" data-aos-delay="520">
                <figure className="w-full"><img className="object-cover h-40 w-full" src={image} alt="" />
                </figure>
                <div className="p-2">
                    <div>
                        <h2 className="font-bold text-lg mb-2 text-[#E1B453]">{estate_title}</h2>
                        <h2 className="font-medium text-xs mb-4">{segment}</h2>

                        <div className="flex items-center justify-between mb-4">
                            <p className="font-bold text-sm text-[#E1B453] flex items-center gap-1 "><span className="text-black"><TbRulerMeasure /></span>{area}</p>
                            <h1 className={`font-bold text-xs flex justify-center items-center px-1 py-0.5 rounded-sm ${status === 'For Rent' ? 'bg-[#E1B453] text-white' : 'bg-[#FFECB3] text-black'}`}>
                                {status}
                            </h1>
                        </div>
                    </div>
                    <div className="flex justify-between mb-4 mt-2 text-center">
                        <p className="font-bold text-xs flex items-center gap-1 "><span className="text-black"><CiLocationOn /></span>{location}</p>
                        <p className="font-bold text-xs  flex items-center gap-1 "><span className="text-black"><CiBadgeDollar /></span>{price}</p>
                    </div>
                    <div className="flex gap-2 mb-2 mt-2 text-center">
                        {
                            // eslint-disable-next-line react/prop-types
                            facilities.slice(0, 3).map(singleFacility => <p key={singleFacility} className="border border-[#E1B453] p-1 rounded-sm text-xs ">{singleFacility}</p>)
                        }
                    </div>
                    <div className="card-actions w-full">
                        <Link className="w-full" to={`/estate-details/${id}`}>
                            <button className="btn bg-[#E1B453] w-full text-white text-xs btn-sm mt-2">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EstateCards;