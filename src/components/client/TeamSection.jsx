import React, { useState, useEffect } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Link,
  CircularProgress,
} from "@mui/material";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { firebaseApp } from "../../services/firebaseConfig";

const firestore = getFirestore(firebaseApp);

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const teamCollection = collection(firestore, "team");

    const unsubscribe = onSnapshot(teamCollection, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Sort by createdAt descending
      data.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));

      setTeamMembers(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", py: 10 }}>
        <CircularProgress sx={{ color: "#BC9A87" }} />
        <Typography variant="body1" mt={2}>
          Loading team members...
        </Typography>
      </Box>
    );
  }

  if (teamMembers.length === 0) {
    return (
      <Box sx={{ textAlign: "center", py: 10 }}>
        <Typography variant="h6">No team members found.</Typography>
      </Box>
    );
  }

  const selectedMember = teamMembers[selectedTab];

  return (
    <Box sx={{ maxWidth: "1000px", mx: "auto", mt: 8, px: 2, pb: 12 }}>
      <Typography variant="h4" align="center" gutterBottom>
        <h2 className="text-3xl font-bold text-[#814d35] mb-10 font-lisu">
          Meet our Team
        </h2>
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
              color: "#000",
              transition: "color 0.3s ease",
              "&:hover": { color: "#BC9A87" },
            },
            "& .Mui-selected": {
              color: "#BC9A87 !important",
              fontWeight: "bold",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#BC9A87",
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
            src={selectedMember.image}
            alt={selectedMember.name}
            sx={{
              width: 150,
              height: 150,
              mr: [0, 3],
              mb: [2, 0],
              alignSelf: "center",
            }}
          />
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {selectedMember.name}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {selectedMember.title}
            </Typography>
            <Typography variant="body2" paragraph>
              {selectedMember.bio}
            </Typography>

            {selectedMember.links && selectedMember.links.length > 0 && (
              <Box sx={{ mt: 1 }}>
                {selectedMember.links.map((link, i) => (
                  <Box key={i} sx={{ display: "inline", mr: 2 }}>
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      color="primary"
                    >
                      {link.label}
                    </Link>
                  </Box>
                ))}
              </Box>
            )}

            <Typography variant="body2" sx={{ mt: 2 }}>
              <strong>Email:</strong>{" "}
              <Link href={`mailto:${selectedMember.email}`} underline="hover" color="primary">
                {selectedMember.email}
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default TeamSection;
