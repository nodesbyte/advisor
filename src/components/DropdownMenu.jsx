import { useState, useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Dropdowns = ({ title, items, link, image }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const plainTitle = typeof title === "string" ? title : "Section";

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className="cursor-pointer flex items-center gap-1"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {title}
            </button>

            {isOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[900px] bg-[#c2a48f] text-white shadow-xl flex z-50 border border-black">
                    {/* Left Column */}
                    <div className="w-1/3 p-6 border-r border-gray-700">
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
                    <div className="w-1/3 p-6 flex flex-col gap-4 text-white">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center hover:underline cursor-pointer"
                            >
                                <span className="text-sm">{item}</span>
                                <ChevronRight size={16} />
                            </div>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="w-1/3">
                        <img
                            src={image}
                            alt={`${plainTitle} Preview`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdowns;
