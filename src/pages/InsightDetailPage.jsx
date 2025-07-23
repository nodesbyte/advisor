import React from "react";
import { useParams } from "react-router-dom";
import magzine1 from "../assets/magzine1.jpg";
import magzine2 from "../assets/magzine2.png";
import pdfCryptoMagazine from "../assets/E-Magazine-April-2025-Edition-Pakistans-Roadmap-to-Crypto-Legalization.pdf";
import pdfFinCrimMagazine from "../assets/IRTH-Fin-Crim-Feb-25-V2.pdf";

import recent1 from "../assets/recent1.png";
import recent2 from "../assets/recent2.png";
import recent3 from "../assets/recent3.jpg";
import recent4 from "../assets/recent4.jpg";
import recent5 from "../assets/recent5.jpg";
import recent6 from "../assets/recent6.jpg";
import recent7 from "../assets/recent7.jpg";
import recent8 from "../assets/recent8.jpg";
import recent9 from "../assets/recent9.jpg";

// Import article contents
import {
  transformingFBRContent,
  taxesForGrowthandProsperity,
  reformAgendaFor2024Budget,
  NABandJudiciary,
  inevitableTaxReforms,
  fundamentalReformsForSurvival,
  budgets2024thinkingAfresh,
  budgetTaxesandGrowth,
  budgetandTaxPolicy,
} from "../data/articleContents"; // Make sure path is correct

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
    content: transformingFBRContent,
  },
  {
    id: 4,
    slug: "taxes-for-growth-&-prosperity",
    title: "Taxes for growth & prosperity",
    time: "Posted on May 31, 2024",
    category: "Article",
    image: recent2,
    content: taxesForGrowthandProsperity,
  },
  {
    id: 203,
    slug: "reform-agenda-for-2024-budget",
    title: "Reform agenda for 2024 budget",
    time: "Posted on Apr 10, 2024",
    category: "Article",
    image: recent3,
    content: reformAgendaFor2024Budget,
  },
  {
    id: 204,
    slug: "nab-&-judiciary",
    title: "NAB & Judiciary",
    time: "Posted on Apr 12, 2024",
    category: "Article",
    image: recent4,
    content: NABandJudiciary,
  },
  {
    id: 205,
    slug: "inevitable-tax-reforms",
    title: "Inevitable tax reforms",
    time: "Posted on Apr 14, 2024",
    category: "Article",
    image: recent5,
    content: inevitableTaxReforms,
  },
  {
    id: 206,
    slug: "fundamental-reforms-for-survival",
    title: "Fundamental reforms for survival",
    time: "Posted on Apr 16, 2024",
    category: "Article",
    image: recent6,
    content: fundamentalReformsForSurvival,
  },
  {
    id: 207,
    slug: "budgets-2024:-thinking-a-fresh",
    title: "Budgets 2024: thinking a fresh",
    time: "Posted on Apr 18, 2024",
    category: "Article",
    image: recent7,
    content: budgets2024thinkingAfresh,
  },
  {
    id: 208,
    slug: "budget,-taxes-&-growth",
    title: "Budget, taxes & growth",
    time: "Posted on Apr 20, 2024",
    category: "Article",
    image: recent8,
    content: budgetTaxesandGrowth,
  },
  {
    id: 209,
    slug: "budget-&-tax-policy",
    title: "Budget & tax policy",
    time: "Posted on Apr 22, 2024",
    category: "Article",
    image: recent9,
    content: budgetandTaxPolicy,
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
      <div className="text-black text-base leading-relaxed text-justify w-full">
        <div className="w-full">
          <p className="mb-4 whitespace-pre-line">{post.content}</p>

          {/* Conditional PDF buttons */}
          {post.slug === "e-magazine-april-2025" && (
            <div className="flex flex-col gap-3 mt-4">
              <a
                href={pdfCryptoMagazine}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#814d35] text-white px-6 py-2 rounded-md hover:bg-[#6e3e2c] transition"
              >
                View / Download Crypto PDF
              </a>
              <a
                href={pdfFinCrimMagazine}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#814d35] text-white px-6 py-2 rounded-md hover:bg-[#6e3e2c] transition"
              >
                View / Download Fin-Crim PDF
              </a>
            </div>
          )}

          {post.slug === "irth-regulatory-updates-jan-2025" && (
            <a
              href={pdfFinCrimMagazine}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#814d35] text-white px-6 py-2 rounded-md hover:bg-[#6e3e2c] transition mt-4"
            >
              View / Download Fin-Crim PDF
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsightDetailPage;
