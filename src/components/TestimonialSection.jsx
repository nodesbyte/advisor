import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Emmnuel Khondowe",
    feedback:
      "It's been a great pleasure interacting and exchanging information with you and all participants herein... ",
  },
  {
    name: "Gift Tembo",
    feedback:
      "I too have had a great time during the last 3 days. The interaction was great and my skills have been sharpened. Thank you very much Rauf and the whole team.",
  },
  {
    name: "Gift Tembo",
    feedback:
      "I too have had a great time during the last 3 days. The interaction was great and my skills have been sharpened. Thank you very much Rauf and the whole team.",
  },
  {
    name: "Royce Eve. J",
    feedback: "Thank you so much for sharing your knowledge. - Royce",
  },
  {
    name: "Mervise Zambian",
    feedback: "I really benefited from the training. God bless you and may his grace be upon you. Mervise",
  },
  {
    name: "Duke",
    feedback: "Thank you for sharing Rauf. We truly enjoyed the interaction and the opportunity to attend the training. Looking forward to more impactful interactions. Have a safe flight back home.",
  },
  {
    name: "God Over",
    feedback: "A big thank you for the insightful and well delivered training sir. Your input, hard-work impartation will bear fruits that our entire nation will benefit from. Thank you once more and safe flight back to your base",
  },
  {
    name: "Trillion",
    feedback: "The training was fantastic and well delivered. learnt alot from our trainer @Rauf and colleagues from other institutions. The skills learnt are very valuable",
  },
  {
    name: "PM",
    feedback: "Thank you Rauf, the training was awesome",
  },
  {
    name: "Hon. Viper ",
    feedback: "Thank you for the knowledge shared, travel safely tomorrow",
  },
  {
    name: "Benson Ngoma",
    feedback: "Thank you for the great knowledge impacted Mr. Rauf it was a pleasure meeting you. And everyone from the LEAs for the contributions and knowledge sharing, i am grateful.",
  },
];

const TestimonialCard = ({ name, feedback }) => (
  <div className="bg-white border border-[#9b5c38] rounded-lg p-4 w-72 shadow-md my-4 mx-4 flex-shrink-0">
    <div className="flex flex-col items-center mb-2">
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
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard
            key={`${direction}-testimonial-${i}`}
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
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard
            key={`horizontal-testimonial-${i}`}
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
      <h2 className="text-4xl font-semibold text-[#9b5c38] mb-10">Reviews</h2>

      {/* Mobile view: Single horizontal marquee */}
      <div className="block sm:block xl:hidden">
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