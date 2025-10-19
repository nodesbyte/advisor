import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../../services/firestore";
import { collection, onSnapshot } from "firebase/firestore";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const servicesCollection = collection(firestore, "services");

    // Listen for real-time updates
    const unsubscribe = onSnapshot(
      servicesCollection,
      (snapshot) => {
        const updatedServices = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServices(updatedServices);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching services:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f9f4f2]">
        <p className="text-[#814d35] text-xl">Loading services...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f4f2] px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center text-[#814d35]">Our Services</h1>

      {services.map((category) => (
        <div key={category.label} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-[#814d35] border-b-2 border-[#814d35] pb-2">
            {category.label}
          </h2>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {category.sublinks.map((service) => (
              <Link
                to={`/services/${service.slug}`}
                key={service.slug}
                className="group relative overflow-hidden rounded-2xl p-6 bg-white hover:bg-[#814d35] border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-[#814d35] group-hover:text-white transition duration-300">
                    {service.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-[#814d35] group-hover:bg-white flex items-center justify-center transition duration-300">
                    <svg
                      className="w-4 h-4 text-white group-hover:text-[#814d35] transition duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-500 group-hover:text-gray-200 transition duration-300">
                  Learn more about {service.title.toLowerCase()}.
                </p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesPage;
