import profile1 from "../assets/team1.jpg";
import profile2 from "../assets/team2.jpg";
import profile3 from "../assets/team3.jpg";
import profile4 from "../assets/team4.jpg";

// Import your social icon images
import instagramImg from "../assets/instagram.png";
import twitterXImg from "../assets/twitterx.png";
import facebookImg from "../assets/facebook.png";

const TeamSection = () => {
    const team = [

        {
            name: "Huzaima Bukhari",
            title: "Chief Partner",
            image: profile3,
            description:
                "Ms. Huzaima is a tax policy expert and academic writer, contributing to national discussions on fiscal reforms and economic law.",
            socials: {
                instagram: "#",
                twitter: "https://x.com/Huzaimabukhari",
                facebook: "#",
            },
        },
        {
            name: "Dr. Ikram Ul Haq",
            title: "Managing Partner",
            image: profile4,
            description:
                "Dr. Ikram is an authority on tax law and public policy. His work in taxation and governance has made a substantial impact at both national and international levels.",
            socials: {
                instagram: "#",
                twitter: "https://x.com/DrIkramulHaq",
                facebook: "#",
            },
        },
        {
            name: "Tahir Hassan Qureshi",
            title: "Senior Partner",
            image: profile1,
            description:
                "Mr. Tahir is a seasoned professional based in the UK, and a fellow member of the Institute of Chartered Accountants of Pakistan. He brings decades of experience in financial consultancy and leadership.",
            socials: {
                instagram: "#",
                twitter: "https://x.com/thqabl1",
                facebook: "#",
            },
        },
        {
            name: "Abdul Rauf Shakoori",
            title: "Senior Partner",
            image: profile2,
            description:
                "Mr. Abdul Rauf is known for his legal expertise and strategic planning. Based internationally, he has a significant presence in corporate law and compliance.",
            socials: {
                instagram: "#",
                twitter: "https://x.com/RaufAaeq",
                facebook: "#",
            },
        },
    ];

    return (
        <section className="bg-[#c8a890] py-16 text-center">
            <h2 className="text-4xl font-bold text-[#0f1e3c] mb-2">Meet Our Team</h2>
            <p className="text-lg text-[#333333] mb-12">Explore Our Success Stories and Innovative Projects</p>

            <div className="max-w-6xl mx-auto space-y-12">
                {[0, 2].map((startIdx) => (
                    <div
                        key={startIdx}
                        className="flex flex-col md:flex-row justify-center md:space-x-24 space-y-12 md:space-y-0 px-4"
                    >
                        {team.slice(startIdx, startIdx + 2).map((member, idx) => (
                            <div key={idx} className="flex items-start text-left">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-40 h-40 rounded-full object-cover"
                                />
                                <div className="ml-6 max-w-xs">
                                    <h4 className="text-xl font-semibold text-[#0f1e3c]">{member.name}</h4>
                                    <p className="text-sm text-gray-700">{member.title}</p>
                                    <hr className="my-2 w-16 border-gray-600" />
                                    <p className="text-sm text-gray-800">{member.description}</p>
                                    <div className="flex space-x-4 mt-3 text-[#0f1e3c]">
                                        <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={instagramImg}
                                                alt="Instagram"
                                                className="w-8 h-8 hover:scale-110 cursor-pointer"
                                            />
                                        </a>
                                        <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={twitterXImg}
                                                alt="Twitter X"
                                                className="w-8 h-8 hover:scale-110 cursor-pointer"
                                            />
                                        </a>
                                        <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={facebookImg}
                                                alt="Facebook"
                                                className="w-8 h-8 hover:scale-110 cursor-pointer"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
