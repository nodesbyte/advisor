import React from "react";
import { useNavigate } from "react-router-dom";

// Images
import tna from "../../assets/trainings/tna.jpg";
import manuals from "../../assets/trainings/trainingm.png";
import syllabi from "../../assets/trainings/Customized-Training-Syllabi.jpg";
import workshops from "../../assets/trainings/Practical-Application.jpg";
import compliance from "../../assets/trainings/compliance.jpg";
import support from "../../assets/trainings/ongoing.jpg";

// Trainings data
const trainings = [
    {
        title: "Training Needs Analysis (TNA)",
        description:
            "We conduct thorough assessments to identify gaps and areas for improvement in your compliance training programs.",
        slug: "training-needs-analysis",
        image: tna,
    },
    {
        title: "Training Manuals",
        description:
            "Our experts develop comprehensive training manuals that serve as valuable resources for participants, providing detailed guidance on compliance requirements and best practices.",
        slug: "training-manuals",
        image: manuals,
    },
    {
        title: "Customized Training Syllabi",
        description:
            "Our team creates customized training syllabi tailored to your organization’s unique requirements and regulatory obligations.",
        slug: "customized-training-syllabi",
        image: syllabi,
    },
    {
        title: "Practical Application",
        description:
            "We emphasize practical application and real-world scenarios to ensure that participants can apply their knowledge effectively in their day-to-day roles.",
        slug: "practical-workshops",
        image: workshops,
    },
    {
        title: "Regulatory Compliance Training",
        description:
            "Our training programs cover a wide range of regulatory compliance topics, including anti-money laundering (AML), counter-terrorism financing (CTF), anti-bribery and corruption (ABC), sanctions compliance, and more.",
        slug: "compliance-training",
        image: compliance,
    },
    {
        title: "Ongoing Support",
        description:
            "Our team provides ongoing support and guidance to help organizations implement and maintain effective compliance training programs.",
        slug: "ongoing-support",
        image: support,
    },
];

const TrainingPage = () => {
    const navigate = useNavigate();

    const handleCardClick = (slug) => {
        navigate(`/trainings/${slug}`);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0f1e3c]">
                Explore Our Trainings
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {trainings.map((training, index) => (
                    <div
                        key={index}
                        onClick={() => handleCardClick(training.slug)}
                        className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                    >
                        <img
                            src={training.image}
                            alt={training.title}
                            className="w-full h-44 object-cover"
                        />
                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-[#0f1e3c] mb-2">
                                {training.title}
                            </h3>
                            <p className="text-sm text-gray-700">{training.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrainingPage;
