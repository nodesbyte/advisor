import heroImage from "../assets/hero.png";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";

const HeroSection = () => {
    return (
        <section className="bg-[#f4f6f7] py-12 px-6 relative overflow-hidden">
            {/* Marquee bar at top */}
            <div className="bg-white py-2 border-b border-gray-300 overflow-hidden">
                <div className="whitespace-nowrap animate-marquee flex items-center gap-12">
                    <a href="https://huzaimaikram.com/" target="_blank" rel="noopener noreferrer">
                        <img src={partner1} alt="Partner 1" className="h-10 object-contain" />
                    </a>
                    <a href="https://aacp.com.pk/" target="_blank" rel="noopener noreferrer">
                        <img src={partner2} alt="Partner 2" className="h-10 object-contain" />
                    </a>
                    {/* Repeat for smooth loop effect */}
                    <a href="https://huzaimaikram.com/" target="_blank" rel="noopener noreferrer">
                        <img src={partner1} alt="Partner 1" className="h-10 object-contain" />
                    </a>
                    <a href="https://aacp.com.pk/" target="_blank" rel="noopener noreferrer">
                        <img src={partner2} alt="Partner 2" className="h-10 object-contain" />
                    </a>
                    <a href="https://huzaimaikram.com/" target="_blank" rel="noopener noreferrer">
                        <img src={partner1} alt="Partner 1" className="h-10 object-contain" />
                    </a>
                    <a href="https://aacp.com.pk/" target="_blank" rel="noopener noreferrer">
                        <img src={partner2} alt="Partner 2" className="h-10 object-contain" />
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center mt-8">
                {/* Left Content */}
                <div>
                    <h2 className="text-6xl font-bold text-[#814d35] leading-tight mb-4">
                        Building Trust. <br /> Driving Growth
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        IRTH Advisors partners with organizations to craft ESG strategies that drive sustainable growth, stakeholder trust, and long-term value.
                    </p>
                </div>

                {/* Right Image */}
                <div className="relative">
                    <img
                        src={heroImage}
                        alt="Hero"
                        className="w-full h-[520px] object-cover rounded-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
