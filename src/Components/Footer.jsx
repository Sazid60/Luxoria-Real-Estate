import { Link } from "react-router-dom";


const Footer = () => {
    return (

        <footer className="bg-slate-950 text-gray-300 py-8">
            <div className="container mx-auto flex flex-wrap justify-around px-6">
                <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <p>Shahjalal Avenue</p>
                    <p>Dhaka, Bangladesh</p>
                    <p>info@Luxoria.com</p>
                    <p>555-123-4567</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-4">Social Media</h3>
                    <ul>
                        <li><a href="#" className="hover:text-white">Facebook</a></li>
                        <li><a href="#" className="hover:text-white">Twitter</a></li>
                        <li><a href="#" className="hover:text-white">Instagram</a></li>
                        <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4">
                    <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                    <p>Subscribe us for the latest updates.</p>
                    <form className="mt-4 flex">
                        <input type="email" placeholder="Enter your email" className="w-full  border-gray-700 rounded-l-md py-2 px-3 text-sm text-gray-300 focus:outline-none focus:border-gray-500" />
                        <Link to={"/blogs"}>                       
                         <button type="submit" className="bg-[#E1B453] hover:bg-slate-500 text-white font-semibold py-2 px-4 rounded-r-md">Subscribe</button>
                         </Link>
                    </form>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                <p>&copy; 2024 Luxoria. All rights reserved.</p>
            </div>
        </footer>


    );
};

export default Footer;