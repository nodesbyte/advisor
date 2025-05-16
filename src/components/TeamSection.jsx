import profile1 from "../assets/team1.jpg";
import profile2 from "../assets/team2.jpg";
import { Facebook, Linkedin, Send } from "lucide-react";

const TeamSection = () => {
    const team = [
        { name: "Tahir Hassan Qureshi", title: "Senior Partner", image: profile1 },
        { name: "Abdul Rauf Shakoori", title: "Senior Partner", image: profile2 },
        { name: "Tahir Hassan Qureshi", title: "Senior Partner", image: profile1 },
        { name: "Abdul Rauf Shakoori", title: "Senior Partner", image: profile2 },
    ];

    return (
        <section className="bg-[#c8a890] py-16 text-center">
            <h2 className="text-4xl font-bold text-[#0f1e3c] mb-2">Meet Our Team</h2>
            <p className="text-lg text-[#333333] mb-12">Explore Our Success Stories and Innovative Projects</p>

            <div className="max-w-6xl mx-auto space-y-12">
                {[0, 2].map((startIdx) => (
                    <div key={startIdx} className="flex flex-col md:flex-row justify-center md:space-x-24 space-y-12 md:space-y-0 px-4">
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
                                    <p className="text-sm text-gray-800">
                                        Mr. {member.name}, based in UK, fellow member of the Institute of Chartered Accountants of Pakistan.
                                    </p>
                                    <div className="flex space-x-4 mt-3 text-[#0f1e3c]">
                                        <Facebook className="w-5 h-5 cursor-pointer" />
                                        <Linkedin className="w-5 h-5 cursor-pointer" />
                                        <Send className="w-5 h-5 cursor-pointer" />
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
