import heroImage from "../assets/hero.webp";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile1.png";
import profile3 from "../assets/profile1.png";

const HeroSection = () => {
    return (
        <section className="bg-[#f4f6f7] py-12 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-5xl font-bold text-[#814d35] leading-tight mb-6 ">
                        Building Trust. <br /> Driving Growth
                    </h2>

                    <div className="flex items-center gap-6 mb-6">
                        <img src={partner1} alt="Partner 1" className="w-36 h-auto object-contain" />
                        <img src={partner2} alt="Partner 2" className="w-36 h-auto object-contain" />
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                        {/* Team avatars */}
                        <div className="flex items-center space-x-2">
                            <img src={profile1} alt="Profile 1" className="w-10 h-10 rounded-full object-cover" />
                            <img src={profile2} alt="Profile 2" className="w-10 h-10 rounded-full object-cover" />
                            <img src={profile3} alt="Profile 3" className="w-10 h-10 rounded-full object-cover" />
                        </div>


                        {/* Text next to avatars */}
                        <p className="text-gray-700 text-sm leading-snug">
                            Our clients rate us as excellent. <br />
                            We scored 9.1/10, based on 200 reviews.
                        </p>
                    </div>
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
