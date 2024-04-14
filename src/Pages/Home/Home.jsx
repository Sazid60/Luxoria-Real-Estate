
import Banner from "../../Components/Banner";
import BottomBanner from "../../Components/BottomBanner";
import EstateCards from "../../Components/EstateCards/EstateCards";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { Icon } from 'leaflet'; // Import Icon from Leaflet
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();


import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"

const Home = () => {
    const [loaded, setLoaded] = useState(false)
    const estateData = useLoaderData()
    // console.log(estateData)



    // Define a custom icon
    const customIcon = new Icon({
        iconUrl: '/Location.png', // Provide the path to your icon image
        iconSize: [40, 65], // Size of the icon
    });
    const markers = [
        {
            geoLocation: [23.797911, 90.414391], // Majestic Manor
            popup: "Majestic Manor"
        },
        {
            geoLocation: [23.7937, 90.4047], // Elegant Terrace Residence
            popup: "Elegant Terrace Residence"
        },
        {
            geoLocation: [23.7461, 90.3742], // Prestigious Sky Residence
            popup: "Prestigious Sky Residence"
        },
        {
            geoLocation: [23.8759, 90.3901], // Premier Student Sanctuary
            popup: "Premier Student Sanctuary"
        },
        {
            geoLocation: [23.8223, 90.3795], // Tranquil Eldercare Retreat
            popup: "Tranquil Eldercare Retreat"
        },
        {
            geoLocation: [21.4272, 92.0058], // Exclusive Beachfront Villa
            popup: "Exclusive Beachfront Villa"
        }
    ];


    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoaded(true);
    //     }, 3500);

    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <div className="mt-4">
            <Helmet>
                <title>Luxoria</title>
            </Helmet>

            <Banner></Banner>
            <BottomBanner></BottomBanner>

            {/* {!loaded && (
                <div className="text-center"  >
                    <p className="text-sm">Scroll Down</p>
                    <p className="text-3xl flex justify-center text-yellow-400"><IoIosArrowDown /></p>
                </div>
            )} */}

            <div>
                <h1 className="text-center text-2xl md:text-2xl lg:text-3xl font-bold md:mt-4 mb-1 md:mb-2 lg:mb-4 mt-3" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="320">Properties</h1>
                <p className="text-center text-xs md:text-lg lg:text-xl max-w-2xl mx-auto" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="520">Explore our available properties and discover the perfect place to call home</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 mt-4 lg:px-28">
                    {
                        estateData.map(singleEstateData => <EstateCards key={singleEstateData.id} singleEstateData={singleEstateData}></EstateCards>)
                    }

                </div>
            </div>

            <div className="lg:px-28 mb-4">
                <h1 className="text-center text-2xl md:text-2xl lg:text-3xl font-bold md:mt-4 mb-1 md:mb-2 lg:mb-4 mt-3" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="320">Locate Properties</h1>
                <p className="text-center text-xs md:text-lg lg:text-xl max-w-2xl mx-auto mt-2 mb-4" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="520">Find Us Nearby You and Start Your New Journey With Us</p>
                <div data-aos="zoom-in" data-aos-duration="100" >
                    <MapContainer className="h-[20vh] md:h-[25vh] lg:h-[40vh] border-orange-300 border rounded-xl" center={[23.777176, 90.399452]} zoom={11} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            markers.map(marker => (
                                <Marker key={marker.popup} position={marker.geoLocation} icon={customIcon}>
                                    <Popup>{marker.popup}</Popup>
                                </Marker>
                            ))
                        }

                    </MapContainer>
                </div>
            </div>

            <>
                <h1 className="text-center text-2xl md:text-2xl lg:text-3xl font-bold md:mt-4 mb-1 md:mb-2 lg:mb-4 mt-3" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="320">Reviews</h1>
                <p className="text-center text-xs md:text-lg lg:text-xl mx-auto" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="520">Property reviews offer crucial insights, guiding buyers and renters toward informed decisions about their next home</p>

                <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto mb-6 mt-6" data-aos="zoom-in" data-aos-duration="100">
                    < div className="bg-white rounded-lg overflow-hidden shadow-md pb-2"  >
                        <div className="relative">
                            <img className="h-16 w-16 rounded-full mx-auto mt-4" src="/reviewer-1.jpg" alt="Reviewer" />
                            <div className="absolute bottom-0 left-0 bg-white rounded-full p-1"> </div>
                            <div className="flex justify-center mt-2 "><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /></div>
                        </div>
                        <div className="px-4 py-2">
                            <p className="text-xs md:text-sm lg:text-sm  text-gray-600 italic">
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
                            <p className="text-xs md:text-sm lg:text-sm text-gray-600 italic">
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