import logo from "../assets/logo.png";
import Dropdowns from "./DropdownMenu";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import serviceImage from "../assets/service.png";
import trainingImage from "../assets/training.png";
import insightsImg from "../assets/insight.jpg";
import image1 from "../assets/team1.jpg";
import image2 from "../assets/team2.jpg";
import image3 from "../assets/team1.jpg";
import image4 from "../assets/team2.jpg";

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
const insights = [
  {
    label: "Magazines",
    sublinks: ["Crypto", "Finance", "Technology"],
  },
  {
    label: "Newspapers",
    // sublinks: ["Daily News", "Global Times", "Economic Daily"],
  },
  {
    label: "Articles",
    sublinks: ["Startups", "Interviews", "Case Studies"],
  },
];


const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Section */}
      <div className="bg-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-28 h-auto" />
          </Link>
          <div className="flex-1 flex justify-center px-4">
            <input
              type="text"
              placeholder="Search by services, trainings, and more..."
              className="w-full max-w-lg px-4 py-2 rounded-full border border-gray-300 text-sm focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/contact" className="text-sm font-semibold text-[#814d35] hover:underline">
              Contact & Appointment
            </Link>
            <Link
              to="/get-started"
              className="bg-[#814d35] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#6e3f2a] transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#814d35] border-b">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-center space-x-8 text-sm font-medium text-white">
          <Link to="/about" className="hover:underline">About Us</Link>
          <Dropdowns
            title="Our Team"
            label={
              <span className="flex items-center gap-1 hover:underline">
                Our Team <ChevronDown size={14} />
              </span>
            }
            items={[]}
            link="/team"
            imageGroup={[image1, image2, image3, image4]}
          />

          <Dropdowns
            title="Services"
            label={
              <span className="flex items-center gap-1 hover:underline">
                Services <ChevronDown size={14} />
              </span>
            }
            items={services}
            link="/services"
            image={serviceImage}
          />

          <Dropdowns
            title="Trainings"
            label={
              <span className="flex items-center gap-1 hover:underline">
                Trainings <ChevronDown size={14} />
              </span>
            }
            items={trainings}
            link="/trainings"
            image={trainingImage}
          />

          <Dropdowns
            title="Insights"
            label={
              <span className="flex items-center gap-1 hover:underline">
                Insights <ChevronDown size={14} />
              </span>
            }
            items={insights}
            link="/featured"
            image={insightsImg}
          />
          <Link to="/support" className="hover:underline">Support</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;