import React from "react";
import { Link } from "react-router-dom";
import service1 from "../assets/services/aml-cft.png";
import service2 from "../assets/services/business-intel.png";
import service3 from "../assets/services/esg-glass.png";
import service4 from "../assets/services/service 4.jpg";
import service5 from "../assets/services/service 5.jpg";
import service6 from "../assets/services/service 6.jpg";
import service7 from "../assets/services/service 7.jpg";
import service8 from "../assets/services/service 8.jpg";
import service9 from "../assets/services/service 9.jpg";
import service10 from "../assets/services/service 10.jpg";
import service11 from "../assets/services/service 11.jpg";
import service12 from "../assets/services/service 12.jpg";
import service13 from "../assets/services/service 13.jpg";
import service14 from "../assets/services/service 14.jpg";
import service15 from "../assets/services/service 15.jpg";
import service16 from "../assets/services/service 16.jpg";
import service17 from "../assets/services/service 17.jpg";
import service18 from "../assets/services/service 18.jpg";
import service19 from "../assets/services/service 19.jpg";
import service20 from "../assets/services/service 20.jpg";
import service21 from "../assets/services/service 21.jpg";
import service22 from "../assets/services/service 22.jpg";
import service23 from "../assets/services/service 231.jpg";
import service24 from "../assets/services/service 241.jpg";
import service25 from "../assets/services/service 251.jpg";
import service26 from "../assets/services/service 26.jpg";


const services = [
  {
    title: "ESG Strategy and Implementation Services",
    description:
      "ESG (Environmental, Social, and Governance) strategy and implementation services are designed to help companies develop and execute plans to incorporate ESG factors into their business operations.",
    image: service1,
  },
  {
    title: "AML–CFT and Sanctions Compliance",
    description:
      "AML–CFT and Sanctions Compliance services consist of robust risk assessment and monitoring mechanisms to help institutions align with regulatory frameworks on anti-money laundering and counter-financing of terrorism. We also provide training and reporting support to financial institutions and international sanctions regimes.",
    image: service2,
  },
  {
    title: "Investigative and Business Intelligence Services",
    description:
      "Investigations and business intelligence services to enhance transparency and reduce risks in corporate business operations.",
    image: service3,
  },
  {
    title: "Independent and Pre-Regulatory Examinations",
    description:
      "Independent and Pre-Regulatory Examinations are important tools for organizations to improve or evaluate compliance with various regulatory requirements.",
    image: service4,
  },
  {
    title: "Risk, Compliance, and Controls",
    description:
      "Risk, Compliance, and Controls are a governance framework for effective organizational risk assessment and enforcement.",
    image: service5,
  },
  {
    title: "Strategic Assurance and Policies Development",
    description:
      "Strategic Assurance and Policies Development involves formulating risk-aware strategies and internal policies to build a strong governance framework for organizations.",
    image: service6,
  },
  {
    title: "Testing",
    description:
      "The testing phase is an important part of the verification process for IT systems and applications. Testing helps to ensure that applications are properly configured and compliant with the required specifications and quality standards.",
    image: service7,
  },
  {
    title: "Systems Modeling and Evaluations",
    description:
      "Modeling and verification are the best way for organizations to analyze their operations through a data-driven approach to assess interdependencies and complex systems.",
    image: service8,
  },
  {
    title: "Cyber Security & Information Security Services",
    description:
      "Cybersecurity and information security services include threat intelligence, vulnerability assessment, and risk mitigation strategies to guard organizations from internal and external threats as cybercrime continues to grow.",
    image: service9,
  },
  {
    title: "GDPR Implementation",
    description:
      "The General Data Protection Regulation (GDPR) is designed to protect the privacy of EU citizens. GDPR implementation includes aligning systems and processes to ensure compliance and avoid significant penalties and revenue loss.",
    image: service10,
  },
  {
    title: "Fraud Detection and Preventive Services",
    description:
      "Fraud is still a core risk for institutions of all sizes and industries. Robust fraud detection and prevention mechanisms help organizations detect fraud early, prevent reputational, and legal consequences.",
    image: service11,
  },
  {
    title: "Corporate Governance",
    description:
      "Corporate governance is the system of rules, practices, and processes by which a company is directed and controlled to ensure accountability, fairness, and transparency.",
    image: service12,
  },
  {
    title: "Operational and Organizational Restructuring",
    description:
      "Operational and organizational restructuring involves streamlining existing operations to enhance business processes and improve overall performance.",
    image: service13,
  },
  {
    title: "Restructuring and Privatization",
    description:
      "Restructuring and privatization are holistic solutions for state-owned enterprises seeking to change ownership models, optimize their operations, and drive growth.",
    image: service14,
  },
  {
    title: "Mergers and Acquisitions",
    description:
      "Mergers and acquisitions services help companies combine their operations to achieve strategic objectives.",
    image: service15,
  },
  {
    title: "Energy Resource and Industrial",
    description:
      "The energy and industrial sectors are critical drivers of global economic growth and development.",
    image: service16,
  },
  {
    title: "Block Chain and Digital Assets",
    description:
      "Blockchain technology and digital assets are rapidly expanding the way businesses record and transact, improving the security and reliability of their financial assets and data.",
    image: service17,
  },
  {
    title: "E-commerce",
    description:
      "E-commerce is the buying and selling of goods and services online through web-based digital channels.",
    image: service18,
  },
  {
    title: "Diversity, Equity & Inclusion",
    description:
      "Diversity, equity, and inclusion (DEI) programs support organizational commitment to recognizing, accepting, and valuing diverse backgrounds that drive innovation and business value.",
    image: service19,
  },
  {
    title: "Employment and Workforce Evaluations",
    description:
      "Employment and workforce evaluations focus on assessing the effectiveness and efficiency of an organization’s workforce to ensure they adhere to performance policies and procedures.",
    image: service20,
  },
  {
    title: "Marketing Strategies",
    description:
      "Marketing strategies are essential for promoting organizational objectives and building brand equity. We create strategies that support customer experience and generate revenue.",
    image: service21,
  },
  {
    title: "Training and Workshops",
    description:
      "Trainings and workshops are essential for capacity building, professional development, and performance enhancement.",
    image: service22,
  },
  {
    title: "Financial Advisory Services",
    description:
      "At IRTH, we provide comprehensive financial advisory services to meet the unique needs of clients across sectors.",
    image: service23,
  },
  {
    title: "Aircraft Leasing & Financing Solutions by IRTH",
    description:
      "We offer end-to-end aircraft leasing and financing solutions to meet the unique demands of clients in the aviation industry.",
    image: service24,
  },
  {
    title: "Our Legal Services",
    description:
      "At IRTH Aviation Advisory, we specialize in providing top-tier legal services tailored to the unique needs of the aviation industry.",
    image: service25,
  },
  {
    title: "Taxation",
    description:
      "Partnering with IRTH was a game-changer for our aviation business. Their legal expertise and industry knowledge helped us navigate complex transactions successfully.",
    image: service26,
  },
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
