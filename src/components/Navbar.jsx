import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import serviceImage from "../assets/service.png";
import trainingImage from "../assets/webinar5.jpg";
import insightsImg from "../assets/Insight.jpg";
import image1 from "../assets/team1.jpg";
import image2 from "../assets/team2.jpg";
import image3 from "../assets/team3.jpg";
import image4 from "../assets/team4.jpg";

const data = {
  services: [
    { label: "Advisory", sublinks: ["Business Restructuring", "Cybersecurity & Data Privacy", "Developing Corporate", "Forensic & Investigations Advisory", "Legal Analytics & Transaction Advisory", "Risk Management & Compliance"] },
    { label: "Technology Transformation", sublinks: ["Core Banking Solution Migration Strategy", "Digital Transformation", "Financial & Budget Planning Automation", "Blockchain and Digital Assets", "Business Transformation"] },
    { label: "ESG", sublinks: ["ESG Strategy"] },
    { label: "Tax Advisory", sublinks: ["Local Tax", "International Tax", "Payroll Tax", "Transaction-specific Tax"] },
  ],
  trainings: [
    { label: "Training Needs Analysis" }, { label: "Training Manuals" }, { label: "Customized Training Syllabi" },
    { label: "Practical Workshops" }, { label: "Compliance Training" }, { label: "Ongoing Support" }
  ],
  Insight: [
    { label: "Magazines", sublinks: ["E-Magazine April 2025", "IRTH Regulatory Updates-Jan 2025"] },
    { label: "Articles", sublinks: ["Transforming FBR", "Taxes for growth & prosperity", "Reform agenda for 2024 budget", "NAB & Judiciary", "Inevitable tax reforms", "Fundamental reforms for survival", "Budgets 2024: thinking a fresh", "Budget, taxes & growth", "Budget & tax policy"] }
  ]
};

const descriptions = {
  "Our Team": "Meet our team of dedicated professionals driving impactful change.",
  Insight: "Provide Excellent Customer Service",
  Trainings: "From personalized training plans to hands-on workshops, we offer tools to enhance skills and build expertise.",
  Services: "From compliance to intelligence, we offer reliable, transparent services to help you mitigate risk."
};

