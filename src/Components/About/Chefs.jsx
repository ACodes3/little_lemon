import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";

const chefsData = [
  {
    name: "Chef Donna Doe",
    avatar:
      "https://images.unsplash.com/photo-1556911073-52527ac43761?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Head Chef",
    experience: "15 years",
  },
  {
    name: "Chef Jane Smith",
    avatar:
      "https://plus.unsplash.com/premium_photo-1694557827515-076e0b5aa898?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Sous Chef",
    experience: "10 years",
  },
  {
    name: "Chef Emily Johnson",
    avatar:
      "https://images.unsplash.com/photo-1659354218647-bcd2a58ecd8e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Pastry Chef",
    experience: "8 years",
  },
];

const Chefs = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom marginTop={4} color="#495E57">
        Our Chefs
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        gap={4}
        marginBottom={4}
      >
        {chefsData.map((chef, index) => (
          <Box
            key={chef.name}
            width={{ xs: "100%", sm: "48%", md: "30%" }}
            marginBottom={4}
            marginTop={4}
          >
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={chef.avatar}
                alt={`${chef.name}'s avatar`}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {chef.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {chef.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {chef.experience} of experience
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Chefs;
