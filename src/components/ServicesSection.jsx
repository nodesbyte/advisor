import { useState } from 'react';
import { FaPodcast } from 'react-icons/fa'; // Matching the icon shown

const services = [
    "ESG strategy & Implementation",
    "ESG strategy & Implementation",
    "ESG strategy & Implementation",
    "AML-CFT and Sanctions Compliance",
    "ESG strategy & Implementation",
    "ESG strategy & Implementation",
    "ESG strategy & Implementation",
    "ESG strategy & Implementation",
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
                                selectedService === service ? 'bg-gray-100 border-[#814d35]' : ''
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                <FaPodcast className="text-[#814d35]" size={24} />
                                <span className="text-[#814d35] font-medium">{service}</span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Selected service content */}
                {selectedService && (
                    <div className="mt-10 p-6 border rounded-lg bg-gray-50 max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold text-[#814d35] mb-2">{selectedService}</h3>
                        <p className="text-gray-700">
                            Detailed information about <strong>{selectedService}</strong> goes here. This area can
                            include service descriptions, benefits, or links to more content.
                        </p>
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
