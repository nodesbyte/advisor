import { LuPresentation } from "react-icons/lu";

const trainingServices = [
    "Training Needs Assessment (TNA)",
    "Capacity Building Programs",
    "Leadership & Team Building",
    "Customized Training Modules",
];

const TrainingServices = () => {
    const handleClick = (service) => {
        alert(`Clicked: ${service}`);
        // You can navigate, open modal, or trigger any logic here
    };

    return (
        <section className="bg-[#f9f9f7] py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#814d35] mb-12 font-lisu">
                    Provide Training Services With Our Tools
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {trainingServices.map((service, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(service)}
                            className="bg-[#b78c73] flex flex-col justify-center items-center text-center px-8 py-10 rounded-xl text-[#3c1f14] h-56 hover:bg-[#a1745c] transition duration-200 w-full"
                        >
                            <LuPresentation className="text-4xl mb-4" />
                            <p className="font-semibold">{service}</p>
                        </button>
                    ))}
                </div>

                <div className="mt-12">
                    <button className="border border-[#814d35] text-[#814d35] font-medium px-6 py-2 rounded-full hover:bg-[#814d35] hover:text-white transition">
                        View All Trainings →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TrainingServices;
