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
    setActiveItem(activeItem === index ? null : index);
  };

  const handleClose = () => {
    setIsOpen(false);
    setActiveItem(null);
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
        <div className="fixed left-0 w-screen bg-[#814d35] shadow-xl z-50 overflow-x-hidden">
          <div className="px-4 md:px-6 py-8 mx-auto max-w-6xl">
            {plainTitle === "Our Team" ? (
              <div className="flex flex-col md:flex-row gap-16">
                <div className="md:w-1/2 pr-6 border-r border-white flex flex-col justify-center">
                  <h2 className="text-5xl font-bold">{plainTitle}</h2>
                  <p className="mt-4 text-lg leading-relaxed">
                    Meet our team of dedicated professionals driving impactful change.
                  </p>
                  <Link
                    to={link}
                    onClick={handleClose}
                    className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-4 w-fit rounded-full border border-white bg-[#6e4b3a] text-white text-sm hover:bg-[#5a3d2f] transition duration-200"
                  >
                    View Full Team <ChevronRight size={20} />
                  </Link>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                  {imageGroup?.map((imgSrc, idx) => (
                    <img
                      key={idx}
                      src={imgSrc}
                      alt={`Team member ${idx + 1}`}
                      className="w-62 h-62 object-cover rounded-full"
                    />
                  ))}
                </div>
              </div>
            ) : ["Insights", "Services", "Trainings"].includes(plainTitle) ? (
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 pr-6 border-r border-white flex flex-col justify-center">
                  <h2 className="text-5xl font-bold">{plainTitle}</h2>
                  <p className="mt-5 text-xl leading-relaxed">
                    {plainTitle === "Insights" && "Provide Excellent Customer Service"}
                    {plainTitle === "Trainings" &&
                      "From personalized training plans to hands-on workshops, we offer tools to enhance skills and build expertise."}
                    {plainTitle === "Services" &&
                      "From compliance to intelligence, we offer reliable, transparent services to help you mitigate risk."}
                  </p>
                  <Link
                    to={link}
                    onClick={handleClose}
                    className="mt-6 inline-flex items-center gap-2 px-5 py-4 w-fit rounded-full border border-white bg-[#6e4b3a] text-white text-sm hover:bg-[#5a3d2f] transition"
                  >
                    View More <ChevronRight size={18} />
                  </Link>
                </div>

                <div className="md:w-1/3 px-6 flex flex-col justify-center gap-4 border-r border-white">
                  {items.map((item, index) => (
                    <div key={index} className="relative">
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => handleItemClick(index)}
                      >
                        <span className="text-lg font-semibold">{item.label}</span>
                        {item.sublinks && (
                          <ChevronDown
                            size={18}
                            className={`transition-transform ${
                              activeItem === index ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </div>
                      {item.sublinks && activeItem === index && (
                        <div className="mt-1 ml-4">
                          {item.sublinks.map((sublink, subIndex) => (
                            <Link
                              key={subIndex}
                              to={`/${plainTitle.toLowerCase()}/${sublink
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              className="block px-4 py-2 text-md text-white rounded"
                              onClick={handleClose}
                            >
                              {sublink}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="md:w-1/3 pl-6">
                  <img
                    src={image}
                    alt={`${plainTitle} Preview`}
                    className="w-full h-121 object-cover rounded-md"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdowns;
