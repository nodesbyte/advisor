import React, { useState, useEffect } from "react";
import postsData from "../data";

export default function FeaturedInsights({ isInteractive = false, selectedPost }) {
  const [mainPost, setMainPost] = useState(postsData[0]);
  const [sidePosts, setSidePosts] = useState(postsData.slice(1, 5));

  useEffect(() => {
    if (selectedPost) {
      // Find the post that matches the selected title
      const foundPost = postsData.find(post => 
        post.title.toLowerCase().replace(/\s+/g, "-") === selectedPost.toLowerCase().replace(/\s+/g, "-")
      );
      
      if (foundPost) {
        setMainPost(foundPost);
        // Update side posts to exclude the selected one
        setSidePosts(postsData.filter(post => post.title !== foundPost.title).slice(0, 4));
      }
    }
  }, [selectedPost]);

  const handlePostClick = (index) => {
    if (!isInteractive) return;

    const clickedPost = sidePosts[index];
    const updatedSidePosts = [...sidePosts];
    updatedSidePosts[index] = mainPost;

    setMainPost(clickedPost);
    setSidePosts(updatedSidePosts);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white">
      {/* Left - Featured Post */}
      <div className="flex flex-col col-span-1 md:col-span-2 gap-6">
        <h1 className="text-4xl font-bold top-6">Featured Insights</h1> 
        <div className="col-span-1 md:col-span-2 relative rounded-lg overflow-hidden shadow-md">
          <img
            src={mainPost.image}
            alt={mainPost.title}
            className="w-full h-98 object-cover"
          />
          <div className="absolute inset-0 bg-[#0000007c] bg-opacity-50 p-6 flex flex-col justify-end text-white">
            <p className="text-sm mb-1">{mainPost.time}</p>
            <h2 className="text-3xl font-bold">{mainPost.title}</h2>
            {mainPost.description && (
              <p className="text-lg font-semibold mt-1 line-clamp-3">{mainPost.description}</p>
            )}
          </div>
        </div>
      </div>

      {/* Right - Recent Posts */}
      <div className="col-span-1">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Recent Posts</h3>
        <div className="space-y-4">
          {sidePosts.map((post, index) => (
            <div
              key={index}
              className={`flex gap-3 border-b pb-3 transition ${
                isInteractive ? "cursor-pointer hover:bg-gray-100" : ""
              }`}
              onClick={() => handlePostClick(index)}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-24 h-20 object-cover rounded-md"
              />
              <div className="flex flex-col justify-between">
                <p className="text-xs text-gray-500">{post.time}</p>
                <h4 className="text-md font-semibold text-gray-800">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-600">{post.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}