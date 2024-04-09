
const DetailEstate = () => {
    return (
        <div className="flex flex-col">
            <div className='relative h-[150px] md:h-[300px] lg:h-[300px] w-full'>
                <div className='absolute inset-0 bg-cover bg-center bg-no-repeat flex justify-center items-center'>
                    <img src="/banner-1.jpg" alt="Banner Image" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
                <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-white">Title</h1>
                </div>
            </div>

            <div className="mt-3">
                <div>
                    <h1 className="text-3xl font-bold">estate_title</h1>
                </div>

                <p className="mt-4 mb-4">Description</p>

                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-sm border border-solid ">
                        <tbody>
                            <tr>
                                <td className="px-2 py-1 text-left font-bold border border-solid ">Price</td>
                                <td className="px-2 py-1 border border-solid ">$2,500/month</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-1 text-left font-bold border ">Status</td>
                                <td className="px-2 py-1 border border-solid ">For Rent</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-1 text-left font-bold border border-solid">Area</td>
                                <td className="px-2 py-1 border border-solid0">3000 SQFT</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-1 text-left font-bold border ">Location</td>
                                <td className="px-2 py-1 border border-solid ">Banani, Dhaka</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-1 text-left font-bold border">Facilities</td>
                                <td className="px-2 py-1 border ">
                                    <ul>
                                        <li>Private Elevator</li>
                                        <li>Rooftop Garden</li>
                                        <li>Fitness Center</li>
                                        <li>3 Bedrooms</li>
                                        <li>2 Bathrooms</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex lg:justify-center">
                    <button className="btn btn-sm bg-[#E1B453] mt-4 mb-6 text-white w-28">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default DetailEstate;