import { useState } from 'react';
import featuredImage from '../assets/featured.png';
import recent1 from '../assets/recent1.png';
import recent2 from '../assets/recent2.png';

const postsData = [
    {
        image: recent1,
        date: 'May 31, 2024',
        title: 'Transforming FBR',
        authors: 'Huzaima Bukhari, Dr. Ikramul Haq & Abdul Rauf Shakoori'
    },
    {
        image: recent2,
        date: 'May 31, 2024',
        title: 'Taxes for growth & prosperity',
        authors: 'Dr. Ikramul Haq and Abdul Rauf Shakoori'
    }
];

const FeaturedInsights = ({ isInteractive = false }) => {
    const [featuredPost, setFeaturedPost] = useState({
        image: featuredImage,
        date: '23 Apr at 5:48 pm',
        title: 'E-Magazine April 2025 Edition (Pakistan’s Roadmap to Crypto Legalization)'
    });

    const [recentPosts, setRecentPosts] = useState(postsData);

    const handleRecentClick = (index) => {
        if (!isInteractive) return;

        // Swap featured and clicked recent post
        const selectedPost = recentPosts[index];

        const newFeatured = {
            image: selectedPost.image,
            date: selectedPost.date,
            title: selectedPost.title
        };

        const updatedRecent = [...recentPosts];
        updatedRecent[index] = {
            image: featuredPost.image,
            date: featuredPost.date,
            title: featuredPost.title,
            authors: updatedRecent[index].authors // retain authors
        };

        setFeaturedPost(newFeatured);
        setRecentPosts(updatedRecent);
    };

    return (
        <section className="bg-white py-12 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {/* Featured */}
                <div className="md:col-span-2">
                    <h2 className="text-6xl font-bold text-[#814d35] mb-6 font-lisu">Featured insights</h2>
                    <div className="relative rounded-xl overflow-hidden">
                        <img src={featuredPost.image} alt="Featured" className="w-full h-[400px] object-cover" />
                        <div className="absolute top-4 left-4 text-white text-sm">Posted on {featuredPost.date}</div>
                        <div className="absolute bottom-40 left-4 text-white">
                            <h3 className="text-3xl font-bold">{featuredPost.title}</h3>
                        </div>
                    </div>
                </div>

                {/* Recents */}
                <div>
                    <h3 className="text-3xl font-bold text-[#814d35] mb-6">Recents Post</h3>

                    {recentPosts.map((post, index) => (
                        <div key={index} className="mb-8 cursor-pointer" onClick={() => handleRecentClick(index)}>
                            <img src={post.image} alt={`Post ${index + 1}`} className="w-full h-32 object-cover rounded-md mb-2" />
                            <div className="text-sm text-gray-600 mb-1">Posted on {post.date}</div>
                            <h4 className="text-md font-bold text-[#814d35]">{post.title}</h4>
                            <p className="text-xs text-gray-700">{post.authors}</p>
                            {index !== recentPosts.length - 1 && <hr className="my-4" />}
                        </div>
                    ))}
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
