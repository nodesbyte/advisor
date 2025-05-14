import logo from "../assets/logo.png";
import {
    FaFacebookF,
    FaEnvelope,
    FaGlobe,
    FaTelegramPlane,
    FaInstagram,
    FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#b99685] text-black px-6 py-8">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* Logo */}
                <img src={logo} alt="Logo" className="h-12 mb-4" />

                {/* Social Icons */}
                <div className="flex space-x-4 mb-4">
                    <FaFacebookF className="bg-white text-black rounded-full p-1 w-7 h-7 shadow" />
                    <FaEnvelope className="bg-white text-black rounded-full p-1 w-7 h-7 shadow" />
                    <FaGlobe className="bg-white text-black rounded-full p-1 w-7 h-7 shadow" />
                    <FaTelegramPlane className="bg-white text-black rounded-full p-1 w-7 h-7 shadow" />
                    <FaInstagram className="bg-white text-black rounded-full p-1 w-7 h-7 shadow" />
                    <FaPinterestP className="bg-white text-black rounded-full p-1 w-7 h-7 shadow" />
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center space-x-6 mb-4">
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Features</a>
                    <a href="#" className="hover:underline">Pricing</a>
                    <a href="#" className="hover:underline">Gallery</a>
                    <a href="#" className="hover:underline">Team</a>
                </div>

                {/* Contact Button */}
                <div className="mb-4">
                    <button className="border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition-all">
                        Contact Us
                    </button>
                </div>

                {/* Bottom Line */}
                <div className="border-t border-black w-full mt-6 pt-4 text-center text-sm">
                    © 2021 All Rights Reserved
                </div>
            </div>
        </footer>
    );
}
