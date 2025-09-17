import React, { useState } from "react";
import { Link } from "react-router-dom";
import about from "../../assets/aboutbanner.png";

const valuesData = [
  {
    number: "01",
    title: "Integrity",
    description:
      "We maintain the highest integrity, honesty, and ethics in all our work, building trust with clients, partners, and stakeholders.",
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
      "We prioritize sustainable practices that create long-term benefits for businesses, society, and the environment. ",
  },
];

export default function AboutSection({ isHomePage = false }) {
  const [showNext, setShowNext] = useState(true);

  const handleNext = () => {
    const container = document.getElementById("card-slider");
    container.scrollBy({ left: 320, behavior: "smooth" });
    setShowNext(false);
  };

  const handlePrev = () => {
    const container = document.getElementById("card-slider");
    container.scrollBy({ left: -320, behavior: "smooth" });
    setShowNext(true);
  };

  return (
    <section className="px-6 py-12 space-y-8 md:px-16 bg-white">
      {/* aboutus */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="flex flex-col">
          <h2 className="text-2xl sm:text-4xl  font-bold mb-6">Who we Are?</h2>
          <p className="text-base">
            Irth Advisors LLC is a distinguished management consulting firm
            renowned for its extensive experience and unwavering commitment to
            integrity. With a proven track record of delivering exceptional
            results, we bring decades of collective expertise to the table.{" "}
            <br />
            <br />
            {isHomePage ? (
              <>
                <Link
                  to="/about"
                  className="bg-[#814d35] text-white px-6 py-4 rounded-full text-sm font-semibold hover:bg-[#6e3f2a] transition"
                >
                  Read more
                </Link>
              </>
            ) : (
              <>
                Our team of seasoned professionals possesses deep industry knowledge and
                a comprehensive understanding of the intricate challenges facing
                organizations today. <br />
                <br />
                Driven by a steadfast dedication to excellence, Irth Advisors LLC
                has earned a reputation for upholding the highest standards of
                integrity and ethical conduct in all our endeavors. We approach
                every client engagement with honesty, transparency, and a genuine
                commitment to their success. Our unwavering integrity forms the
                cornerstone of our business philosophy, guiding our decisions and
                actions as we partner with clients to navigate complex business
                landscapes, mitigate risks, and capitalize on emerging
                opportunities. <br />
                <br />
                In the dynamic world of management consulting, Irth Advisors LLC
                stands apart for its integrity, expertise, and client-centric
                approach. We are trusted advisors, strategic partners, and advocates
                for excellence, empowering organizations to achieve sustainable
                growth and navigate the complexities of today’s business environment
                with confidence and integrity.
              </>
            )}
          </p>
        </div>
        <img src={about} className="h-[30vh] sm:h-[60vh] object-fit rounded-md" alt="About Us" />
      </div>

      {/* Only show below sections if not on Home Page */}
      {!isHomePage && (
        <>
          {/* Vision */}
          <div className="flex-col bg-[#0f1e3c] text-white p-6 w-full my-4 rounded flex">
            <h3 className="text-xl font-bold">Our Vision:</h3>
            <div className="w-3/4">
              <p className="text-left">
                "At Irth Advisors LLC, we envision being the global leader in
                ethical business advisory—driving compliance, integrity, and
                sustainable growth through innovative solutions."
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="flex-col bg-[#0f1e3c] text-white p-6 w-full my-4 rounded flex">
            <h3 className="text-xl font-bold">Our Mission:</h3>
            <div className="w-3/4">
              <p className="text-left">
                "Irth Advisors LLC empowers organizations with tailored regulatory,
                risk, and strategic advisory services—driving sustainable success
                through expertise and collaboration."
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-10">
            <h3 className="text-3xl font-bold text-center mb-6">Our Core Values</h3>

            <div className="relative">
              {!showNext && (
                <button
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#0f1e3c] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-[#1c2a4d]"
                  aria-label="Scroll Left"
                >
                  ←
                </button>
              )}
              <div id="card-slider" className="flex overflow-hidden space-x-6 px-12">
                {valuesData.map((value, index) => (
                  <div
                    key={index}
                    className="flex flex-col bg-[#f5f5f5] p-6 rounded-lg shadow-md flex-shrink-0"
                  >
                    <div className="text-[#0f1e3c] text-3xl font-bold mb-2">
                      {value.number}
                    </div>
                    <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                    <p className="text-gray-700 w-72 text-base">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
              {showNext && (
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#0f1e3c] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-[#1c2a4d]"
                  aria-label="Scroll Right"
                >
                  →
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
