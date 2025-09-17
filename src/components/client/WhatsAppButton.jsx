// components/WhatsAppButton.jsx
import React from "react";

export default function WhatsAppButton() {
    const phoneNumber = "17863085244"; // Replace with your number (without + or dashes)
    const message = "Hello! I would like to learn more about your services.";

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50"
        >
            <div className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center space-x-2">
                <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M16 0C7.163 0 0 7.164 0 16c0 2.84.74 5.614 2.142 8.06L0 32l8.264-2.123A15.936 15.936 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.474c-2.4 0-4.752-.628-6.818-1.816l-.486-.28-4.91 1.263 1.297-4.788-.31-.494C3.55 20.132 2.737 18.09 2.737 16 2.737 8.79 8.79 2.737 16 2.737c7.21 0 13.263 6.053 13.263 13.263S23.21 29.474 16 29.474zm7.158-9.218c-.312-.156-1.844-.91-2.13-1.016-.287-.106-.496-.156-.705.156-.207.31-.812 1.015-.996 1.222-.182.207-.365.234-.677.078-.312-.156-1.317-.486-2.51-1.55-.928-.826-1.552-1.846-1.733-2.156-.18-.31-.02-.478.137-.634.141-.14.312-.365.47-.547.156-.183.207-.312.312-.52.104-.208.052-.39-.025-.547-.078-.156-.705-1.703-.964-2.34-.253-.607-.51-.526-.705-.526-.182 0-.39-.027-.598-.027-.208 0-.547.078-.834.39-.287.312-1.094 1.066-1.094 2.6s1.12 3.015 1.277 3.223c.156.207 2.18 3.32 5.288 4.653.74.318 1.317.508 1.768.65.742.237 1.414.204 1.947.124.594-.09 1.844-.75 2.104-1.474.26-.728.26-1.35.182-1.474-.078-.124-.26-.183-.547-.312z" />
                </svg>
                <span className="font-medium hidden sm:inline">Chat with us</span>
            </div>
        </a>
    );
}
