import React, { useEffect, useRef } from "react";

export default function Contact() {
  const calendlyRef = useRef(null);

  useEffect(() => {
    const scriptId = "calendly-widget-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-12 px-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-[#814d35] text-center">
          Book an Appointment
        </h2>

        {/* Calendly Inline Widget */}
        <div
          ref={calendlyRef}
          className="calendly-inline-widget"
          data-url="https://calendly.com/chaudharyabdulrahimamir"
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
      </div>
    </section>
  );
}
