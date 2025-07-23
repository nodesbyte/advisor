import React, { useState } from "react";
import {
    Tabs,
    Tab,
    Box,
    Typography,
    Card,
    CardContent,
    Avatar
} from "@mui/material";
import profile1 from "../assets/team1.jpg";
import profile2 from "../assets/team2.jpg";
import profile3 from "../assets/team3.jpg";
import profile4 from "../assets/team4.jpg";
import profile5 from "../assets/team5.jpg";
import { Link } from "@mui/material";


const teamMembers = [
    {
        name: "Huzaima Bukhari",
        title: "Chief Partner",
        email: "huzaima@irthadvisors.com",
        image: profile3,
        bio: (
            <>
                <Typography variant="body8" paragraph>
                    <strong>Ms. Huzaima Bukhari</strong>, MA, LLB, Advocate High Court, Visiting Faculty at Lahore University of Management Sciences (LUMS), member Advisory Board and Visiting Senior Fellow of Pakistan Institute of Development Economics (PIDE)
                </Typography>
                <Typography variant="body8" paragraph>
                    The recent publication, coauthored with Abdul Rauf Shakoori and IKRAM UL HAQ, is <strong>Pakistan Tackling FATF: Challenges & Solutions</strong>, available at:{" "}
                    <Typography variant="body8">
                        <Link
                            href="https://www.amazon.com/dp/B08RXH8W46"
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                            color="primary"
                        >
                            Amazon
                        </Link>
                        <Box component="span" ml={1} mr={1}>
                            and
                        </Box>
                        <Link
                            href="https://aacp.com.pk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                            color="primary"
                        >
                            AACP Pakistan
                        </Link>
                    </Typography>

                </Typography>
            </>
        ),
        experience: (
            <>
                <Typography variant="h4" paragraph>
                    <strong>About Huzaima</strong>
                </Typography>
                <Typography variant="body8" paragraph>
                    Ms. Huzaima Bukhari, MA, LLB, Advocate High Court, Visiting Faculty at Lahore University of Management Sciences (LUMS), member Advisory Board and Visiting Senior Fellow of Pakistan Institute of Development Economics (PIDE), is the author of numerous books and articles on Pakistani tax laws. She is the editor of Taxation and partner in Huzaima & Ikram, and Huzaima, Ikram & Ijaz, leading law firms in Pakistan. From 1984 to 2003, she was associated with the Civil Services of Pakistan. Since 1987, she has been teaching tax laws at various institutions including government-run training institutes in Lahore. She specializes in the areas of international tax laws, ML/CFT-related laws, and corporate and commercial laws. She is a co-author and review editor for many publications of the International Bureau of Fiscal Documentation (IBFD).
                </Typography>
                <Typography variant="body8" paragraph>
                    She has co-authored with IKRAM UL HAQ many books that include Tax Reforms in Pakistan: Historic & Critical Review, Towards Flat, Low-rate, Broad and Predictable Taxes (Revised & Expanded Edition, Pakistan: Enigma of Taxation, Towards Flat, Low-rate, Broad and Predictable Taxes (revised/enlarged edition of December 2020), Law & Practice of Income Tax, Law, Practice of Sales Tax, Law and Practice of Corporate Law, Law & Practice of Federal Excise, Law & Practice of Sales Tax on Services, Federal Tax Laws of Pakistan, Provincial Tax Laws, Practical Handbook of Income Tax, Tax Laws of Pakistan, Principles of Income Tax with Glossary and Master Tax Guide, Income Tax Digest 1886-2011 (with judicial analysis).
                </Typography>
                <Typography variant="body8" paragraph>
                    She regularly writes columns/articles/features/papers for Pakistani newspapers/journals and international journals/magazines. She has contributed over 1800 articles on issues of public finance, taxation, economy, and various social issues in various journals, magazines, and newspapers at home and abroad.
                </Typography>
            </>
        )


    },
    {
        name: "Dr. Ikram Ul Haq",
        title: "Managing Partner",
        email: "ikram@huzaimaikram.com",
        image: profile4,
        bio: (
            <>
                <Typography variant="body8" paragraph>
                    <strong>Dr. Ikramul Haq</strong>, Advocate Supreme Court, specialises in constitutional, corporate, media and cyber laws, ML/CFT, IT, intellectual property, arbitration and international taxation. He holds LLD in tax laws with specialization in transfer pricing.
                </Typography>
                <Typography variant="body8" paragraph>
                    The recent publication, coauthored with Abdul Rauf Shakoori and Huzaima Bukhari is <strong>Pakistan Tackling FATF: Challenges & Solutions</strong>, available at:{" "}
                    <Typography variant="body8">
                        <Link
                            href="https://www.amazon.com/dp/B08RXH8W46"
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                            color="primary"
                        >
                            Amazon
                        </Link>
                        <Box component="span" ml={1} mr={1}>
                            and
                        </Box>
                        <Link
                            href="https://aacp.com.pk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                            color="primary"
                        >
                            AACP Pakistan
                        </Link>
                    </Typography>

                </Typography>
            </>
        ),
        experience: (
            <>
                <Typography variant="h4" paragraph>
                    <strong>About Dr. Ikram Ul Haq</strong>
                </Typography>
                <Typography variant="body8" paragraph>
                    Dr. Ikramul Haq, Advocate Supreme Court, specializes in constitutional, corporate, media, and cyber laws, ML/CFT, IT, intellectual property, arbitration, and international taxation. He holds an LLD in tax law with a specialization in transfer pricing. He was a full-time journalist from 1979 to 1984 with Viewpoint and Dawn. He served Civil Services of Pakistan from 1984 to 1996. He established Huzaima & Ikram in 1996 and is presently its chief partner as well as a partner in Huzaima Ikram & Ijaz. He studied journalism, English literature, and law. He is the Chief Editor of Taxation. He is the country editor and correspondent of the International Bureau of Fiscal Documentation (IBFD) and a member of the International Fiscal Association (IFA). He is a Visiting Faculty at the Lahore University of Management Sciences (LUMS) and member Advisory Board and a Visiting Senior Fellow of the Pakistan Institute of Development Economics (PIDE).
                </Typography>
                <Typography variant="body8" paragraph>
                    He has co-authored with Huzaima Bukhari many books that include Tax Reforms in Pakistan: Historic & Critical Review, Towards Flat, Low-rate, Broad and Predictable Taxes (Revised & Expanded Edition, Pakistan: Enigma of Taxation, Towards Flat, Low-rate, Broad and Predictable Taxes (revised/enlarged edition of December 2020), Law & Practice of Income Tax, Law, Practice of Sales Tax, Law and Practice of Corporate Law, Law & Practice of Federal Excise, Law & Practice of Sales Tax on Services, Federal Tax Laws of Pakistan, Provincial Tax Laws, Practical Handbook of Income Tax, Tax Laws of Pakistan, Principles of Income Tax with Glossary and Master Tax Guide, Income Tax Digest 1886-2011 (with judicial analysis).
                </Typography>
                <Typography variant="body8" paragraph>
                    He is the author of Commentary on Avoidance of Double Taxation Agreements signed by Pakistan, Pakistan: From Hash to Heroin, its sequel Pakistan: Drug-trap to Debt-trap and Practical Handbook of Income Tax. He regularly writes columns for many Pakistani newspapers and international journals and has contributed over 2500 articles on a variety of issues of public interest, printed in various journals, magazines, and newspapers at home and abroad.
                </Typography>
            </>
        )


    },
    {
        name: "Tahir Hassan Qureshi",
        title: "Senior Partner",
        email: "thqabl1@gmail.com",
        image: profile1,
        bio: (
            <>
                <Typography variant="body8" paragraph>
                    <strong>Mr. Tahir Hassan Qureshi</strong> is a Fellow Chartered Accountant (FCA), UK Certified Public Finance Accountant (CPFA), and Certified Director with over 36 years of experience, including 31 years in senior executive roles (CEO/President, COO, CFO) in listed banks and financial institutions in Pakistan and the UK. He brings a unique blend of executive and non-executive experience, enabling him to bridge communication between management and the board effectively.
                </Typography>
                <Typography variant="body8" paragraph>
                    He has held key roles on various regulatory and advisory boards including the AML/CFT Supervisory Board for DNFBPs, Appellate Board for Chartered Accountants, and the Audit Oversight Board. His expertise spans strategy, financial control, risk management, compliance, and corporate governance.
                </Typography>
            </>
        ),
        experience: (
            <>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Profile
                </Typography>
                <Typography variant="body8" paragraph>
                    <strong>Tahir Hassan Qureshi</strong><br />
                    FCA, CPFA - UK, Certified Director<br />
                    <strong>Email/LinkedIn:</strong> thqabl1@gmail.com /{" "}
                    <a href="https://www.linkedin.com/in/tahir-hassan-qureshi-8976b5185" target="_blank" rel="noopener noreferrer">
                        LinkedIn Profile
                    </a>
                </Typography>
                <Typography variant="body8" paragraph>
                    Mr. Qureshi has served in both executive and non-executive leadership roles, including advisory services, volunteer mental health work in the UK, and member of the Council of Governors at Pennine Care NHS Foundation Trust, UK.
                </Typography>

                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Executive Proficiency
                </Typography>

                <Typography variant="h6" fontWeight="bold">Customer Franchise</Typography>
                <Typography variant="body8" paragraph>
                    • Market share growth via customer-centric automated products<br />
                    • Improved customer experience using digital banking and omnichannel strategies<br />
                    • Led core banking system migration projects
                </Typography>

                <Typography variant="h6" fontWeight="bold">Enterprise Risk Management</Typography>
                <Typography variant="body8" paragraph>
                    • Defined risk appetite and implemented tech-enabled ERM<br />
                    • Strengthened AML/CFT compliance and risk monitoring systems
                </Typography>

                <Typography variant="h6" fontWeight="bold">Cost Management Efficiency</Typography>
                <Typography variant="body8" paragraph>
                    • Introduced RPA for automation, improved TATs, and reduced costs<br />
                    • Promoted paperless workflows, renewable energy adoption, and virtual collaboration<br />
                    • Automated procure-to-pay (P2P) cycle
                </Typography>

                <Typography variant="h6" fontWeight="bold">People Management</Typography>
                <Typography variant="body8" paragraph>
                    • Capacity building, job rotation, and succession planning<br />
                    • Risk-based compensation models and e-learning platforms<br />
                    • Digitized HR functions for operational efficiency
                </Typography>

                <Typography variant="h6" fontWeight="bold">Financial Strategy</Typography>
                <Typography variant="body8" paragraph>
                    • Raised Tier I & II capital including GDRs on LSE and subordinated TFCs<br />
                    • Executed privatization, due diligence, and acquisitions<br />
                    • Strengthened balance sheet quality, automated finance & budgeting, and enhanced MIS
                </Typography>

                <Typography variant="h6" fontWeight="bold">ESG / CSR</Typography>
                <Typography variant="body8" paragraph>
                    • Established governance frameworks<br />
                    • Created CSR policies for workforce and community impact
                </Typography>

                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Strategic Projects & One-Off Assignments
                </Typography>
                <Typography variant="body8" paragraph>
                    • Restructured a provincial bank and obtained a commercial banking license<br />
                    • Advocated taxation reform as part of Pakistan Banking Association<br />
                    • Proposed and contributed to Pakistan’s national Shared KYC platform via blockchain<br />
                    • Successfully led the wind-down of a loss-generating public sector bank
                </Typography>

                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Non-Executive & Independent Director Roles
                </Typography>
                <Typography variant="body8" paragraph>
                    • Helped organizations achieve targets through strategic, governance-centric approaches<br />
                    • Served on multiple boards, including Pakistan Security Printing Corporation, Akhuwat Housing Finance, and others<br />
                    • Chairman – Risk Management Committee, Member – Audit & Strategic Oversight Committees
                </Typography>

                <Typography variant="h6" fontWeight="bold">Skills</Typography>
                <Typography variant="body8" paragraph>
                    Leadership • Strategy • Risk Management • Banking (Corporate, Retail, SME) • Treasury • People Development • Restructuring • Compliance (AML/CFT) • ESG • Digital Transformation • Financial Control • Taxation • Audit Oversight
                </Typography>
            </>
        )
    },
    {
        name: "Abdul Rauf Shakoori",
        title: "Senior Partner",
        email: "rauf@irthadvisors.com",
        image: profile2,
        bio: (
            <>
                <Typography variant="body8" paragraph>
                    <strong>Abdul Rauf Shakoori</strong>, Advocate High Court, is a subject-matter expert on AML-CFT, Compliance, Cyber Crime, and Risk Management. He has been providing AML-CFT advisory and training services to financial institutions (banks, DNFBPs, Investment companies, Money Service Businesses, insurance companies, and securities), and government institutions including law enforcement agencies located in North America (USA & CANADA), Middle East and Pakistan.
                </Typography>
                <Typography variant="body8" paragraph>
                    His recent book, co-authored with Huzaima Bukhari & Dr. Ikramul Haq, is titled <strong>Pakistan Tackling FATF: Challenges & Solutions</strong>, available at:{" "}
                    <Typography variant="body8">
                        <Link
                            href="https://www.amazon.com/dp/B08RXH8W46"
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                            color="primary"
                        >
                            Amazon
                        </Link>
                        <Box component="span" ml={1} mr={1}>
                            and
                        </Box>
                        <Link
                            href="https://aacp.com.pk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                            color="primary"
                        >
                            AACP Pakistan
                        </Link>
                    </Typography>

                </Typography>
            </>
        ),
        experience: (
            <>
                <Typography variant="h4" paragraph>
                    <strong>About Abdul Rauf Shakoori</strong>
                </Typography>
                <Typography variant="body8" paragraph>
                    His areas of expertise include legal, strategic planning, cross border transactions including but not limited to joint ventures (JVs), mergers & acquisitions (M&A), takeovers, privatizations, overseas expansions, USA Patriot Act, Banking Secrecy Act, and Office of Foreign Assets Control (OFAC).
                </Typography>
                <Typography variant="body8" paragraph>
                    Over his career, he has demonstrated excellent leadership, communication, analytical, and problem-solving skills and has also developed and delivered training courses in the areas of AML/CFT, Compliance, Fraud & Financial Crime Risk Management, Bank Secrecy, Cyber Crimes & Internet Threats against Banks, E–Channels Fraud Prevention, Security and Investigation of Financial Crimes.
                </Typography>
                <Typography variant="body8" paragraph>
                    The courses have been delivered as practical workshops with case study-driven scenarios and exams to ensure knowledge transfer.
                </Typography>
                <Typography variant="body8" paragraph>
                    His notable publications are: <em>Rauf’s Compilation of Corporate Laws of Pakistan</em>, <em>Rauf’s Company Law and Practice of Pakistan</em>, and <em>Rauf’s Research on Labour Laws and Income Tax</em> and others.
                </Typography>
                <Typography variant="body8" paragraph>
                    He has authored numerous articles, including: <em>Revenue Collection: Contemporary Targets vs. Orthodox Approach</em>, <em>It is Time to Say Goodbye to Our Past</em>, <em>FATF and unjustly grey listed Pakistan</em>, <em>Pakistan’s Long Road towards FATF Compliance</em>, and many more addressing compliance, governance, and financial crime issues.
                </Typography>
            </>
        )


    },
    {
        name: "Syed Nayyar Uddin Ahmad",
        title: "Head - Strategic & Global Affairs",
        email: "nayyar@irth.advisors.com",
        image: profile5, // You can replace this with his actual image if available
        bio: (
            <>
                <Typography variant="body8" paragraph>
                    <strong>Syed Nayyar Uddin Ahmad</strong> is a seasoned senior corporate executive with over 50 years of impactful leadership in strategic analysis and policy advocacy. His influential writings and thought leadership have reached global policymakers, including heads of state, significantly contributing to shaping foreign policy in the United States and internationally.
                </Typography>
                <Typography variant="body8" paragraph>
                    <strong>Phone:</strong> +92 321 9402157<br />
                </Typography>
            </>
        ),
        experience: (
            <>
                <Typography variant="h4" paragraph>
                    <strong>About Syed Nayyar Uddin Ahmad</strong>
                </Typography>
                <Typography variant="body8" paragraph>
                    With a distinguished career spanning more than five decades, Syed Nayyar Uddin Ahmad has provided transformative leadership across various domains. His strategic insights and commentary have been instrumental in influencing international policy and discourse.
                </Typography>
                <Typography variant="body8" paragraph>
                    Renowned for his visionary approach, he continues to be a guiding force in global strategic affairs, with a particular emphasis on policy formulation, diplomatic relations, and international collaboration.
                </Typography>
            </>
        )
    }

];

const TeamPage = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <Box sx={{ maxWidth: "1000px", mx: "auto", mt: 8, px: 2 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Meet our Team
            </Typography>
            <Typography variant="subtitle1" align="center" gutterBottom>
                We Help To Create Visual Strategies
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Tabs
                    value={selectedTab}
                    onChange={(e, newValue) => setSelectedTab(newValue)}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                        mt: 3,
                        borderBottom: 1,
                        borderColor: "divider",
                        "& .MuiTab-root": {
                            textTransform: "none",
                            fontWeight: 500,
                            color: "#000", // default color
                            transition: "color 0.3s ease",
                            "&:hover": {
                                color: "#BC9A87" // hover effect
                            }
                        },
                        "& .Mui-selected": {
                            color: "#BC9A87 !important", // selected tab text color
                            fontWeight: "bold"
                        },
                        "& .MuiTabs-indicator": {
                            backgroundColor: "#BC9A87" // tab underline
                        }
                    }}
                >
                    {teamMembers.map((member, index) => (
                        <Tab key={index} label={member.name} />
                    ))}
                </Tabs>
            </Box>
            <Box sx={{ mt: 4 }}>
                <Card sx={{ display: "flex", flexDirection: ["column", "row"], p: 2 }}>
                    <Avatar
                        src={teamMembers[selectedTab].image}
                        alt={teamMembers[selectedTab].name}
                        sx={{
                            width: 150,
                            height: 150,
                            mr: [0, 3],
                            mb: [2, 0],
                            alignSelf: "center"
                        }}
                    />
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            {teamMembers[selectedTab].name}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            {teamMembers[selectedTab].title}
                        </Typography>
                        {teamMembers[selectedTab].bio}
                        <Typography variant="body8" sx={{ mt: 2 }}>
                            <strong>Email:</strong>{" "}
                            <Link
                                href={`mailto:${teamMembers[selectedTab].email}`}
                                underline="hover"
                                color="primary"
                            >
                                {teamMembers[selectedTab].email}
                            </Link>
                        </Typography>

                    </CardContent>
                </Card>

                {teamMembers[selectedTab].experience && (
                    <Box sx={{ mt: 4 }}>{teamMembers[selectedTab].experience}</Box>
                )}
            </Box>
        </Box>
    );
};

export default TeamPage;
