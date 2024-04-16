import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";


const DetailEstate = () => {
    const estateData = useLoaderData()
    const { id } = useParams()

    const [singleCard, setSingleCard] = useState({})

    useEffect(() => {
        if (id && estateData) {
            const singleItemObj = estateData.find(item => item.id === +id);
            setSingleCard(singleItemObj);
        }
    }, [id, estateData]);


    const { image, estate_title, segment, description, price, status, area, location, facilities } = singleCard

    return (
        <div className="flex flex-col">
            <Helmet>
                <title className="text-lg md:text-xl lg:text-xl">{estate_title}</title>
            </Helmet>
            <div className='relative h-[150px] md:h-[300px] lg:h-[300px] w-full'>
                <div className='absolute inset-0 bg-cover bg-center bg-no-repeat flex justify-center items-center'>
                    <img src={image} alt="Banner Image" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
                <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-white" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="320">{segment}</h1>
                </div>
            </div>

            <div className="mt-3">
                <div>
                    <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold" data-aos="fade-left" data-aos-duration="500" data-aos-delay="400">{estate_title}</h1>
                </div>

                <p className="mt-4 mb-4 text-xs md:text-lg lg:text-lg" data-aos="fade-left" data-aos-duration="500" data-aos-delay="500">{description}</p>

                <div className="overflow-x-auto" data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
                    <table className="table-auto w-full text-sm border border-solid ">
                        <tbody>
                            <tr >
                                <td className="px-2 py-1 text-left font-bold border border-solid text-xs md:text-lg lg:text-lg ">Price</td>
                                <td className="px-2 py-1 border border-solid text-xs md:text-lg lg:text-lg">{price}</td>
                            </tr>
                            <tr >
                                <td className="px-2 py-1 text-left font-bold border text-xs md:text-lg lg:text-lg ">Status</td>
                                <td className="px-2 py-1 border border-solid text-xs md:text-lg lg:text-lg ">{status}</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-1 text-left font-bold border border-solid text-xs md:text-lg lg:text-lg">Area</td>
                                <td className="px-2 py-1 border border-solid0 text-xs md:text-lg lg:text-lg">{area}</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-1 text-left font-bold border text-xs md:text-lg lg:text-lg">Location</td>
                                <td className="px-2 py-1 border border-solid text-xs md:text-lg lg:text-lg">{location}</td>
                            </tr>
                            <tr >
                                <td className="px-2 py-1 text-left font-bold border text-xs md:text-lg lg:text-lg">Facilities</td>
                                <td className="px-2 py-1 border text-xs md:text-lg lg:text-lg">
                                    <ul>
                                        {facilities &&
                                            facilities.map(singleFacility => <li key={singleFacility} className="">{singleFacility}</li>)
                                        }
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex lg:justify-center gap-3">
                        <Link to={"/"}> <button className="btn btn-sm bg-[#FFECB3] mt-4 mb-6 text-black w-28">Explore More</button></Link>
                        <button className="btn btn-sm bg-[#E1B453] mt-4 mb-6 text-white w-28">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailEstate;