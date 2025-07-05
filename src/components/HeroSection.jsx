import heroImage from "../assets/heroteam.png";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";

const HeroSection = () => {
    return (
        <section className="bg-[#f4f6f7] py-10 px-4 sm:px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
                {/* Left Content */}
                <div>
                    <h2 className="font-poppins text-2xl sm:text-4xl xl:text-6xl font-bold text-[#814d35] leading-tight mb-4">
                        Building Trust. <br /> Driving Growths
                    </h2>
                    <p className="font-poppins text-md sm:text-lg text-gray-700 mb-6">
                        IRTH Advisors partners with organizations to craft ESG strategies that drive sustainable growth, stakeholder trust, and long-term value.
                    </p>

                    {/* Partner Logos Below Paragraph */}
                    <div className="flex flex-wrap items-center gap-6 sm:gap-10 mt-4">
                        <a href="https://huzaimaikram.com/" target="_blank" rel="noopener noreferrer">
                            <img src={partner1} alt="Partner 1" className="h-10 sm:h-12 object-contain" />
                        </a>
                        <a href="https://aacp.com.pk/" target="_blank" rel="noopener noreferrer">
                            <img src={partner2} alt="Partner 2" className="h-10 sm:h-12 object-contain" />
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative w-full">
                    <img
                        src={heroImage}
                        alt="Hero"
                        className="w-full max-h-[400px] sm:max-h-[500px] object-cover rounded-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
