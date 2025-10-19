import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { onSnapshot, collection, getFirestore, query, orderBy } from "firebase/firestore";
import { firebaseApp } from "../../services/firebaseConfig";

const FeaturedInsights = () => {
  const [posts, setPosts] = useState([]);
  const db = getFirestore(firebaseApp);

  useEffect(() => {
    const q = query(collection(db, "insights"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const insightsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(insightsData);
    });

    return () => unsubscribe();
  }, []);

  if (posts.length === 0) {
    return (
      <div className="bg-white py-10 px-6 sm:px-12 lg:px-20">
        <h1 className="text-6xl font-bold mb-8 text-[#9C6950]">Featured Insights</h1>
        <p className="text-gray-600 text-lg">No insights available yet.</p>
      </div>
    );
  }

  const featured = posts.find((p) => p.isFeatured) || posts[0];
  const recentPosts = posts.filter((p) => p.id !== featured.id);

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
            <p className="text-sm">{featured.time || "Recently posted"}</p>
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
              {featured.title}
            </h2>
            <Link
              to={`/insight/${featured.slug || featured.id}`}
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
            {recentPosts.slice(0, 3).map((post) => (
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
                  <p className="text-sm text-gray-500">{post.time || "Recently posted"}</p>
                  <h4 className="text-md font-semibold text-gray-900 leading-snug">
                    {post.title}
                  </h4>
                  <span className="inline-block mt-2 px-3 py-0.5 text-xs border border-gray-400 rounded-full text-gray-700 w-fit">
                    {post.category || "General"}
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