const Dropdown = ({ title, items = [], link, image, label, imageGroup, isMobile = false, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!isMobile) {
      const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setIsOpen(false);
          setActiveItem(null);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMobile]);

  const handleClose = () => {
    setIsOpen(false);
    setActiveItem(null);
    if (isMobile && onClose) onClose();
  };

  if (isMobile) {
    return (
      <div className="border-b border-gray-600">
        <div className="flex justify-between items-center py-3 px-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <span className="text-lg font-medium text-white">{title}</span>
          <ChevronDown size={18} className={`transition-transform text-white ${isOpen ? "rotate-180" : ""}`} />
        </div>
        {isOpen && (
          <div className="bg-[#6e4b3a] px-4 pb-4">
            <Link to={link} onClick={handleClose} className="block py-2 text-white hover:text-gray-200">
              View All {title}
            </Link>
            {items.map((item, i) => (
              <div key={i} className="mt-2">
                <div className="flex justify-between items-center cursor-pointer py-1" onClick={() => setActiveItem(activeItem === i ? null : i)}>
                  <span className="text-white font-medium">{item.label}</span>
                  {item.sublinks && <ChevronDown size={16} className={`transition-transform text-white ${activeItem === i ? "rotate-180" : ""}`} />}
                </div>
                {item.sublinks && activeItem === i && (
                  <div className="ml-4 mt-1">
                    {item.sublinks.map((sub, j) => (
                      <Link key={j} to={`/${title.toLowerCase()}/${sub.toLowerCase().replace(/\s+/g, "-")}`} className="block py-1 text-sm text-gray-200 hover:text-white" onClick={handleClose}>
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative h-full" ref={dropdownRef}>
      <button className="cursor-pointer flex items-center gap-1 h-full" onClick={() => setIsOpen(!isOpen)}>
        {label || title}
      </button>
      {isOpen && (
        <div className="fixed left-0 top-20 w-screen bg-[#814d35] shadow-xl z-50">
          <div className="px-4 md:px-6 py-8 mx-auto max-w-6xl">
            {title === "Our Team" ? (
              <div className="flex flex-col md:flex-row gap-16">
                <div className="md:w-1/2 pr-6 border-r border-white flex flex-col justify-center">
                  <h2 className="text-5xl font-bold text-white">{title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-white">{descriptions[title]}</p>
                  <Link to={link} onClick={handleClose} className="mt-6 inline-flex items-center gap-2 px-4 py-4 w-fit rounded-full border border-white bg-[#6e4b3a] text-white text-sm hover:bg-[#5a3d2f] transition">
                    View Full Team <ChevronRight size={20} />
                  </Link>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                  {imageGroup?.map((img, i) => (
                    <img key={i} src={img} alt={`Team ${i + 1}`} className="w-62 h-62 object-cover rounded-full" />
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 pr-6 border-r border-white flex flex-col justify-center">
                  <h2 className="text-5xl font-bold text-white">{title}</h2>
                  <p className="mt-5 text-xl leading-relaxed text-white">{descriptions[title]}</p>
                  <Link to={link} onClick={handleClose} className="mt-6 inline-flex items-center gap-2 px-5 py-4 w-fit rounded-full border border-white bg-[#6e4b3a] text-white text-sm hover:bg-[#5a3d2f] transition">
                    View More <ChevronRight size={18} />
                  </Link>
                </div>
                <div className="md:w-1/3 px-6 flex flex-col justify-center gap-4 border-r border-white">
                  {items.map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center cursor-pointer" onClick={() => setActiveItem(activeItem === i ? null : i)}>
                        <span className="text-lg font-semibold text-white">{item.label}</span>
                        {item.sublinks && <ChevronDown size={18} className={`transition-transform text-white ${activeItem === i ? "rotate-180" : ""}`} />}
                      </div>
                      {item.sublinks && activeItem === i && (
                        <div className="mt-1 ml-4">
                          {item.sublinks.map((sub, j) => (
                            <Link key={j} to={`/${title.toLowerCase()}/${sub.toLowerCase().replace(/\s+/g, "-")}`} className="block px-4 py-2 text-md text-white rounded" onClick={handleClose}>
                              {sub}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="md:w-1/3 pl-6">
                  <img src={image} alt={`${title} Preview`} className="w-full h-121 object-cover rounded-md" />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-white px-4 py-4">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="w-24 sm:w-32 h-auto" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6 ml-10">
            <Link to="/about" className="text-md font-medium text-[#814d35] hover:underline">About Us</Link>
            <Dropdown title="Our Team" label={<span className="flex items-center gap-1 text-[#814d35] hover:underline">Our Team <ChevronDown size={14} /></span>} link="/team" imageGroup={[image3, image4, image1, image2]} />
            <Dropdown title="Services" label={<span className="flex items-center gap-1 text-[#814d35] hover:underline">Services <ChevronDown size={14} /></span>} items={data.services} link="/services" image={serviceImage} />
            <Dropdown title="Trainings" label={<span className="flex items-center gap-1 text-[#814d35] hover:underline">Trainings <ChevronDown size={14} /></span>} items={data.trainings} link="/trainings" image={trainingImage} />
            <Dropdown title="Insight" label={<span className="flex items-center gap-1 text-[#814d35] hover:underline">Insight <ChevronDown size={14} /></span>} items={data.Insight} link="/featured" image={insightsImg} />
            <Link to="/events" className="text-md font-medium text-[#814d35] hover:underline">Events</Link>
          </div>

          {/* Search & Button */}
          <div className="hidden md:flex items-center gap-4 ml-auto">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1.5 w-48 border border-gray-400 rounded-full text-sm focus:outline-none bg-[#F0F0F0]"
            />
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-semibold text-white bg-[#814d35] rounded-full hover:bg-[#6e4b3a] transition"
            >
              Contact & Appointment
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-[#814d35]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <input type="text" placeholder="Search..." className="w-full px-4 py-2 rounded-full border border-gray-500 text-md focus:outline-none bg-[#F0F0F0]" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[120px] bg-[#814d35] z-40 overflow-y-auto">
          <div className="px-4 py-4">
            <Link to="/about" className="block py-3 px-4 text-lg text-white hover:bg-[#6e4b3a] rounded" onClick={closeMobileMenu}>About Us</Link>
            <Dropdown title="Our Team" items={[]} link="/team" isMobile={true} onClose={closeMobileMenu} />
            <Dropdown title="Services" items={data.services} link="/services" isMobile={true} onClose={closeMobileMenu} />
            <Dropdown title="Trainings" items={data.trainings} link="/trainings" isMobile={true} onClose={closeMobileMenu} />
            <Dropdown title="Insight" items={data.Insight} link="/featured" isMobile={true} onClose={closeMobileMenu} />
            <Link to="/events" className="block py-3 px-4 text-lg text-white hover:bg-[#6e4b3a] rounded" onClick={closeMobileMenu}>Events</Link>
            <div className="mt-6 pt-6 border-t border-gray-600 space-y-3">
              <Link to="/contact" className="block py-3 px-4 text-lg text-white hover:bg-[#6e4b3a] rounded" onClick={closeMobileMenu}>Contact & Appointment</Link>
              <Link to="/login" className="block py-3 px-4 text-lg text-white bg-[#6e4b3a] hover:bg-[#5a3d2f] rounded transition" onClick={closeMobileMenu}>Login</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
