import Marquee from "react-fast-marquee";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import profile4 from "../assets/profile4.jpg";
import profile5 from "../assets/profile3.jpg";

const testimonials = [
    {
        name: "Rahim",
        image: profile3,
        feedback: "Delivered quality QA services with clear communication and timely results.",
    },
    {
        name: "John",
        image: profile1,
        feedback: "Amazing experience! Very professional team and great outcome. Will definitely return.",
    },
    {
        name: "Rahim",
        image: profile4,
        feedback: "Prompt service with attention to detail. Exceeded expectations in every aspect!",
    },
    {
        name: "Ali",
        image: profile2,
        feedback: "Exceptional service and consistent quality delivery. Truly commendable!",
    },
    {
        name: "Emily",
        image: profile5,
        feedback: "I was impressed with the clear communication and fast turnaround time.",
    },
];

export default function TestimonialSection() {
    return (
        <section className="bg-[#f9fafb] py-16 px-4 text-center">
            <h2 className="text-4xl font-semibold text-[#9b5c38] mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-3 gap-6 h-[400px] overflow-hidden">
                {/* Top to Bottom */}
                <Marquee
                    direction="down"
                    speed={30}
                    gradient={false}
                    pauseOnHover
                    className="flex flex-col gap-6"
                >
                    {testimonials.map((t, i) => (
                        <Card key={`m1-${i}`} {...t} />
                    ))}
                </Marquee>

                {/* Bottom to Top */}
                <Marquee
                    direction="up"
                    speed={30}
                    gradient={false}
                    pauseOnHover
                    className="flex flex-col gap-6"
                >
                    {testimonials.map((t, i) => (
                        <Card key={`m2-${i}`} {...t} />
                    ))}
                </Marquee>

                {/* Top to Bottom again */}
                <Marquee
                    direction="down"
                    speed={30}
                    gradient={false}
                    pauseOnHover
                    className="flex flex-col gap-6"
                >
                    {testimonials.map((t, i) => (
                        <Card key={`m3-${i}`} {...t} />
                    ))}
                </Marquee>
            </div>
        </section>
    );
}

function Card({ name, image, feedback }) {
    return (
        <div className="bg-white border-2 border-[#9b5c38] rounded-md p-4 w-72 mx-auto shadow-md mb-4">
            <img src={image} alt={name} className="w-12 h-12 rounded-full mx-auto mb-2" />
            <p className="text-sm text-black italic">"{feedback}"</p>
            <p className="mt-2 font-semibold text-[#9b5c38]">{name}</p>
        </div>
    );
}
