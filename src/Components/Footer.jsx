

const Footer = () => {
    return (

<footer className="bg-black text-gray-300 py-8">
    <div className="container mx-auto flex flex-wrap justify-around px-6">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Shahjalal Avenue</p>
            <p>Dhaka, Bangladesh</p>
            <p>info@example.com</p>
            <p>555-123-4567</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <ul>
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <form className="mt-4 flex">
                <input type="email" placeholder="Enter your email" className="w-full bg-gray-800 border border-gray-700 rounded-l-md py-2 px-3 text-sm text-gray-300 focus:outline-none focus:border-gray-500" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-md focus:outline-none focus:bg-blue-600">Subscribe</button>
            </form>
        </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>&copy; 2024 Your Real Estate Company. All rights reserved.</p>
    </div>
</footer>


    );
};

export default Footer;