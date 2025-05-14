import { useState, useRef, useEffect } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Dropdowns = ({ title, items = [], link, image, label, imageGroup }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const dropdownRef = useRef(null);
    const plainTitle = typeof title === "string" ? title : "Section";

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setActiveItem(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleItemClick = (index) => {
        if (activeItem === index) {
            setActiveItem(null);
        } else {
            setActiveItem(index);
        }
    };

    return (
        <div className="relative h-full" ref={dropdownRef}>
            <button
                className="cursor-pointer flex items-center gap-1 h-full"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {label || title}
            </button>

            {isOpen && (
                <div className="absolute left-0 w-screen bg-[#c2a48f] text-white shadow-xl z-50 border-t border-black">
                    <div className="max-w-7xl mx-auto px-4">
                        {plainTitle === "Our Team" ? (
                            <div className="flex py-6">
                                {/* Left Column */}
                                <div className="w-1/2 pr-6 border-r border-gray-700">
                                    <h2 className="text-2xl font-bold">{plainTitle}</h2>
                                    <p className="mt-4 text-sm leading-relaxed">
                                        Meet our team of dedicated professionals driving impactful change.
                                    </p>
                                    <Link
                                        to={link}
                                        className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white bg-[#6e4b3a] text-white text-sm hover:bg-[#5a3d2f] transition"
                                    >
                                        View Full Team <ChevronRight size={16} />
                                    </Link>
                                </div>

                                {/* Right Column (2x2 Image Grid) */}
                                <div className="w-1/2 pl-6 grid grid-cols-2 gap-4">
                                    {imageGroup?.map((imgSrc, idx) => (
                                        <img
                                            key={idx}
                                            src={imgSrc}
                                            alt={`Team member ${idx + 1}`}
                                            className="w-full h-32 object-cover rounded-lg"
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : plainTitle === "Insights" ? (
                            <div className="flex py-6">
                                {/* Left Column */}
                                <div className="w-1/3 pr-6 border-r border-gray-700">
                                    <h2 className="text-2xl font-bold">{plainTitle}</h2>
                                    <p className="mt-4 text-sm leading-relaxed">
                                        Provide Excellent Customer Service
                                    </p>
                                    <Link
                                        to={link}
                                        className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white bg-[#6e4b3a] text-white text-sm hover:bg-[#5a3d2f] transition"
                                    >
                                        View More <ChevronRight size={16} />
                                    </Link>
                                </div>

                                {/* Center Column - Insights specific */}
                                <div className="w-1/3 px-6 flex flex-col gap-4 text-white border-r border-gray-700">
                                    {items.map((item, index) => (
                                        <div key={index} className="relative">
                                            <div
                                                className="flex justify-between items-center cursor-pointer"
                                                onClick={() => handleItemClick(index)}
                                            >
                                                <span className="text-sm">{item.label}</span>
                                                {item.sublinks && <ChevronDown size={14} className={`transition-transform ${activeItem === index ? 'rotate-180' : ''}`} />}
                                            </div>

                                            {/* Sublinks dropdown - removed hover effect */}
                                            {item.sublinks && activeItem === index && (
                                                <div className="mt-1 ml-4 w-full">
                                                    {item.sublinks.map((sublink, subIndex) => (
                                                        <Link
                                                            key={subIndex}
                                                            to={`/${item.label.toLowerCase()}/${sublink.toLowerCase().replace(/\s+/g, '-')}`}
                                                            className="block px-4 py-2 text-sm text-white rounded"
                                                        >
                                                            {sublink}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Right Column - Image */}
                                <div className="w-1/3 pl-6">
                                    <img
                                        src={image}
                                        alt={`${plainTitle} Preview`}
                                        className="w-full h-64 object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="flex py-6">
                                {/* Left Column */}
                                <div className="w-1/3 pr-6 border-r border-gray-700">
                                    <h2 className="text-2xl font-bold">{plainTitle}</h2>
                                    <p className="mt-4 text-sm leading-relaxed">
                                        {plainTitle === "Trainings"
                                            ? "From personalized training plans to hands-on workshops, we offer tools to enhance skills and build expertise."
                                            : "From compliance to intelligence, we offer reliable, transparent services to help you mitigate risk."}
                                    </p>
                                    <Link
                                        to={link}
                                        className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white bg-[#6e4b3a] text-white text-sm hover:bg-[#5a3d2f] transition"
                                    >
                                        View More <ChevronRight size={16} />
                                    </Link>
                                </div>

                                {/* Center Column */}
                                <div className="w-1/3 px-6 flex flex-col gap-4 text-white border-r border-gray-700">
                                    {items.map((item, index) => (
                                        <Link
                                            key={index}
                                            to={`${link}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="text-sm hover:underline"
                                        >
                                            {item}
                                        </Link>
                                    ))}
                                </div>

                                {/* Right Column */}
                                <div className="w-1/3 pl-6">
                                    <img
                                        src={image}
                                        alt={`${plainTitle} Preview`}
                                        className="w-full h-64 object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdowns;