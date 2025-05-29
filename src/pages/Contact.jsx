import React, { useEffect, useRef } from "react";

export default function Contact() {
  const calendlyRef = useRef(null);

  useEffect(() => {
    const scriptId = "calendly-widget-script";

    // Check if script already exists
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;

      // Load Calendly widget only after script is fully loaded
      script.onload = () => {
        if (window.Calendly && calendlyRef.current) {
          window.Calendly.initInlineWidget({
            url: "https://calendly.com/irthadvisors-support?primary_color=9b5d13",
            parentElement: calendlyRef.current,
            prefill: {}, // Optional: Pre-fill form data
          });
        }
      };

      document.body.appendChild(script);
    } else if (window.Calendly && calendlyRef.current) {
      // If script is already loaded, initialize immediately
      window.Calendly.initInlineWidget({
        url: "https://calendly.com/irthadvisors-support?primary_color=9b5d13",
        parentElement: calendlyRef.current,
      });
    }

    // Cleanup to prevent memory leaks
    return () => {
      if (window.Calendly) {
        window.Calendly.destroyBadgeWidget();
      }
    };
  }, []);

  return (
    <section className="py-12 px-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-[#814d35] text-center">
          Book an Appointment
        </h2>

        {/* Calendly Inline Widget Container */}
        <div
          ref={calendlyRef}
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
      </div>
    </section>
  );
}