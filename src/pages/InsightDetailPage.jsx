import React from "react";
import { useParams } from "react-router-dom";
import magzine1 from "../assets/magzine1.jpg";
import magzine2 from "../assets/magzine2.png";
import recent1 from "../assets/recent1.png";
import recent2 from "../assets/recent2.png";
import recent3 from "../assets/recent3.jpg";
import recent4 from "../assets/recent4.jpg";
import recent5 from "../assets/recent5.jpg";
import recent6 from "../assets/recent6.jpg";
import recent7 from "../assets/recent7.jpg";
import recent8 from "../assets/recent8.jpg";
import recent9 from "../assets/recent9.jpg";

const posts = [
  {
    id: 1,
    slug: "irth-regulatory-updates-jan-2025",
    title: "IRTH Regulatory Updates – Jan 2025 Edition",
    time: "Posted on 21 Feb at 1:08 pm",
    category: "Economy & Policy",
    image: magzine1,
    content:
      "Download PDF: IRTH Regulatory Updates – Jan 2025 Edition. In this edition, we cover regulatory changes impacting the economy and industry. Stay updated on the latest reforms.",
  },
  {
    id: 2,
    slug: "e-magazine-april-2025",
    title:
      "E-Magazine April 2025 Edition (Pakistan’s Roadmap to Crypto Legalization)",
    time: "Posted on 23 Apr at 5:48 pm",
    category: "Magzine",
    image: magzine2,
    content:
      "Download PDF: Pakistan’s Roadmap to Crypto Legalization. This issue highlights key legal developments and policy shifts surrounding the adoption of cryptocurrency in Pakistan.",
  },
  {
    id: 3,
    slug: "transforming-fbr",
    title: "Transforming FBR",
    time: "Posted on May 31, 2024",
    category: "Article",
    image: recent1,
    content:
      "In the light of dynamic shifts in business and advancements in technology, Transforming FBR outlines a modern strategy for more transparent and efficient tax systems.",
  },
  {
    id: 4,
    slug: "taxes-for-growth-&-prosperity",
    title: "Taxes for growth & prosperity",
    time: "Posted on May 31, 2024",
    category: "Article",
    image: recent2,
    content:
      "This article dives deep into the importance of tax reforms and how fair taxation can lead to sustainable economic development and national prosperity.",
  },
  {
    id: 203,
    slug: "reform-agenda-for-2024-budget",
    title: "Reform agenda for 2024 budget",
    time: "Posted on Apr 10, 2024",
    category: "Article",
    image: recent3,
    content:
      "This article explores the key elements of reform required in Pakistan’s 2024 federal budget and proposes a practical path forward.",
  },
  {
    id: 204,
    slug: "nab-&-judiciary",
    title: "NAB & Judiciary",
    time: "Posted on Apr 12, 2024",
    category: "Article",
    image: recent4,
    content:
      "A critical overview of the role of the National Accountability Bureau and the judiciary in Pakistan's institutional reform landscape.",
  },
  {
    id: 205,
    slug: "inevitable-tax-reforms",
    title: "Inevitable tax reforms",
    time: "Posted on Apr 14, 2024",
    category: "Article",
    image: recent5,
    content:
      "This article outlines why tax reforms in Pakistan are no longer optional and what steps need to be taken urgently.",
  },
  {
    id: 206,
    slug: "fundamental-reforms-for-survival",
    title: "Fundamental reforms for survival",
    time: "Posted on Apr 16, 2024",
    category: "Article",
    image: recent6,
    content:
      "Discusses the foundational reforms required to ensure Pakistan’s economic survival in the face of global uncertainty.",
  },
  {
    id: 207,
    slug: "budgets-2024:-thinking-a-fresh",
    title: "Budgets 2024: thinking a fresh",
    time: "Posted on Apr 18, 2024",
    category: "Article",
    image: recent7,
    content:
      "An insightful take on how the 2024 budget can break from the past and offer a fresh economic direction.",
  },
  {
    id: 208,
    slug: "budget,-taxes-&-growth",
    title: "Budget, taxes & growth",
    time: "Posted on Apr 20, 2024",
    category: "Article",
    image: recent8,
    content:
      "An analytical approach to understanding how budget decisions impact tax collection and economic growth.",
  },
  {
    id: 209,
    slug: "budget-&-tax-policy",
    title: "Budget & tax policy",
    time: "Posted on Apr 22, 2024",
    category: "Article",
    image: recent9,
    content:
      "This piece highlights the critical link between budget planning and effective tax policy for long-term economic health.",
  },
];

const InsightDetailPage = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <h2 className="text-xl font-bold text-red-600">
          Insight not found. Please check the URL or go back.
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-white py-10 px-6 sm:px-12 lg:px-20 min-h-screen">
      {/* Banner Image */}
      <div className="relative rounded-xl overflow-hidden mb-10">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover"
        />
        <div
          className="absolute inset-0 px-8 py-14 flex flex-col justify-end text-white space-y-2"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
        >
          <p className="text-sm">{post.time}</p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            {post.title}
          </h1>
          <span className="inline-block mt-2 px-4 py-1 text-xs bg-white text-black rounded-full w-fit font-medium">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto text-gray-800 text-base leading-relaxed">
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default InsightDetailPage;
