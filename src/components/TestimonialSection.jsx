import { useEffect, useRef, useState } from "react";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";

const testimonials = [
  {
    name: "Rahim",
    image: profile3,
    feedback:
      "Delivered quality QA services with clear communication and timely results.",
  },
  {
    name: "John",
    image: profile1,
    feedback:
      "Amazing experience! Very professional team and great outcome. Will definitely return.",
  },
  {
    name: "Ali",
    image: profile2,
    feedback: "Highly recommended. Fast delivery and excellent support.",
  },
];

const TestimonialCard = ({ image, name, feedback }) => (
  <div className="bg-white border border-[#9b5c38] rounded-lg p-4 w-72 shadow-md my-4 mx-4 flex-shrink-0">
    <div className="flex flex-col items-center mb-2">
      <img
        src={image}
        alt={name}
        className="rounded-full h-12 w-12 object-cover mb-2"
      />
      <h2 className="text-[#9b5c38] font-semibold">{name}</h2>
    </div>
    <p className="text-sm text-gray-700 italic text-center">"{feedback}"</p>
  </div>
);

const VerticalMarquee = ({ direction = "up" }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    const scrollStep = 1; 
    const intervalDelay = 30;

    const intervalId = setInterval(() => {
      if (!paused) {
        if (direction === "up") {
          if (container.scrollTop >= content.scrollHeight / 2) {
            container.scrollTop = 0;
          } else {
            container.scrollTop += scrollStep;
          }
        } else {
          if (container.scrollTop <= 0) {
            container.scrollTop = content.scrollHeight / 2;
          } else {
            container.scrollTop -= scrollStep;
          }
        }
      }
    }, intervalDelay);

    return () => clearInterval(intervalId);
  }, [paused, direction]);

  return (
    <div
      ref={containerRef}
      className="h-96 overflow-hidden mx-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={contentRef}>
        {/* Duplicate testimonials to create infinite loop */}
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard
            key={`${direction}-testimonial-${i}`}
            image={t.image}
            name={t.name}
            feedback={t.feedback}
          />
        ))}
      </div>
    </div>
  );
};

const HorizontalMarquee = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    const scrollStep = 1;
    const intervalDelay = 30;

    const intervalId = setInterval(() => {
      if (!paused) {
        if (container.scrollLeft >= content.scrollWidth / 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollStep;
        }
      }
    }, intervalDelay);

    return () => clearInterval(intervalId);
  }, [paused]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={contentRef} className="flex">
        {/* Duplicate testimonials to create infinite loop */}
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard
            key={`horizontal-testimonial-${i}`}
            image={t.image}
            name={t.name}
            feedback={t.feedback}
          />
        ))}
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="bg-[#f9fafb] py-16 px-4 text-center">
      <h2 className="text-4xl font-semibold text-[#9b5c38] mb-10">Testimonials</h2>
      
      {/* Mobile view: Single horizontal marquee */}
      <div className="block sm:block xl:hidden ">
        <HorizontalMarquee />
      </div>
      
      {/* Desktop view: Multiple vertical marquees */}
      <div className="hidden xl:flex justify-center items-start gap-10 flex-wrap">
        <VerticalMarquee direction="up" />
        <VerticalMarquee direction="down" />
        <VerticalMarquee direction="up" />
      </div>
    </section>
  );
};

export default TestimonialSection;