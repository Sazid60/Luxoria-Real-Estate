import { Helmet } from "react-helmet-async";


const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contacts</title>
            </Helmet>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-4 mx-auto lg:mt-7 rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
                <div className="flex flex-col justify-between" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="320">
                    <div className="space-y-2 text-center">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div className="">Share Your Feedback With Us</div>
                    </div>
                    <div className="w-full">
                        <img src="/contact.png" alt="" className="p-6" />
                    </div>
                </div>
                <form noValidate="" className="space-y-3" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="320">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded border-2 border-black" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded border-2 border-black" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded border-2 border-black"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded-lg btn  bg-[#E1B453] hover:bg-slate-500 text-white">Send Message</button>
                </form>
            </div>
            <div className="w-full"  data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl text-center" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="320">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 text-center" data-aos="zoom-in" data-aos-duration="500" >Explore common inquiries about our real estate services.</p>
                    <div className="space-y-4">
                        <details className="w-full rounded-lg border border-gray-300" >
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-400 cursor-pointer">How do I find properties listed on your website?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4">You can browse our listings directly on our website. Simply use the search bar or filters to narrow down your preferences and find properties that match your criteria.</p>
                        </details>
                        <details className="w-full rounded-lg border border-gray-300" >
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-400 cursor-pointer">Are there virtual tours available for properties?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4">Yes, many of our property listings include virtual tours. You can explore the interior and exterior of the properties from the comfort of your own home.</p>
                        </details>
                        <details className="w-full rounded-lg border border-gray-300" >
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-400 cursor-pointer">What financing options are available for purchasing a property?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4">We work with various lenders to offer financing options tailored to your needs. Whether you're a first-time buyer or an experienced investor, we can help you find the right loan for your property purchase.</p>
                        </details>
                        <details className="w-full rounded-lg border border-gray-300">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-400 cursor-pointer">How can I schedule a viewing of a property?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4">To schedule a viewing of a property, simply contact our team and let us know which listing you're interested in. We'll work with you to arrange a convenient time for a viewing.</p>
                        </details>
                        <details className="w-full rounded-lg border border-gray-300" >
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-400 cursor-pointer">Do you provide assistance for selling my property?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4">Yes, we offer comprehensive services for selling your property. From staging and marketing to negotiating offers, our experienced team will guide you through the selling process from start to finish.</p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;