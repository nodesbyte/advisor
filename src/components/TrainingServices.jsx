import { Link } from "react-router-dom";
import { LuPresentation } from "react-icons/lu";
import { FaChalkboardTeacher, FaUserTie, FaUsersCog, FaLayerGroup } from "react-icons/fa";

const trainingServices = [
    {
        title: "Training Needs Assessment (TNA)",
        icon: <FaChalkboardTeacher className="text-4xl mb-4" />,
    },
    {
        title: "Capacity Building Programs",
        icon: <FaUsersCog className="text-4xl mb-4" />,
    },
    {
        title: "Leadership & Team Building",
        icon: <FaUserTie className="text-4xl mb-4" />,
    },
    {
        title: "Customized Training Modules",
        icon: <FaLayerGroup className="text-4xl mb-4" />,
    },
];

const TrainingServices = () => {
    return (
        <section className="bg-white py-16 px-6 text-black">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-12 font-lisu">
                    Provide Training Services With Our Tools
                </h2>

                {/* Cards with icons and links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trainingServices.map((service, index) => (
                        <Link
                            to="/trainings"
                            key={index}
                            className="bg-[#0f1e3c] w-full flex flex-col justify-center items-center text-center px-6 py-10 rounded-xl h-56 text-white hover:bg-[#1c2d57] transition duration-200"
                        >
                            {service.icon}
                            <p className="font-semibold">{service.title}</p>
                        </Link>
                    ))}
                </div>

                <div className="mt-12">
                    <Link
                        to="/trainings"
                        className="border border-[#0f1e3c] text-[#0f1e3c] font-medium px-6 py-2 rounded-full hover:bg-[#0f1e3c] hover:text-white transition"
                    >
                        View All Trainings →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TrainingServices;
