import React from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Box,
  Paper,
  Divider,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

// Local images
import tna from "../assets/trainings/tna.jpg";
import manuals from "../assets/trainings/trainingm.png";
import syllabi from "../assets/trainings/Customized-Training-Syllabi.jpg";
import workshops from "../assets/trainings/Practical-Application.jpg";
import compliance from "../assets/trainings/compliance.jpg";
import support from "../assets/trainings/ongoing.jpg";

// Updated and expanded training list with local images
const trainings = [
  {
    slug: "training-needs-analysis",
    title: "Training Needs Analysis",
    description: "Assess employee training needs for skill gaps.",
    objectives: [
      "Identify skill gaps in teams",
      "Align training with organizational goals",
      "Develop an action plan for employee development",
    ],
    targetAudience: "HR professionals, team leads, training managers",
    duration: "2 days",
    mode: "On-site / Virtual",
    image: tna,
  },
  {
    slug: "training-manuals",
    title: "Training Manuals",
    description: "Prepare manuals tailored to company needs.",
    objectives: [
      "Understand components of effective manuals",
      "Design user-friendly content and layouts",
      "Ensure alignment with SOPs and compliance standards",
    ],
    targetAudience: "Instructional designers, trainers, HR teams",
    duration: "1 day",
    mode: "Virtual",
    image: manuals,
  },
  {
    slug: "customized-syllabi",
    title: "Customized Training Syllabi",
    description: "Develop training syllabi tailored to department goals.",
    objectives: [
      "Collaborate with departments for relevant content",
      "Align syllabus with KPIs and goals",
      "Structure content for optimal learning paths",
    ],
    targetAudience: "Learning & Development, Team Leads",
    duration: "2 days",
    mode: "Hybrid",
    image: syllabi,
  },
  {
    slug: "practical-application-workshops",
    title: "Practical Application Workshops",
    description: "Hands-on workshops to implement training concepts.",
    objectives: [
      "Apply theoretical knowledge through case studies",
      "Use simulations and role-playing",
      "Measure real-time performance and feedback",
    ],
    targetAudience: "All staff levels",
    duration: "1.5 days",
    mode: "On-site",
    image: workshops,
  },
  {
    slug: "compliance-training",
    title: "Compliance & Policy Training",
    description: "Ensure employees understand compliance requirements.",
    objectives: [
      "Understand local and global compliance laws",
      "Follow ethical codes of conduct",
      "Prevent violations through awareness",
    ],
    targetAudience: "All employees",
    duration: "1 day",
    mode: "Virtual / On-site",
    image: compliance,
  },
  {
    slug: "ongoing-support",
    title: "OngoingSupport",
    description: "Continuous training support post-deployment.",
    objectives: [
      "Track training progress over time",
      "Provide feedback and refreshers",
      "Support long-term learning goals",
    ],
    targetAudience: "All teams",
    duration: "Monthly or Quarterly",
    mode: "Virtual",
    image: support,
  },
];


const TrainingDetail = () => {
  const { slug } = useParams();
  const training = trainings.find((t) => t.slug === slug);

  if (!training) {
    return <Typography variant="h5">Training not found</Typography>;
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Paper elevation={6} sx={{ padding: 3, borderRadius: 4 }}>
        <Grid container spacing={4}>
          {/* Image Section */}
          <Grid item xs={12} md={5}>
            <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
              <CardMedia
                component="img"
                height="300"
                image={training.image}
                alt={training.title}
              />
            </Card>
          </Grid>

          {/* Text Details Section */}
          <Grid item xs={12} md={7}>
            <Typography variant="h3" gutterBottom>
              {training.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {training.description}
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Card variant="outlined" sx={{ mb: 2, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6">Objectives</Typography>
                <ul style={{ marginLeft: "1.2rem" }}>
                  {training.objectives.map((obj, i) => (
                    <li key={i}>
                      <Typography variant="body2">{obj}</Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card variant="outlined" sx={{ borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="subtitle2" color="text.secondary">
                      Target Audience
                    </Typography>
                    <Typography variant="body2">{training.targetAudience}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Card variant="outlined" sx={{ borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="subtitle2" color="text.secondary">
                      Duration
                    </Typography>
                    <Typography variant="body2">{training.duration}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Card variant="outlined" sx={{ borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="subtitle2" color="text.secondary">
                      Mode
                    </Typography>
                    <Typography variant="body2">{training.mode}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default TrainingDetail;
