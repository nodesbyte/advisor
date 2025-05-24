import React from "react";

import { Grid, Typography, Box, CardContent, useTheme, useMediaQuery, } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

// Import specific training images
import tna from "../assets/trainings/tna.jpg";
import manuals from "../assets/trainings/trainingm.png";
import syllabi from "../assets/trainings/Customized-Training-Syllabi.jpg";
import workshops from "../assets/trainings/Practical-Application.jpg";
import compliance from "../assets/trainings/compliance.jpg";
import support from "../assets/trainings/ongoing.jpg";

// Trainings array with associated images
const trainings = [
    {
        title: "Training Needs Analysis (TNA)",
        description: "We conduct thorough assessments to identify gaps and areas for improvement in your compliance training programs.",
        slug: "training-needs-analysis",
        image: tna,
    },
    {
        title: "Training Manuals",
        description: "Our experts develop comprehensive training manuals that serve as valuable resources for participants, providing detailed guidance on compliance requirements and best practices.",
        slug: "training-manuals",
        image: manuals,
    },
    {
        title: "Customized Training Syllabi",
        description: "Our team creates customized training syllabi tailored to your organization’s unique requirements and regulatory obligations.",
        slug: "customized-training-syllabi",
        image: syllabi,
    },
    {
        title: "Practical Application",
        description: "We emphasize practical application and real-world scenarios to ensure that participants can apply their knowledge effectively in their day-to-day roles.",
        slug: "practical-workshops",
        image: workshops,
    },
    {
        title: "Regulatory Compliance Training",
        description: "Our training programs cover a wide range of regulatory compliance topics, including anti-money laundering (AML), counter-terrorism financing (CTF), anti-bribery and corruption (ABC), sanctions compliance, and more.",
        slug: "compliance-training",
        image: compliance,
    },
    {
        title: "Ongoing Support",
        description: "Our team provides ongoing support and guidance to help organizations implement and maintain effective compliance training programs.",
        slug: "ongoing-support",
        image: support,
    },
];

// Flip Card Styles
const FlipCard = styled("div")({
    perspective: "1000px",
    width: "100%",
    height: "340px",
    cursor: "pointer",
});

const FlipCardInner = styled("div")({
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    "&:hover": {
        transform: "rotateY(180deg)",
    },
});

const FlipCardFace = styled("div")({
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "12px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "1.5rem",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
});

const FrontFace = styled(FlipCardFace)(() => ({
    backgroundColor: "#ffffff",
    color: "#333",
}));

const BackFace = styled(FlipCardFace)({
    backgroundColor: "#c2a48f",
    color: "#333",
    transform: "rotateY(180deg)",
    textAlign: "center",
});

const TrainingPage = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const navigate = useNavigate();

    const handleCardClick = (slug) => {
        navigate(`/trainings/${slug}`);
    };

    return (
        <Box
            sx={{
                padding: { xs: "2rem 1rem", sm: "4rem 2rem" },
                maxWidth: 1200,
                margin: "0 auto",
                width: "100%",
            }}
        >
            <Typography variant="h4" align="center" gutterBottom>
                Explore Our Trainings
            </Typography>

            <Grid
                container
                spacing={4}
                mt={2}
                sx={{
                    justifyContent: "center",
                    "& .MuiGrid-item": {
                        display: "flex",
                        justifyContent: "center",
                    },
                }}
            >
                {trainings.map((training, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={index}
                        onClick={() => handleCardClick(training.slug)}
                        sx={{
                            maxWidth: { md: "calc(100% / 3 - 32px)" },
                            flexBasis: { md: "calc(100% / 3 - 32px)" },
                            cursor: "pointer",
                        }}
                    >
                        <Box sx={{ width: "100%", maxWidth: "400px" }}>
                            <FlipCard>
                                <FlipCardInner>
                                    {/* Front Side */}
                                    <FrontFace>
                                        <Box
                                            sx={{
                                                width: "100%",
                                                height: "180px",
                                                overflow: "hidden",
                                                borderRadius: "10px",
                                                mb: 2,
                                                "& img": {
                                                    transition: "transform 0.3s ease",
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                },
                                                "&:hover img": {
                                                    transform: "scale(1.05)",
                                                },
                                            }}
                                        >
                                            <img src={training.image} alt={training.title} />
                                        </Box>
                                        <Typography
                                            variant={isSmall ? "body1" : "h6"}
                                            align="center"
                                            sx={{ fontWeight: 500 }}
                                        >
                                            {training.title}
                                        </Typography>
                                    </FrontFace>

                                    {/* Back Side */}
                                    <BackFace>
                                        <CardContent>
                                            <Typography
                                                variant="subtitle1"
                                                fontWeight="600"
                                                gutterBottom
                                            >
                                                {training.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {training.description}
                                            </Typography>
                                        </CardContent>
                                    </BackFace>
                                </FlipCardInner>
                            </FlipCard>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TrainingPage;
