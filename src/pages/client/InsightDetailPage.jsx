// src/pages/client/InsightDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInsights } from "../../services/insights";

const InsightDetailPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const allInsights = await getInsights();
        const foundPost = allInsights.find((p) => p.slug === slug);
        setPost(foundPost || null);
      } catch (error) {
        console.error("Error fetching insight:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <p className="text-lg font-medium">Loading Insight...</p>
      </div>
    );
  }

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
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
        )}
        <div
          className="absolute inset-0 px-8 py-14 flex flex-col justify-end text-white space-y-2"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
        >
          <p className="text-sm">
            {post.time || (post.createdAt?.seconds ? new Date(post.createdAt.seconds * 1000).toLocaleDateString() : "")}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            {post.title}
          </h1>
          <span className="inline-block mt-2 px-4 py-1 text-xs bg-white text-black rounded-full w-fit font-medium">
            {post.category || post.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="text-black text-base leading-relaxed text-justify w-full">
        <div className="w-full">
          <p className="mb-4 whitespace-pre-line">{post.content}</p>

          {/* PDFs from Supabase */}
          {post.pdfs && post.pdfs.length > 0 && (
            <div className="flex flex-col gap-3 mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Attached Documents</h3>
              {post.pdfs.map((pdfUrl, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#814d35] text-white px-6 py-2 rounded-md hover:bg-[#6e3e2c] transition"
                  >
                    📄 View PDF {index + 1}
                  </a>
                  <a
                    href={pdfUrl}
                    download
                    className="inline-block bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition"
                  >
                    ⬇ Download
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* External Link */}
          {post.link && (
            <div className="mt-6 p-4 bg-gray-100 rounded-md">
              <p className="text-sm text-gray-700 mb-2">External Reference:</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#814d35] hover:underline break-all"
              >
                {post.link}
              </a>
            </div>
          )}

          {/* Reference/Authors */}
          {post.reference && (
            <div className="mt-4 p-3 bg-gray-50 rounded-md border-l-4 border-[#814d35]">
              <p className="text-sm text-gray-600">
                <strong>Reference:</strong> {post.reference}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsightDetailPage;