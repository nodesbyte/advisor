import featuredImage from '../assets/featured.png'; // Large left image
import recent1 from '../assets/recent1.png';         // Top right
import recent2 from '../assets/recent2.png';         // Bottom right

const FeaturedInsights = () => {
    return (
        <section className="bg-white py-12 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {/* Left: Featured */}
                <div className="md:col-span-2">
                    <h2 className="text-6xl font-bold text-[#814d35] mb-6 font-lisu">Featured insights</h2>
                    <div className="relative rounded-xl overflow-hidden">
                        <img src={featuredImage} alt="Featured" className="w-full h-[400px] object-cover" />
                        <div className="absolute top-4 left-4 text-white text-sm">Posted on 23 Apr at 5:48 pm</div>
                        <div className="absolute bottom-40 left-4 text-white">
                            <h3 className="text-3xl font-bold">
                                E-Magazine April 2025 Edition <br />
                                (Pakistan’s Roadmap to Crypto Legalization)
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Right: Recents */}
                <div>
                    <h3 className="text-3xl font-bold text-[#814d35] mb-6">Recents Post</h3>

                    {/* Post 1 */}
                    <div className="mb-8">
                        <img src={recent1} alt="Post 1" className="w-full h-32 object-cover rounded-md mb-2" />
                        <div className="text-sm text-gray-600 mb-1">Posted on May 31, 2024</div>
                        <h4 className="text-md font-bold text-[#814d35]">Transforming FBR</h4>
                        <p className="text-xs text-gray-700">Huzaima Bukhari, Dr. Ikramul Haq & Abdul Rauf Shakoori</p>
                    </div>

                    {/* Divider */}
                    <hr className="my-4" />

                    {/* Post 2 */}
                    <div>
                        <img src={recent2} alt="Post 2" className="w-full h-32 object-cover rounded-md mb-2" />
                        <div className="text-sm text-gray-600 mb-1">Posted on May 31, 2024</div>
                        <h4 className="text-md font-bold text-[#814d35]">Taxes for growth & prosperity</h4>
                        <p className="text-xs text-gray-700">Dr. Ikramul Haq and Abdul Rauf Shakoori</p>
                    </div>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 bg-[#814d35] text-white py-6 px-8 rounded-xl flex justify-between items-center">
                <h4 className="text-xl">Explore the latest insights</h4>
                <button className="bg-white text-[#814d35] px-4 py-2 text-sm font-semibold rounded-full">
                    View More
                </button>
            </div>
        </section>
    );
};

export default FeaturedInsights;
