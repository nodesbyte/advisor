import { Link } from "react-router-dom";
import {
    FaBalanceScale,
    FaShieldAlt,
    FaGavel,
    FaChartLine,
    FaUserSecret,
    FaFileSignature,
    FaPuzzlePiece
} from "react-icons/fa";

const advisoryServices = [
    {
        name: "Business Restructuring",
        icon: <FaPuzzlePiece size={22} className="text-[#814d35]" />,
        slug: "business-restructuring",
    },
    {
        name: "Cybersecurity & Data Privacy",
        icon: <FaShieldAlt size={22} className="text-[#814d35]" />,
        slug: "cybersecurity-data-privacy",
    },
    {
        name: "Developing Corporate Governance Framework",
        icon: <FaBalanceScale size={22} className="text-[#814d35]" />,
        slug: "developing-corporate",
    },
    {
        name: "Forensic & Investigations Advisory",
        icon: <FaUserSecret size={22} className="text-[#814d35]" />,
        slug: "forensic-investigations-advisory",
    },
    {
        name: "Legal Analytics & Transaction Advisory",
        icon: <FaGavel size={22} className="text-[#814d35]" />,
        slug: "legal-analytics-transaction-advisory",
    },
    {
        name: "Risk Management & Compliance",
        icon: <FaChartLine size={22} className="text-[#814d35]" />,
        slug: "risk-management-regulatory-compliance",
    },
];

const AdvisoryServicesSection = () => {
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
                                {service.icon}
                                <span className="text-[#814d35] font-semibold text-md">
                                    {service.name}
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
