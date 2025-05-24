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
                                color: "#BC9A87", // hover effect
                            },
                        },
                        "& .Mui-selected": {
                            color: "#BC9A87 !important", // selected tab text color
                            fontWeight: "bold",
                        },
                        "& .MuiTabs-indicator": {
                            backgroundColor: "#BC9A87", // tab underline
                        },
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
