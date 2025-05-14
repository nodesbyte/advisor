import { useParams } from "react-router-dom";
import service1 from "../assets/services/aml-cft.png";
import service2 from "../assets/services/business-intel.png";
import service3 from "../assets/services/esg-glass.png";

// Sample services (same as Services.jsx)
const services = [
    {
        title: "ESG Strategy and Implementation Services",
        description:
            "Full ESG strategy, implementation, and integration into operations including environmental and governance metrics.",
        image: service1,
    },
    {
        title: "AML & CFT Compliance",
        description:
            "Comprehensive consulting on AML policies, risk assessments, training, and monitoring systems.",
        image: service2,
    },
    {
        title: "Investigative and Business Intelligence Services",
        description:
            "High-level investigative support, risk assessments, and strategic intelligence gathering.",
        image: service3,
    },
];

const slugify = (str) =>
    str.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = services.find((s) => slugify(s.title) === slug);

    if (!service) {
        return <div className="text-center py-20 text-xl">Service not found.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-20">
            <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover rounded-lg mb-10"
            />
            <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
            <p className="text-lg text-gray-700">{service.description}</p>
        </div>
    );
};

export default ServiceDetail;
