import { Link } from "react-router-dom";
import {
    FaLeaf, FaShieldAlt, FaSearch, FaLock, FaUserShield, FaBug,
    FaGavel, FaCogs, FaRegClipboard, FaChalkboardTeacher,
} from 'react-icons/fa';

const services = [
    {
        name: "ESG Strategy and Implementation Services",
        icon: <FaLeaf size={24} className="text-[#814d35]" />,
    },
    {
        name: "AML–CFT and Sanctions Compliance",
        icon: <FaShieldAlt size={24} className="text-[#814d35]" />,
    },
    {
        name: "Investigative and Business Intelligence Services",
        icon: <FaSearch size={24} className="text-[#814d35]" />,
    },
    {
        name: "Cyber Security & Information Security Services",
        icon: <FaLock size={24} className="text-[#814d35]" />,
    },
    {
        name: "GDPR Implementation",
        icon: <FaUserShield size={24} className="text-[#814d35]" />,
    },
    {
        name: "Fraud Detection and Preventive Services",
        icon: <FaBug size={24} className="text-[#814d35]" />,
    },
    {
        name: "Corporate Governance",
        icon: <FaGavel size={24} className="text-[#814d35]" />,
    },
    {
        name: "Systems Modeling and Evaluations",
        icon: <FaCogs size={24} className="text-[#814d35]" />,
    },
    {
        name: "Strategic Assurance and Policies Development",
        icon: <FaRegClipboard size={24} className="text-[#814d35]" />,
    },
    {
        name: "Training and Workshops",
        icon: <FaChalkboardTeacher size={24} className="text-[#814d35]" />,
    },
];

const slugify = (str) =>
    str.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

const ServicesSection = () => {
    return (
        <section className="bg-white py-12 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#814d35] mb-10 font-lisu">
                    Provide Excellent Customer Service
                </h2>

                <div className="grid md:grid-cols-2 gap-6 text-left">
                    {services.map((service, index) => (
                        <Link
                            to={`/services/${slugify(service.name)}`}
                            key={index}
                            className="flex items-center justify-between w-full p-4 border-b hover:bg-gray-50 transition-all"
                        >
                            <div className="flex items-center gap-3">
                                {service.icon}
                                <span className="text-[#814d35] font-medium">
                                    {service.name}
                                </span>
                            </div>
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

export default ServicesSection;
