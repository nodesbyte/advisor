import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import magzine1 from "../../assets/magzine1.jpg";
import magzine2 from "../../assets/magzine2.png";
import recent1 from "../../assets/recent1.png";
import recent2 from "../../assets/recent2.png";
import recent3 from "../../assets/recent3.jpg";
import recent4 from "../../assets/recent4.jpg";
import recent5 from "../../assets/recent5.jpg";
import recent6 from "../../assets/recent6.jpg";
import recent7 from "../../assets/recent7.jpg";
import recent8 from "../../assets/recent8.jpg";
import recent9 from "../../assets/recent9.jpg";

const magazines = [
  {
    id: 101,
    slug: "irth-regulatory-updates-jan-2025",
    image: magzine1,
    label: "E-MAGAZINE",
    title: "IRTH Regulatory Updates – Jan 2025 Edition",
    description: "Download PDF: IRTH Regulatory Updates – Jan 2025 Edition",
  },
  {
    id: 102,
    slug: "e-magazine-april-2025",
    image: magzine2,
    label: "E-MAGAZINE",
    title: "E-Magazine April 2025 Edition",
    description: "Download PDF: E-Magazine April 2025 Edition (Pakistan’s Roadmap to Crypto Legalization)",
  },
];

const articles = [
  {
    id: 201,
    slug: "transforming-fbr",
    image: recent1,
    label: "ARTICLE",
    title: "Transforming FBR",
    description: "Huzaima Bukhari, Dr. Ikramul Haq & Abdul Rauf Shakoori In the light of dynamic shifts in business and advancements in...",
  },
  {
    id: 202,
    slug: "taxes-for-growth-&-prosperity",
    image: recent2,
    label: "ARTICLE",
    title: "Taxes for growth & prosperity",
  },
  {
    id: 203,
    slug: "reform-agenda-for-2024-budget",
    image: recent3,
    label: "ARTICLE",
    title: "Reform agenda for 2024 budget",
  },
  {
    id: 204,
    slug: "nab-&-judiciary",
    image: recent4,
    label: "ARTICLE",
    title: "NAB & Judiciary",
  },
  {
    id: 205,
    slug: "inevitable-tax-reforms",
    image: recent5,
    label: "ARTICLE",
    title: "Inevitable tax reforms",
  },
  {
    id: 206,
    slug: "fundamental-reforms-for-survival",
    image: recent6,
    label: "ARTICLE",
    title: "Fundamental reforms for survival",
  },
  {
    id: 207,
    slug: "budgets-2024:-thinking-a-fresh",
    image: recent7,
    label: "ARTICLE",
    title: "Budgets 2024: thinking a fresh",
  },
  {
    id: 208,
    slug: "budget,-taxes-&-growth",
    image: recent8,
    label: "ARTICLE",
    title: "Budget, taxes & growth",
  },
  {
    id: 209,
    slug: "budget-&-tax-policy",
    image: recent9,
    label: "ARTICLE",
    title: "Budget & tax policy",
  },
];

const InsightsPage = () => {
  const navigate = useNavigate();

  const renderCards = (items) =>
    items.map((item) => (
      <motion.div
        key={item.id}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer"
        onClick={() => navigate(`/insight/${item.slug}`)}
      >
        {/* Image with overlay and label */}
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-60 object-cover"
          />
          <span className="absolute top-3 left-3 bg-[#000000] text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            {item.label === "E-MAGAZINE" ? "MAGAZINES" : "ARTICLES"}
          </span>
          {item.titleOverlay && (
            <div className="absolute bottom-4 left-4 right-4 text-white font-bold text-base leading-snug drop-shadow-md">
              {item.titleOverlay}
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="p-5 space-y-2">
          <h3 className="text-lg font-bold text-black leading-snug">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-sm text-gray-600 mt-2">
              {item.description}
            </p>
          )}
        </div>
      </motion.div>
    ));

  return (
    <div className="min-h-screen bg-[#eae6e1] px-6 md:px-12 lg:px-20 py-16">
      {/* Magazines Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-[#70441a]">Featured Magazines</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderCards(magazines)}
        </div>
      </section>

      {/* Articles Section */}
      <section>
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-[#70441a]">Featured Articles</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderCards(articles)}
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;
