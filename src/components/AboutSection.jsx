// src/components/AboutSection.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const valuesData = [
    {
        number: "01",
        title: "Integrity",
        description:
            "We uphold the highest standards of integrity, honesty, and ethical conduct in all aspects of our work, ensuring trust and confidence in our relationships with clients, partners, and stakeholders.",
    },
    {
        number: "02",
        title: "Excellence",
        description:
            "We are committed to excellence in everything we do, constantly improving our performance, quality of service, and client satisfaction.",
    },
    {
        number: "03",
        title: "Collaboration",
        description:
            "We believe in teamwork and the power of collective thinking to drive better results for our clients and ourselves.",
    },
    {
        number: "04",
        title: "Innovation",
        description:
            "We embrace innovation and continuously seek new ways to deliver greater value through smarter, more effective solutions.",
    },
    {
        number: "05",
        title: "Sustainability",
        description:
            "We prioritize sustainable practices that create long-term benefits for businesses, society, and the environment.",
    },
];

export default function AboutSection() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % valuesData.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + valuesData.length) % valuesData.length);

    return (
        <section className="px-6 py-12 space-y-8 text-center md:px-16 bg-white">
            <h2 className="text-4xl font-bold text-[#a86c43]">Who we Are?</h2>

            {/* Vision */}
            <div className="bg-[#0f1e3c] text-white p-6 w-full my-4 rounded flex items-center gap-4">
                <div className="w-1/4 text-right pr-4">
                    <h3 className="text-xl font-bold">Our Vision:</h3>
                </div>
                <div className="w-3/4">
                    <p className="text-left">
                        "At Irth Advisors LLC, we envision being the global leader in ethical business
                        advisory—driving compliance, integrity, and sustainable growth through innovative
                        solutions."
                    </p>
                </div>
            </div>

            {/* Mission */}
            <div className="bg-[#804d2b] text-white p-6 w-full my-4 rounded flex items-center gap-4">
                <div className="w-1/4 text-right pr-4">
                    <h3 className="text-xl font-bold">Our Mission:</h3>
                </div>
                <div className="w-3/4">
                    <p className="text-left">
                        "Irth Advisors LLC empowers organizations with tailored regulatory, risk, and strategic
                        advisory services—driving sustainable success through expertise and collaboration."
                    </p>
                </div>
            </div>



            {/* Values Carousel */}
            <div className="space-y-4 mt-8">
                <h3 className="text-3xl font-bold text-[#a86c43]">Our Values:</h3>

                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={prevSlide}
                        className="text-2xl font-bold px-3 py-1 bg-[#0f1e3c] text-white rounded hover:bg-[#1c2f52]"
                    >
                        ‹
                    </button>

                    <div className="max-w-xll bg-gray-100 p-8 rounded shadow text-left">
                        <h4 className="text-4xl font-bold text-[#0f1e3c] mb-1">
                            {valuesData[current].number}
                        </h4>
                        <h5 className="text-2xl font-semibold text-[#0f1e3c] mb-3">
                            {valuesData[current].title}
                        </h5>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {valuesData[current].description}
                        </p>
                    </div>


                    <button
                        onClick={nextSlide}
                        className="text-2xl font-bold px-3 py-1 bg-[#0f1e3c] text-white rounded hover:bg-[#1c2f52]"
                    >
                        ›
                    </button>
                </div>
            </div>

            <div className="mt-12">
                <Link
                    to="/about"
                    className="border border-[#0f1e3c] text-[#0f1e3c] font-medium px-6 py-2 rounded-full hover:bg-[#0f1e3c] hover:text-white transition"
                >
                    View More →
                </Link>
            </div>
        </section>
    );
}
