import { useState } from "react";
import webinar1 from "../assets/webinar1.jpg";
import webinar2 from "../assets/webinar2.jpg";
import webinar3 from "../assets/webinar3.jpg";
import { X } from "lucide-react";

const Events = () => {
    const [modalImage, setModalImage] = useState(null);
    const openImage = (imgSrc) => setModalImage(imgSrc);
    const closeModal = () => setModalImage(null);

    return (
        <div className="max-w-7xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-[#814d35]">Upcoming Events</h1>
            <p className="mt-4 text-lg text-gray-700">Check out our latest workshops, conferences, and more.</p>

            <div className="mt-10 space-y-12">
                {/* ✅ Event 1: Image-based Webinar */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold text-[#814d35] mb-4">Webinar on Digital Transformation in Finance</h2>
                    <p className="text-gray-700 mb-4">
                        Join our expert panel as we explore how digital transformation is reshaping financial services.
                        Learn best practices, success stories, and technologies that are driving this change.
                    </p>
                    <div className="mb-6">
                        <p className="text-md font-medium text-[#814d35]">Speaker:</p>
                        <p className="text-gray-800">Mr. Abdul Rauf Shakoori</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                        {[webinar1, webinar2, webinar3].map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Webinar ${index + 1}`}
                                onClick={() => openImage(img)}
                                className="w-full h-52 object-cover rounded-md cursor-pointer transition-transform hover:scale-105"
                            />
                        ))}
                    </div>
                </div>

                {/* ✅ Event 2: Video-based Webinar with Detailed Description */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold text-[#814d35] mb-4">
                        Webinar: Response by Mr. Tahir Hassan Qureshi – President & CEO, Allied Bank Limited
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Panel Discussion Theme: <strong>“Realising the Immensity of Threat and Insulating the Stakeholders’ Value”</strong>
                        in the 2nd Financial Crime Conference.
                    </p>
                    <div className="mb-6">
                        <p className="text-md font-medium text-[#814d35]">Speaker:</p>
                        <p className="text-gray-800">Mr. Tahir Hassan Qureshi – President & CEO, Allied Bank Limited</p>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                        <li>Sensitizing the financial crime compliance agenda across the industry</li>
                        <li>National Risk Assessment awareness</li>
                        <li>Institutional threats, vulnerabilities and risk assessments based on National Risk Assessment</li>
                        <li>Compliance-led holistic institutional transformation</li>
                        <li>Tightening the risk appetite and sponsors’ awareness on implications</li>
                        <li>De-risking strategies and challenges</li>
                        <li>Banks propelling the national capacity-building programmes</li>
                        <li>Leadership strategies – forward-looking approach to stay ahead in the wake of emerging and disruptive trends</li>
                        <li>Thoughts on enforcement regime</li>
                    </ul>

                    {/* YouTube Video Embed */}
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                        <iframe
                            className="w-full h-96 rounded-md"
                            src="https://www.youtube.com/embed/ggfqbwoa5jg"
                            title="Tahir Hassan Qureshi Webinar"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* ✅ Image Modal */}
            {modalImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
                    <div className="relative max-w-4xl w-full mx-4">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 bg-white text-black rounded-full p-1 hover:bg-gray-200 z-10"
                        >
                            <X size={24} />
                        </button>
                        <img
                            src={modalImage}
                            alt="Enlarged webinar"
                            className="w-full max-h-[90vh] object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Events;
