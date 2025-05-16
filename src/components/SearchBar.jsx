import React, { useState } from "react";

const SearchBar = () => {
    const [query, setQuery] = useState("");

    const services = [
        "ESG Strategy and Implementation Services",
        "AML–CFT and Sanctions Compliance",
        "Investigative and Business Intelligence Services",
        "Independent and Pre-Regulatory Examinations",
        "Risk, Compliance, and Controls",
        "Strategic Assurance and Policies Development",
        "Testing",
        "Systems Modeling and Evaluations",
        "Cyber Security & Information Security Services",
        "GDPR Implementation",
        "Fraud Detection and Preventive Services",
        "Corporate Governance",
        "Operational and Organizational Restructuring",
        "Restructuring and Privatization",
        "Mergers and Acquisitions",
        "Energy Resource and Industrial",
        "Block Chain and Digital Assets",
        "E-commerce",
        "Diversity, Equity & Inclusion",
        "Employment and Workforce Evaluations",
        "Marketing Strategies",
        "Training and Workshops",
        "Financial Advisory Services",
        "Aircraft Leasing & Financing Solutions by IRTH",
        "Our Legal Services",
        "Taxation",
    ];

    const trainings = [
        "Leadership Training",
        "Cybersecurity Workshop",
        "Regulatory Compliance Bootcamp",
        "AI and Data Analytics Training",
    ];

    const insights = [
        "2024 Global Compliance Trends",
        "AI in Governance Report",
        "Cybersecurity Threat Landscape",
    ];

    const combined = [...services, ...trainings, ...insights];

    const filteredResults = combined.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="flex-1 flex flex-col items-center px-4">
            <input
                type="text"
                placeholder="Search by services, trainings, and more..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full max-w-lg px-4 py-2 rounded-full border border-gray-300 text-sm focus:outline-none"
            />

            {query && (
                <div className="bg-white mt-2 rounded-md shadow-lg w-full max-w-lg border border-gray-200 max-h-60 overflow-auto z-50">
                    {filteredResults.length > 0 ? (
                        filteredResults.map((result, index) => (
                            <div
                                key={index}
                                className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                            >
                                {result}
                            </div>
                        ))
                    ) : (
                        <div className="px-4 py-2 text-sm text-gray-500">No results found.</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
