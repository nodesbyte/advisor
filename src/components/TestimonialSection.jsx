import { useState } from "react";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import profile4 from "../assets/profile4.jpg";
import profile5 from "../assets/profile3.jpg";

const testimonials = [
    {
        name: "Rahim",
        image: profile3,
        feedback:
            "Testimonial delivered quality QA services with clear communication and timely results. Highly recommended!",
    },
    {
        name: "John",
        image: profile1,
        feedback:
            "Amazing experience! Very professional team and great outcome. Will definitely return.",
    },
    {
        name: "Rahim",
        image: profile4,
        feedback:
            "Prompt service with attention to detail. Exceeded expectations in every aspect!",
    },
    {
        name: "Ali",
        image: profile2,
        feedback:
            "Exceptional service and consistent quality delivery. Truly commendable!",
    },
    {
        name: "Emily",
        image: profile5,
        feedback:
            "I was impressed with the clear communication and fast turnaround time.",
    },
];

export default function TestimonialSection() {
    const [current, setCurrent] = useState(0);

    const prevTestimonial = () =>
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    const nextTestimonial = () =>
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

    return (
        <section className="py-16 bg-[#f9fafb] text-center px-4">
            <h2 className="text-4xl font-semibold text-[#9b5c38] mb-10">
                Testimonials
            </h2>

            <div className="flex justify-center items-center gap-6">
                {/* Left Arrow */}
                <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 bg-[#c3815f] text-white rounded-full text-2xl flex items-center justify-center"
                >
                    &#8249;
                </button>

                {/* Testimonial Box */}
                <div className="border-4 border-[#9b5c38] bg-white px-6 py-8 max-w-xl rounded-md shadow-md">
                    <p className="text-lg text-black leading-relaxed">
                        {testimonials[current].feedback}
                    </p>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 bg-[#c3815f] text-white rounded-full text-2xl flex items-center justify-center"
                >
                    &#8250;
                </button>
            </div>

            {/* Profile thumbnails */}
            <div className="flex justify-center items-center gap-6 mt-8">
                {testimonials.map((t, index) => (
                    <img
                        key={index}
                        src={t.image}
                        alt={t.name}
                        onClick={() => setCurrent(index)}
                        className={`w-14 h-14 rounded-full cursor-pointer border-2 ${current === index
                                ? "border-[#9b5c38] scale-110"
                                : "border-transparent"
                            }`}
                    />
                ))}
            </div>

            {/* Name */}
            <p className="mt-4 font-bold text-lg">{testimonials[current].name}</p>
        </section>
    );
}

