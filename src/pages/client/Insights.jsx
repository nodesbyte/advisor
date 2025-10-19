import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { firestore } from "../../services/firestore"; // make sure this exports firestore
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const Insights = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [magazines, setMagazines] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const q = query(collection(firestore, "insights"), orderBy("createdAt", "desc")); // optional ordering
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const allInsights = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const mags = allInsights.filter(
          (i) => i.category?.toLowerCase() === "magzine"
        );
        const arts = allInsights.filter(
          (i) => i.category?.toLowerCase() === "article"
        );

        setMagazines(mags);
        setArticles(arts);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching insights:", error);
        setLoading(false);
      }
    );

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  const renderCards = (items) =>
    items.map((item) => (
      <motion.div
        key={item.id}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer"
        onClick={() => navigate(`/insight/${item.slug}`)}
      >
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-60 object-cover"
          />
          <span className="absolute top-3 left-3 bg-black text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            {item.category?.toLowerCase() === "magzine"
              ? "MAGAZINE"
              : "ARTICLE"}
          </span>
        </div>
        <div className="p-5 space-y-2">
          <h3 className="text-lg font-bold text-black leading-snug">
            {item.title}
          </h3>
          {item.time && <p className="text-xs text-gray-500">{item.time}</p>}
          {item.content && (
            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
              {item.content}
            </p>
          )}
        </div>
      </motion.div>
    ));

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#eae6e1]">
        <p className="text-gray-600">Loading insights...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#eae6e1] px-6 md:px-12 lg:px-20 py-16">
      {magazines.length > 0 && (
        <section className="mb-16">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-[#70441a]">
              Featured Magazines
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderCards(magazines)}
          </div>
        </section>
      )}

      {articles.length > 0 && (
        <section>
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-[#70441a]">
              Featured Articles
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderCards(articles)}
          </div>
        </section>
      )}
    </div>
  );
};

export default Insights;
