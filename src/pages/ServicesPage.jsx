import React from "react";
import { Link } from "react-router-dom";
import service1 from "../assets/services/aml-cft.png";
import service2 from "../assets/services/business-intel.png";
import service3 from "../assets/services/esg-glass.png";

const services = [
  {
    title: "ESG Strategy and Implementation Services",
    description:
      "ESG (Environmental, Social, and Governance) strategy and implementation services are designed to help companies develop and execute plans to incorporate ESG factors into their business operations.",
    image: service1,
  },
  {
    title: "AML & CFT Compliance",
    description:
      "Helping institutions comply with Anti-Money Laundering and Counter Financing of Terrorism regulations with expert consulting and monitoring.",
    image: service2,
  },
  {
    title: "Investigative and Business Intelligence Services",
    description:
      "Detailed corporate investigations and business intelligence to support strategic decision-making.",
    image: service3,
  },
  // Add more if needed...
];

// Helper function to slugify title for route URLs
const slugify = (str) =>
  str.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link
            key={index}
            to={`/services/${slugify(service.title)}`}
            className="transform hover:scale-[1.03] transition-all duration-300 rounded-xl shadow-md hover:shadow-xl bg-white overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-4">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
