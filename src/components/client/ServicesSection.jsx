import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBalanceScale,
  FaShieldAlt,
  FaGavel,
  FaChartLine,
  FaUserSecret,
  FaPuzzlePiece,
} from "react-icons/fa";
import { getServices } from "../../services/firestore"; // ✅ use existing backend service

const iconMap = [
  <FaPuzzlePiece size={22} className="text-[#814d35]" />,
  <FaShieldAlt size={22} className="text-[#814d35]" />,
  <FaBalanceScale size={22} className="text-[#814d35]" />,
  <FaUserSecret size={22} className="text-[#814d35]" />,
  <FaGavel size={22} className="text-[#814d35]" />,
  <FaChartLine size={22} className="text-[#814d35]" />,
];

const AdvisoryServicesSection = () => {
  const [advisoryServices, setAdvisoryServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allServices = await getServices();
        // find the advisory service
        const advisory = allServices.find(
          (s) => s.label.toLowerCase() === "advisory"
        );
        if (advisory && advisory.sublinks) {
          setAdvisoryServices(advisory.sublinks);
        }
      } catch (error) {
        console.error("Error fetching advisory services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#814d35] mb-10 font-lisu">
          Our Expert Advisory Services
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          {advisoryServices.map((service, index) => (
            <Link
              to={`/services/${service.slug}`}
              key={index}
              className="flex items-center justify-between w-full p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all hover:bg-[#fef6f4]"
            >
              <div className="flex items-center gap-4">
                {iconMap[index] || <FaPuzzlePiece size={22} className="text-[#814d35]" />}
                <span className="text-[#814d35] font-semibold text-md">
                  {service.title}
                </span>
              </div>
              <span className="text-[#814d35] font-bold text-xl">→</span>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/services"
            className="border border-[#814d35] text-[#814d35] font-medium px-6 py-2 rounded-full hover:bg-[#814d35] hover:text-white transition"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryServicesSection;
