// src/pages/About.jsx
import React from "react";
import AboutSection from "../components/AboutSection";
import whatWeDoImage from "../assets/what-we-do.jpg"; // your image path
// Add images for each item (replace with your actual paths)
import expertiseImg from "../assets/expertise.jpg";
import tailoredSolutionsImg from "../assets/tailored-solutions.jpg";
import resultsDrivenImg from "../assets/results-driven.jpg";
import innovationImg from "../assets/innovation.jpg";
import partnershipImg from "../assets/partnership.jpg";

const chooseUsItems = [
    {
        title: "Expertise",
        description:
            "Our team comprises seasoned professionals with extensive experience and deep expertise across diverse industries and regulatory domains.",
        image: expertiseImg,
    },
    {
        title: "Tailored Solutions",
        description:
            "We understand that every client is unique. We customize our advisory services to address specific challenges, objectives, and regulatory requirements.",
        image: tailoredSolutionsImg,
    },
    {
        title: "Results-Driven Approach",
        description:
            "We are committed to delivering measurable results and tangible value to our clients, helping them achieve their goals and navigate complex regulatory landscapes with confidence.",
        image: resultsDrivenImg,
    },
    {
        title: "Innovation",
        description:
            "We embrace innovation and technology to develop cutting-edge solutions that anticipate evolving regulatory trends, mitigate risks, and unlock new opportunities for our clients.",
        image: innovationImg,
    },
    {
        title: "Partnership",
        description:
            "We view our clients as partners in success. We build long-term relationships based on trust, transparency, and collaboration, working hand-in-hand to achieve shared goals and objectives.",
        image: partnershipImg,
    },
];

const About = () => {
    return (
        <main className="min-h-screen bg-white">
            <AboutSection />

            {/* What We Do Section */}
            <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold text-[#814d35] mb-6">What We Do</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        We provide comprehensive solutions that empower businesses to grow and succeed. From advisory and technology transformation to training and compliance, our expert team ensures that you get tailored support and innovative strategies aligned with your goals.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <img
                        src={whatWeDoImage}
                        alt="What we do"
                        className="w-full rounded-lg object-cover shadow-lg"
                    />
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="max-w-7xl mx-auto px-6 pb-16">
                <h2 className="text-4xl font-bold text-center text-[#814d35] mb-12">
                    Why Choose Us
                </h2>

                {/* Vertical List with alternating layout */}
                <div className="flex flex-col gap-12">
                    {chooseUsItems.map(({ title, description, image }, idx) => {
                        const isEven = idx % 2 === 1; // For 2nd, 4th... use image left
                        return (
                            <div
                                key={idx}
                                className={`flex flex-col md:flex-row items-center gap-6 ${isEven ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Text */}
                                <div className="md:w-1/2">
                                    <h3 className="text-2xl font-semibold mb-4 text-[#814d35]">{title}</h3>
                                    <p className="text-gray-700 leading-relaxed">{description}</p>
                                </div>

                                {/* Image */}
                                <div className="md:w-1/2">
                                    <img
                                        src={image}
                                        alt={title}
                                        className="w-full rounded-lg object-cover shadow-md max-h-64 mx-auto"
                                        style={{ objectPosition: "center" }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
};


export default About;
