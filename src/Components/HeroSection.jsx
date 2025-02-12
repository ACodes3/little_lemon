import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import HeroImg from "../images/restaurant-interior.jpg"; // Ensure the path is correct

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${HeroImg})`, // ✅ Fix: Correct syntax for background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        position: "relative",
        px: 2,
      }}
    >
      {/* Overlay for better text readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
        }}
      />

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Welcome to{" "}
          <Box
            component="span"
            sx={{
              fontFamily: "'Pacifico', cursive", // Stylish font for "Little Lemon"
              color: "#F4CE14", // Standout yellow
              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)", // Add shadow for better contrast
            }}
          >
            Little Lemon
          </Box>
        </Typography>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Fresh ingredients, authentic flavors, unforgettable experiences.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f4ce14",
            color: "#495E57",
            fontSize: "1.2rem",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#e4be10" },
          }}
          href="/reservations"
        >
          <Typography variant="p">
            Reserve a table
          </Typography>
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
