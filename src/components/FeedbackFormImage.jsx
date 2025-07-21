import React from "react";
import feedbackFormImage from "../assets/FeedbackForm.png"; // Update the filename as needed

const FeedbackFormImage = () => {
    return (
        <section className="py-12 px-4 bg-white text-center">
            <h2 className="text-3xl font-semibold text-[#9b5c38] mb-6">
                Feedback Form
            </h2>
            <div className="flex justify-center">
                <img
                    src={feedbackFormImage}
                    alt="Client Feedback Form"
                    className="rounded-lg shadow-lg max-w-full h-auto"
                />
            </div>
        </section>
    );
};

export default FeedbackFormImage;
