import { Link } from "react-router-dom";
import { FaChalkboardTeacher, FaUserTie, FaUsersCog, FaLayerGroup } from "react-icons/fa";

const trainingServices = [
    {
        title: "Training Needs Assessment (TNA)",
        icon: <FaChalkboardTeacher className="text-3xl text-[#814d35]" />,
    },
    {
        title: "Capacity Building Programs",
        icon: <FaUsersCog className="text-3xl text-[#814d35]" />,
    },
    {
        title: "Leadership & Team Building",
        icon: <FaUserTie className="text-3xl text-[#814d35]" />,
    },
    {
        title: "Customized Training Modules",
        icon: <FaLayerGroup className="text-3xl text-[#814d35]" />,
    },
];

const TrainingServices = () => {
    return (
        <section className="bg-gradient-to-br from-[#f9f9f9] to-[#f1f5f9] py-20 px-6 text-black">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-lisu text-[#0f1e3c]">
                    Training Services That Empower Growth
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-12 text-lg">
                    Elevate your team's skills with our targeted and customizable training programs.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trainingServices.map((service, index) => (
                        <Link
                            to="/trainings"
                            key={index}
                            className="bg-white hover:shadow-2xl shadow-md transform hover:-translate-y-2 transition duration-300 p-6 rounded-2xl flex flex-col items-center text-center"
                        >
                            <div className="bg-[#f0e7df] p-4 rounded-full mb-4">
                                {service.icon}
                            </div>
                            <p className="font-semibold text-lg text-[#0f1e3c]">{service.title}</p>
                        </Link>
                    ))}
                </div>

                <div className="mt-14">
                    <Link
                        to="/trainings"
                        className="inline-block border border-[#0f1e3c] text-[#0f1e3c] font-medium px-8 py-3 rounded-full hover:bg-[#0f1e3c] hover:text-white transition-all duration-300"
                    >
                        Explore All Trainings →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TrainingServices;
