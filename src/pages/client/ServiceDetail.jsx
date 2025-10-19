import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../services/firestore";
import { collection, onSnapshot } from "firebase/firestore";

const ServiceDetail = () => {
  const { slug } = useParams();
  const [matchedService, setMatchedService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const servicesCollection = collection(firestore, "services");

    // Real-time listener
    const unsubscribe = onSnapshot(
      servicesCollection,
      (snapshot) => {
        let foundService = null;

        snapshot.docs.forEach((docSnap) => {
          const data = docSnap.data();
          const sublink = data.sublinks?.find((s) => s.slug === slug);
          if (sublink && !foundService) {
            foundService = { ...sublink, category: data.label };
          }
        });

        setMatchedService(foundService);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching service detail:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe(); // cleanup on unmount
  }, [slug]);

  if (loading) {
    return (
      <div className="p-10 text-center text-xl text-[#814d35]">
        Loading service details...
      </div>
    );
  }

  if (!matchedService) {
    return (
      <div className="p-10 text-center text-xl text-red-500">
        Service not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">
        {/* Header Section */}
        <div className="bg-[#814d35] px-8 py-6">
          <h1 className="text-3xl font-bold text-white mb-1">
            {matchedService.title}
          </h1>
          <p className="text-sm text-orange-100">
            Category: {matchedService.category}
          </p>
        </div>

        {/* Details Section */}
        <div className="px-8 py-6 text-gray-800 text-lg leading-relaxed whitespace-pre-line">
          <p>{matchedService.details}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
