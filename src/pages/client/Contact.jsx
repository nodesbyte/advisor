import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
export default function Contact() {
  const calendlyRef = useRef(null);

  useEffect(() => {
    const scriptId = "calendly-widget-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;

      script.onload = () => {
        if (window.Calendly && calendlyRef.current) {
          window.Calendly.initInlineWidget({
            url: "https://calendly.com/irthadvisors-support?primary_color=9b5d13",
            parentElement: calendlyRef.current,
            prefill: {}, // Optional pre-fill
          });
        }
      };

      document.body.appendChild(script);
    } else if (window.Calendly && calendlyRef.current) {
      window.Calendly.initInlineWidget({
        url: "https://calendly.com/irthadvisors-support?primary_color=9b5d13",
        parentElement: calendlyRef.current,
      });
    }

    return () => {
      if (window.Calendly) {
        window.Calendly.destroyBadgeWidget();
      }
    };
  }, []);

  return (
    <section className="py-12 px-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-4 text-[#814d35] text-center">
          Book an Appointment
        </h2>

        <div className="text-center mb-6 text-gray-700">
          <p className="text-lg">
            📧{" "}
            <a href="mailto:support@irthadvisors.com" className="text-blue-600 hover:underline">
              support@irthadvisors.com
            </a>
          </p>
          <p className="text-lg mt-2 mb-6">
            📞{" "}
            <a href="tel:+1234567890" className="text-blue-600 hover:underline">
              +1 (786) 308-5244
            </a>
          </p>
         
        </div>

        {/* Calendly Inline Widget Container */}
        <div
          ref={calendlyRef}
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
      </div>
    </section>
  );
}
