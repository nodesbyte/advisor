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
        email: "tahir@irthadvisors.com",
        image: profile1,
        bio: (
            <>
                <Typography variant="body8" paragraph>
                    <strong>Mr. Tahir Hassan Qureshi</strong>, based in the UK, is a fellow of the Institute of Chartered Accountants of Pakistan and a member of the UK’s Institute of Chartered Public Finance and Accountancy. With over 33 years of diverse experience—including 28 in senior banking roles (CEO, COO, CFO, CIA)—he has led one of Pakistan’s major banks with 4.5 million customers, ensuring effective compliance, customer due diligence, and AML/CFT measures, including trade-based money laundering controls. He serves on ICAP’s AML Supervisory and Appellate Boards, supporting FATF Asia Pacific Group recommendations, and advises Pakistan Credit Rating Agency on Moody’s International Analytics Risk Management Solutions.
                </Typography>
                <Typography variant="body8" paragraph>
                    As a Certified Director and independent board member, he helps
                    organizations enhance governance, oversight, and strategic direction.
                </Typography>
            </>
        ),
        experience: (
            <>
                <Typography variant="h4" fontWeight="bold">
                    About Tahir Hassan Qureshi
                </Typography>
                <Typography variant="body8" paragraph>
                    <strong>Mr. Tahir Hassan Qureshi</strong>, based in the UK, a fellow member of the Institute of Chartered Accountants of Pakistan, and a member of the Institute of Chartered Public Finance and Accountancy UK is a seasoned professional with a diversified experience of over 33 years including 28 years of experience in banking, holding senior management positions (CEO/President, COO, CFO, CIA) including non-executive/independent directorships. As CEO of one of the big banks, with a customer base of 4.5 million, ensured effective compliance risk management including customer due diligence, AML/CFT, and trade-based money laundering. He is a member of the Institute of Chartered Accountants of Pakistan AML supervisory board [constituted to ensure compliance with the Financial Action Task Force (FATF) Asia Pacific Group’s recommendations (Risk based Approach, Customer Due Diligence)] and a member Appellate board. Advisor to Pakistan Credit Rating Agency in implementing Moody’s Int’l Analytics Risk Management Solutions
                </Typography>
                <Typography variant="body8" paragraph>
                    Being a Certified Director and working as a non-executive and Independent Director he has expertise in helping organizations achieve vision and targets through holistic, integrated, consultative, and coordinated approaches helping them to strengthen governance and oversight. With valuable insights & skills, he carried out his fiduciary duty with a sense of objective judgment and independence in the best interest of the organization.
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                    Board & Advisory Experience
                </Typography>
                <Typography variant="h6" paragraph>
                    <strong>Non-Executive Director:</strong>
                </Typography>
                <Typography variant="body8" paragraph>
                    <strong>Habib Allied Holding Bank UK – UK (2017–2020)</strong><br />
                    Holding Company of Habib Bank UK<br />
                    <strong>ABL Asset Management Company (2017–2020)</strong><br />
                    Wholly owned subsidiary of Allied Bank Limited<br />
                    <strong>1-Link (Private) Limited (2016–2017) </strong><br />
                    Pakistan’s first fully licensed PSO/PSP (Payment Service Operator/Payment Service Provider)<br />
                    <strong>Akhuwat Housing Finance Company Limited (June 2021 – Present)</strong><br />
                    Member – Board’s Risk Management Committee & Audit Committee<br />
                    Business – Lending to lower & middle-income individuals under Islamic Modes of Financing
                </Typography>

                <Typography variant="h6" paragraph>
                    <strong>Independent Director:</strong>
                </Typography>
                <Typography variant="body8" component="div" paragraph>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', margin: 0 }}>
                        <li>Pakistan Corporate Restructuring Company Limited (Jan – Jun 2020)</li>
                        <li>
                            Pakistan Security Printing Corporation (PSPC) (2021 – Present)
                            <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem' }}>
                                <li>Chairman – Board’s Risk Management Committee</li>
                                <li>Member – Procurement Committee</li>
                                <li>Wholly Owned Subsidiary of State Bank of Pakistan (SBP), established 1949</li>
                                <li>Joint Venture with M/S Thomas De La Rue UK</li>
                                <li>Business – Production of banknotes from printing to packing</li>
                            </ul>
                        </li>
                        <li>
                            AML/CFT Supervisory Board – ICAP (March 2020 – Present)
                            <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem' }}>
                                <li>Ensures compliance with FATF Asia Pacific Group’s recommendations (Risk Based Approach, Customer Due Diligence)</li>
                            </ul>
                        </li>
                        <li>
                            Appellate Board Member – ICAP (January 01, 2022 – Present)
                            <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem' }}>
                                <li>Under Quality Control Review Framework – hears appeals against Quality Assurance Board decisions</li>
                            </ul>
                        </li>
                    </ul>
                </Typography>
                <Typography variant="h6" paragraph>
                    <strong>Committee Memberships:</strong>
                </Typography>
                <Typography variant="body8" paragraph>
                    Various Committees – Institute of Chartered Accountants of Pakistan (ICAP)<br />
                    Pakistan Banks’ Association<br />
                    Council Member – Institute of Bankers Pakistan (IBP)<br />
                    Member – Finance and Investment Committee (IBP)
                </Typography>

                <Typography variant="h6" paragraph>
                    <strong>Advisory Role:</strong>
                </Typography>
                <Typography variant="body8" paragraph>
                    The Pakistan Credit Rating Agency (July 01, 2022 – Present)<br />
                    Advisor for Moody’s International Risk Management Products Implementation
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
