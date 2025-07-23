import React, { useState } from "react";
import { Link } from "react-router-dom";
import magzine1 from "../assets/magzine1.jpg";
import magzine2 from "../assets/magzine2.png";
import recent1 from "../assets/recent1.png";
import recent2 from "../assets/recent2.png";

const initialPosts = [
  {
    id: 1,
    slug: "irth-regulatory-updates-jan-2025",
    title: "IRTH Regulatory Updates – Jan 2025 Edition",
    time: "Posted on 21 Feb at 1:08 pm",
    category: "Economy & Policy",
    image: magzine1,
    isFeatured: true,
  },
  {
    id: 2,
    slug: "e-magazine-april-2025",
    title: "E-Magazine April 2025 Edition (Pakistan’s Roadmap to Crypto Legalization)",
    time: "Posted on 23 Apr at 5:48 pm",
    category: "Magzine",
    image: magzine2,
    isFeatured: false,
  },
  {
    id: 3,
    slug: "transforming-fbr",
    title: "Transforming FBR",
    time: "Posted on May 31, 2024",
    category: "Article",
    image: recent1,
    isFeatured: false,
  },
  {
    id: 4,
    slug: "taxes-for-growth-&-prosperity",
    title: "Taxes for growth & prosperity",
    time: "Posted on May 31, 2024",
    category: "Article",
    image: recent2,
    isFeatured: false,
  },
];

const FeaturedInsights = () => {
  const [posts, setPosts] = useState(initialPosts);

  const featured = posts.find((post) => post.isFeatured);
  const recentPosts = posts.filter((post) => !post.isFeatured);

  const handlePostClick = (clickedPostId) => {
    const newPosts = posts.map((post) => {
      if (post.id === clickedPostId) return { ...post, isFeatured: true };
      if (post.id === featured.id) return { ...post, isFeatured: false };
      return post;
    });

    setPosts(newPosts);
  };

  return (
    <div className="bg-white py-10 px-6 sm:px-12 lg:px-20">
      <h1 className="text-6xl font-bold mb-8 text-[#9C6950]">Featured Insights</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Featured Post */}
        <div className="relative rounded-xl overflow-hidden">
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-96 object-cover"
          />
          <div
            className="absolute inset-0 px-8 py-14 flex flex-col justify-end text-white space-y-2"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
          >
            <p className="text-sm">{featured.time}</p>
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
              {featured.title}
            </h2>
            <Link
              to={`/insight/${featured.slug}`}
              className="mt-3 px-4 py-1.5 border border-white rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 w-fit"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
          <div className="space-y-5">
            {recentPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => handlePostClick(post.id)}
                className="flex gap-4 hover:bg-gray-100 p-3 rounded-md border-b pb-4 cursor-pointer transition-all duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-28 h-20 object-cover rounded"
                />
                <div className="flex flex-col justify-between">
                  <p className="text-sm text-gray-500">{post.time}</p>
                  <h4 className="text-md font-semibold text-gray-900 leading-snug">
                    {post.title}
                  </h4>
                  <span className="inline-block mt-2 px-3 py-0.5 text-xs border border-gray-400 rounded-full text-gray-700 w-fit">
                    {post.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInsights;
