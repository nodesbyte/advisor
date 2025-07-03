import logo from "../assets/logo.png";
import {
    FaFacebookF,
    FaEnvelope,
    FaGlobe,
    FaTelegramPlane,
    FaInstagram,
    FaPinterestP,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#f5f5f5] text-gray-800 px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Logo & Social */}
                <div className="flex flex-col items-center md:items-start">
                    <Link to="/"><img src={logo} alt="Logo" className="h-14 mb-4" /></Link>
                    <p className="text-sm mb-4 opacity-70">Connecting You Globally</p>
                    <div className="flex gap-3">
                        {[FaFacebookF, FaEnvelope, FaGlobe, FaTelegramPlane, FaInstagram, FaPinterestP].map((Icon, i) => (
                            <Icon
                                key={i}
                                className="w-9 h-9 p-2 bg-white text-gray-700 rounded-full hover:bg-gray-200 transition-all shadow"
                            />
                        ))}
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col justify-center space-y-2">
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <Link to="/about" className="text-sm hover:text-[#BC9A87] transition-colors">
                        About
                    </Link>
                    <Link to="/team" className="text-sm hover:text-[#BC9A87] transition-colors">
                        Team
                    </Link>
                    <Link to="/services" className="text-sm hover:text-[#BC9A87] transition-colors">
                        Services
                    </Link>
                    <Link to="/trainings" className="text-sm hover:text-[#BC9A87] transition-colors">
                        Trainings
                    </Link>
                    <Link to="/featured" className="text-sm hover:text-[#BC9A87] transition-colors">
                        Insights
                    </Link>
                    <Link to="/events" className="text-sm hover:text-[#BC9A87] transition-colors">
                        Events
                    </Link>
                </div>

                {/* Contact + CTA */}
                <div className="flex flex-col items-center md:items-end justify-between">
                    <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
                    <p className="text-sm mb-4 opacity-70">
                        Have questions? We’d love to hear from you.
                    </p>
                    <Link to="/contact">
                        <button className="bg-[#8d471f] text-white px-6 py-2 rounded-full border border-transparent hover:bg-[#a37f6e] transition-all">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="mt-10 border-t border-gray-300 pt-4 text-sm text-center text-gray-600">
                © {new Date().getFullYear()} All Rights Reserved | Built with ❤️
            </div>
        </footer>
    );
}
