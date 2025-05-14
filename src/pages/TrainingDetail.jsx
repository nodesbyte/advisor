import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, Paper } from "@mui/material";

// Example data for training (replace with dynamic data or API call)
const trainings = [
  {
    slug: "training-needs-analysis",
    title: "Training Needs Analysis",
    description: "Assess employee training needs for skill gaps.",
  },
  {
    slug: "training-manuals",
    title: "Training Manuals",
    description: "Prepare manuals tailored to company needs.",
  },
  // Add other trainings here
];

const TrainingDetail = () => {
  const { slug } = useParams(); // Get the slug from the URL

  // Find the training based on the slug
  const training = trainings.find((t) => t.slug === slug);

  if (!training) {
    return <Typography variant="h5">Training not found</Typography>;
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Paper elevation={4} sx={{ padding: 3 }}>
        <Typography variant="h4">{training.title}</Typography>
        <Typography variant="body1">{training.description}</Typography>
      </Paper>
    </Box>
  );
};

export default TrainingDetail;
