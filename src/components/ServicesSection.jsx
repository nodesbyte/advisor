import { useState } from 'react';
import {
    FaLeaf,          // ESG
    FaShieldAlt,     // AML-CFT
    FaSearch,        // Investigations
    FaLock,          // Cybersecurity
    FaUserShield,    // GDPR
    FaBug,           // Fraud
    FaGavel,         // Governance
    FaCogs,          // Systems Modeling
    FaRegClipboard,  // Policy Development
    FaChalkboardTeacher, // Training
} from 'react-icons/fa';

const services = [
    {
        name: "ESG Strategy and Implementation",
        description:
            "We help organizations integrate Environmental, Social, and Governance concerns into their operations for responsible and sustainable business practices.",
        icon: <FaLeaf size={24} className="text-[#814d35]" />,
    },
    {
        name: "AML-CFT and Sanctions Compliance",
        description:
            "Ensures compliance with anti-money laundering regulations and international sanctions to prevent financial crime.",
        icon: <FaShieldAlt size={24} className="text-[#814d35]" />,
    },
    {
        name: "Business Intelligence & Investigations",
        description:
            "Offers insights and data-driven investigations to support business decisions and mitigate risk.",
        icon: <FaSearch size={24} className="text-[#814d35]" />,
    },
    {
        name: "Cyber Security & Information Protection",
        description:
            "Protects your organization from cyber threats and ensures data integrity and security compliance.",
        icon: <FaLock size={24} className="text-[#814d35]" />,
    },
    {
        name: "GDPR Implementation",
        description:
            "Guides businesses in aligning with data privacy laws to safeguard customer data and build trust.",
        icon: <FaUserShield size={24} className="text-[#814d35]" />,
    },
    {
        name: "Fraud Detection & Prevention",
        description:
            "Minimizes risk by identifying and mitigating fraudulent activities across systems and processes.",
        icon: <FaBug size={24} className="text-[#814d35]" />,
    },
    {
        name: "Corporate Governance",
        description:
            "Helps companies establish strong governance structures that ensure accountability and compliance.",
        icon: <FaGavel size={24} className="text-[#814d35]" />,
    },
    {
        name: "Systems Modeling and Evaluations",
        description:
            "Analyzes systems and workflows to improve operational efficiency and performance.",
        icon: <FaCogs size={24} className="text-[#814d35]" />,
    },
    {
        name: "Strategic Policy Development",
        description:
            "Supports the creation of effective policies to strengthen organizational strategy and culture.",
        icon: <FaRegClipboard size={24} className="text-[#814d35]" />,
    },
    {
        name: "Training and Workshops",
        description:
            "Empowers teams through interactive learning sessions focused on compliance, leadership, and technical skills.",
        icon: <FaChalkboardTeacher size={24} className="text-[#814d35]" />,
    },
];

const ServicesSection = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <section className="bg-white py-12 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#814d35] mb-10 font-lisu">
                    Provide Excellent Customer Service
                </h2>

                <div className="grid md:grid-cols-2 gap-6 text-left">
                    {services.map((service, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedService(service)}
                            className={`flex items-center justify-between w-full p-4 border-b hover:bg-gray-50 transition-all ${
                                selectedService?.name === service.name ? 'bg-gray-100 border-[#814d35]' : ''
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                {service.icon}
                                <span className="text-[#814d35] font-medium">{service.name}</span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Selected service content */}
                {selectedService && (
                    <div className="mt-10 p-6 border rounded-lg bg-gray-50 max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold text-[#814d35] mb-2">{selectedService.name}</h3>
                        <p className="text-gray-700">{selectedService.description}</p>
                    </div>
                )}

                <div className="mt-12">
                    <button className="border border-[#814d35] text-[#814d35] font-medium px-6 py-2 rounded-full hover:bg-[#814d35] hover:text-white transition">
                        View All Services →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
