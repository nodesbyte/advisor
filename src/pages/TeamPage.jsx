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

const teamMembers = [
    {
        name: "Tahir Hassan Qureshi",
        title: "Senior Partner",
        email: "tahir@irthadvisors.com",
        image: profile1,
        bio: (
            <>
                <Typography variant="body2" paragraph>
                    <strong>Mr. Tahir Hassan Qureshi</strong>, based in the UK, is a
                    fellow of the Institute of Chartered Accountants of Pakistan and a
                    member of the UK’s Institute of Chartered Public Finance and
                    Accountancy. With over 33 years of diversified experience—28 of which
                    are in senior banking roles (CEO, COO, CFO, CIA)—he brings deep
                    expertise in compliance, AML/CFT, and risk management. He has led one
                    of Pakistan’s major banks with 4.5 million customers and serves on the
                    AML supervisory and appellate boards of ICAP, supporting FATF
                    compliance. He also advises Pakistan Credit Rating Agency on Moody’s
                    Risk Management Solutions.
                </Typography>
                <Typography variant="body2" paragraph>
                    As a Certified Director and independent board member, he helps
                    organizations enhance governance, oversight, and strategic direction.
                </Typography>
            </>
        ),
        experience: (
            <>
                <Typography variant="subtitle1" fontWeight="bold">
                    Board & Advisory Experience
                </Typography>
                <Typography variant="body2" paragraph>
                    <strong>Non-Executive Director:</strong>
                    <br />
                    Habib Allied Holding Bank UK (2017–2020)
                    <br />
                    ABL Asset Management Co. (2017–2020)
                    <br />
                    1-Link (Pvt) Ltd. (2016–2017)
                    <br />
                    Akhuwat Housing Finance Co. Ltd. (2021–Present)
                </Typography>
                <Typography variant="body2" paragraph>
                    <strong>Independent Director:</strong>
                    <br />
                    Pakistan Corporate Restructuring Co. Ltd. (2020)
                    <br />
                    Pakistan Security Printing Corp. (2021–Present)
                    <br />
                    ICAP AML/CFT Supervisory Board (2020–Present)
                    <br />
                    ICAP Appellate Board (2022–Present)
                </Typography>
                <Typography variant="body2" paragraph>
                    <strong>Committee Memberships:</strong>
                    <br />
                    ICAP, Pakistan Banks’ Association, Institute of Bankers Pakistan (IBP)
                    Council, Finance & Investment Committee
                </Typography>
                <Typography variant="body2" paragraph>
                    <strong>Advisory Role:</strong>
                    <br />
                    Pakistan Credit Rating Agency (2022–Present)
                </Typography>
            </>
        )
    },
    {
        name: "Abdul Rauf Shakoori",
        title: "",
        email: "",
        image: profile2,
        bio: <Typography variant="body2">Coming soon...</Typography>,
        experience: null
    },
    {
        name: "Huzaima Bukhari",
        title: "",
        email: "",
        image: "/team/placeholder.jpg",
        bio: <Typography variant="body2">Coming soon...</Typography>,
        experience: null
    },
    {
        name: "Dr. Ikram Ul Haq",
        title: "",
        email: "",
        image: "/team/placeholder.jpg",
        bio: <Typography variant="body2">Coming soon...</Typography>,
        experience: null
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
                        <Typography variant="h6" gutterBottom>
                            {teamMembers[selectedTab].name}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            {teamMembers[selectedTab].title}
                        </Typography>
                        {teamMembers[selectedTab].bio}
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            <strong>Email:</strong> {teamMembers[selectedTab].email}
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
