// TrainingDetail.jsx
import React, { useState, useEffect } from "react";
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
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";
import { firebaseApp } from "../../services/firebaseConfig";

const TrainingDetail = () => {
  const { slug } = useParams();
  const [training, setTraining] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const firestore = getFirestore(firebaseApp);
    const trainingsCollection = collection(firestore, "trainings");
    const q = query(trainingsCollection, where("slug", "==", slug));

    // 🔹 Real-time listener
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const docData = snapshot.docs[0].data();
        setTraining({ id: snapshot.docs[0].id, ...docData });
      } else {
        setTraining(null);
      }
      setLoading(false);
    });

    return () => unsubscribe(); // cleanup
  }, [slug]);

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600">Loading training details...</p>
      </div>
    );
  }

  if (!training) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600">Training not found.</p>
      </div>
    );
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Paper elevation={6} sx={{ padding: 3, borderRadius: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 4,
            flexWrap: "nowrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
            overflowX: "auto",
          }}
        >
          {/* Text Details Section */}
          <Box sx={{ flex: 1, minWidth: "300px" }}>
            <Typography variant="h3" gutterBottom>
              {training.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {training.description}
            </Typography>

            <Divider sx={{ my: 3 }} />

            {training.objectives && (
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
            )}

            <Grid container spacing={2}>
              {training.targetAudience && (
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
              )}
              {training.duration && (
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
              )}
              {training.mode && (
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
              )}
            </Grid>
          </Box>

          {/* Image Section */}
          {training.image && (
            <Box sx={{ flexShrink: 0 }}>
              <Card sx={{ borderRadius: 3, overflow: "hidden", maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={training.image}
                  alt={training.title}
                />
              </Card>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default TrainingDetail;
