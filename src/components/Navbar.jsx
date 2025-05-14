import logo from "../assets/logo.png";
import Dropdowns from "./DropdownMenu";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import serviceImage from "../assets/service.png";
import trainingImage from "../assets/training.png";

const services = [
  "ESG Advisory",
  "AML & Sanctions Compliance",
  "Investigations & Intelligence",
  "Regulatory Examinations",
  "Risk & Compliance",
];

const trainings = [
  "Training Needs Analysis",
  "Training Manuals",
  "Custom Syllabi",
  "Training Modules",
  "Training Plans",
  "Practical Workshops",
  "Compliance Training",
  "Ongoing Support",
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Section */}
      <div className="bg-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img src={logo} alt="Logo" className="w-28 h-auto" />
          <div className="flex-1 flex justify-center">
            <input
              type="text"
              placeholder="Search by services, trainings, and more..."
              className="w-full max-w-lg px-4 py-2 rounded-full border border-gray-300 text-sm focus:outline-none"
            />
          </div>
          <div className="w-28" />
          <div className="flex items-center space-x-4">
            <Link to="/contact" className="text-sm font-semibold text-[#814d35]">
              Contact & Appointment
            </Link>
            <Link
              to="/"
              className="bg-[#814d35] text-white px-4 py-2 rounded-full text-sm font-semibold"
            >
              Get Started
            </Link>
        </div>
      </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#814d35] border-b">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-center space-x-8 text-sm font-medium text-white">
          <Link to="#">Our Team</Link>

          {/* Services Dropdown */}
          <Dropdowns
            title="Services"
            label={
              <span className="flex items-center gap-1">
                Services <ChevronDown size={14} />
              </span>
            }
            items={services}
            link="/services"
            image={serviceImage}
          />

          {/* Trainings Dropdown */}
          <Dropdowns
            title="Trainings"
            label={
              <span className="flex items-center gap-1">
                Trainings <ChevronDown size={14} />
              </span>
            }
            items={trainings}
            link="/trainings"
            image={trainingImage}
          />

          <Link to="/featured">Insights</Link>
          <Link to="#">About Us</Link>
          <Link to="#">Support</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
