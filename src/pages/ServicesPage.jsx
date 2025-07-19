import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    label: "Advisory",
    sublinks: [
      { title: "Business Restructuring", slug: "business-restructuring" },
      { title: "Cybersecurity & Data Privacy", slug: "cybersecurity-data-privacy" },
      { title: "Developing Corporate", slug: "developing-corporate" },
      { title: "Forensic & Investigations Advisory", slug: "forensic-investigations-advisory" },
      { title: "Legal Analytics & Transaction Advisory", slug: "legal-analytics-transaction-advisory" },
      { title: "Risk Management & Regulatory Compliance", slug: "risk-management-regulatory-compliance" }
    ]
  },
  {
    label: "Technology Transformation",
    sublinks: [
      { title: "Core Banking Solution Migration Strategy", slug: "core-banking-solution-migration-strategy" },
      { title: "Digital Transformation", slug: "digital-transformation" },
      { title: "Financial Analytics Services", slug: "financial-analytics-services" },
      { title: "Financial & Budget Planning Automation", slug: "financial-budget-planning-automation" },
      { title: "Blockchain & Digital Assets", slug: "blockchain-digital-assets" },
      { title: "Business Transformation", slug: "business-transformation" },
      { title: "Business Process Outsourcing (BPO) Services", slug: "business-process-outsourcing-bpo-services" }
    ]
  },
  {
    label: "ESG Strategy",
    sublinks: [
      { title: "ESG Strategy Development Services", slug: "esg-strategy-development-services" }
    ]
  },
  {
    label: "Tax Advisory",
    sublinks: [
      { title: "Local & International Tax Advisory", slug: "local-international-tax-advisory" },
      { title: "Payroll Tax Compliance", slug: "payroll-tax-compliance" },
      { title: "Transaction-specific Tax Advisory", slug: "transaction-specific-tax-advisory" }
    ]
  },
  {
    label: "Training & Capacity Building",
    sublinks: [
      { title: "Customized Corporate Training", slug: "customized-corporate-training" },
      { title: "Professional Certification Courses", slug: "professional-certification-courses" },
      { title: "Workshops, Bootcamps & Seminars", slug: "workshops-bootcamps-seminars" },
      { title: "Train-the-Trainer Programs", slug: "train-the-trainer-programs" }
    ]
  }
];

const ServicesPage = () => {
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
