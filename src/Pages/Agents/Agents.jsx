import { Helmet } from "react-helmet-async";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Agents = () => {
    return (
        <section className="py-2 ">
            <Helmet>
                <title>Agents</title>
            </Helmet>
            <div className="container flex flex-col items-center justify-center p-4 mx-auto">
            <h1 className="text-center text-4xl font-semibold " data-aos="zoom-in" data-aos-duration="500" data-aos-delay="320">Our Agents</h1>
            <p className="text-center  max-w-sm lg:max-w-xl mx-auto mt-2" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="520">Find Your Dedicated Real Estate Agent Today and Start Your Journey Home</p>
                <div className="flex flex-row flex-wrap-reverse justify-center mt-6" >
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400" >
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="/Agent-1.jpg" />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug">Samir Khan</p>
                            <p>Uttara-Agent</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                            <a rel="noopener noreferrer" href="#" title="Email" className="text-gray-900 hover:text-violet-400">
                                <MdEmail />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Twitter" className="text-gray-900 hover:text-violet-400">
                                <FaTwitter />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-900 hover:text-violet-400">
                                <FaLinkedin />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="GitHub" className="text-gray-900 hover:text-violet-400">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="/Agent-2.jpg" />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug">Aarav Islam</p>
                            <p>Dhanmondi-Agent</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                            <a rel="noopener noreferrer" href="#" title="Email" className="text-gray-900 hover:text-violet-400">
                                <MdEmail />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Twitter" className="text-gray-900 hover:text-violet-400">
                                <FaTwitter />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-900 hover:text-violet-400">
                                <FaLinkedin />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="GitHub" className="text-gray-900 hover:text-violet-400">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800" data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="/Agent-3.jpg" />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug">Farid Ahmed</p>
                            <p>Gulshan-Agent</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                            <a rel="noopener noreferrer" href="#" title="Email" className="text-gray-900 hover:text-violet-400">
                                <MdEmail />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Twitter" className="text-gray-900 hover:text-violet-400">
                                <FaTwitter />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-900 hover:text-violet-400">
                                <FaLinkedin />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="GitHub" className="text-gray-900 hover:text-violet-400">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800" data-aos="fade-up" data-aos-duration="500" data-aos-delay="700">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="/Agent-4.jpg" />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug">Rajib Hasan</p>
                            <p>Mirpur-Agent</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                            <a rel="noopener noreferrer" href="#" title="Email" className="text-gray-900 hover:text-violet-400">
                                <MdEmail />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Twitter" className="text-gray-900 hover:text-violet-400">
                                <FaTwitter />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-900 hover:text-violet-400">
                                <FaLinkedin />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="GitHub" className="text-gray-900 hover:text-violet-400">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800" data-aos="fade-up" data-aos-duration="500" data-aos-delay="340">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="/Agent-5.jpg" />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug" >Imran Ali</p>
                            <p>Rupganj-Agent</p>
                        </div>

                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                            <a rel="noopener noreferrer" href="#" title="Email" className="text-gray-900 hover:text-violet-400">
                                <MdEmail />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Twitter" className="text-gray-900 hover:text-violet-400">
                                <FaTwitter />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-900 hover:text-violet-400">
                                <FaLinkedin />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="GitHub" className="text-gray-900 hover:text-violet-400">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800" data-aos="fade-up" data-aos-duration="500" data-aos-delay="340">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="/Agent-6.jpg" />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug">Arjun Rahman</p>
                            <p>Basundhara-Agent</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                            <a rel="noopener noreferrer" href="#" title="Email" className="text-gray-900 hover:text-violet-400">
                                <MdEmail />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Twitter" className="text-gray-900 hover:text-violet-400">
                                <FaTwitter />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-900 hover:text-violet-400">
                                <FaLinkedin />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="GitHub" className="text-gray-900 hover:text-violet-400">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Agents;