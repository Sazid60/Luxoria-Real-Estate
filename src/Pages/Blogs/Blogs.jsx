
const Blogs = () => {
    return (
        <div>
            <h1 className="text-center text-4xl font-semibold mt-3">Today's Blogs</h1>
            <ul className="p-4 lg:p-8">
                <li className="mb-2">
                    <article className="border rounded-xl border-black border-opacity-30">
                        <a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:shadow-xl">
                            <h3 className=" ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9 text-xl mb-2">Top 5 Tips for First-Time Homebuyers</h3>
                            <time dateTime="2024-04-08" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2">April 8, 2024</time>
                            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0" style={{ fontStyle: 'italic' }}>Buying your first home can be intimidating. In this article, we share our top 5 tips to help first-time homebuyers navigate the process with confidence. From understanding your budget to researching neighborhoods and securing financing, these tips will empower you to make informed decisions and find the perfect home for your needs.</p>
                        </a>
                    </article>
                </li>
                <li className="mb-2">
                    <article className="border rounded-xl border-black border-opacity-30">
                        <a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:shadow-xl">
                            <h3 className="mb-2 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9 text-xl">The Impact of Remote Work on Housing Trends</h3>
                            <time dateTime="2024-04-07" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2">April 7, 2024</time>
                            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 " style={{ fontStyle: 'italic' }}>As remote work becomes increasingly common, it's reshaping housing trends. This article explores how the rise of remote work is influencing where people choose to live, the types of properties they're seeking, and the amenities they prioritize. Whether you're a real estate agent or investor, understanding these shifts can help you capitalize on emerging opportunities in the market.</p>
                        </a>
                    </article>
                </li>
                <li className="mb-2">
                    <article className="border rounded-xl border-black border-opacity-30">
                        <a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:shadow-xl">
                            <h3 className="mb-2 text-xl ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">The Future of Sustainable Real Estate Development</h3>
                            <time dateTime="2024-04-06" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 ">April 6, 2024</time>
                            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 " style={{ fontStyle: 'italic' }}>With increasing awareness of environmental issues, sustainable real estate development is gaining momentum. This article discusses the growing demand for eco-friendly properties, innovative green building technologies, and the benefits of incorporating sustainability into real estate projects. Whether you're a developer, architect, or investor, embracing sustainability can enhance property value and contribute to a more resilient and environmentally conscious future.</p>
                        </a>
                    </article>
                </li>
                <li className="mb-2">
                    <article className="border rounded-xl border-black border-opacity-30">
                        <a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:shadow-xl">
                            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Navigating Rental Market Challenges in Urban Centers</h3>
                            <time dateTime="2024-04-05" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 ">April 5, 2024</time>
                            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 " style={{ fontStyle: 'italic' }}>Rental markets in urban centers pose unique challenges for both landlords and tenants. This article examines the factors contributing to rental market volatility, such as fluctuating demand, regulatory changes, and economic conditions. By understanding these challenges and implementing effective strategies, landlords can maximize rental income, while tenants can secure affordable and quality housing options in competitive urban environments.</p>
                        </a>
                    </article>
                </li>
            </ul>
        </div>

    );
};

export default Blogs;