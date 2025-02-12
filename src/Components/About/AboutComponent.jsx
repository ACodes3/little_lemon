import { Box, Container, Typography } from "@mui/material";
import React from "react";

const AboutComponent = () => {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          display="flex"
          alignItems="center"
        >
          <Typography
            variant="h3"
            component="a"
            color="#F4CE14"
            href="/"
            sx={{
              mr: 2, // This margin should give space between "About" and "Little Lemon"
              fontFamily: "'Pacifico', cursive",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#F4CE14",
              textDecoration: "none",
              display: { xs: "inline", md: "inline-flex" }, // Adjusting the display on mobile
            }}
          >
            About Little Lemon 
          </Typography>{" "}
          
        </Typography>

        <Typography variant="body1" gutterBottom>
          Welcome to Little Lemon Restaurant, where we serve the finest
          Mediterranean cuisine in a cozy and inviting atmosphere. Our mission
          is to provide our guests with an unforgettable dining experience,
          combining delicious food, exceptional service, and a warm, welcoming
          environment.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Little Lemon was founded in 1995 by the passionate chef and
          restaurateur, Maria Lemonis. Inspired by her grandmother's traditional
          recipes and the vibrant flavors of the Mediterranean, Maria set out to
          create a restaurant that would bring a taste of her heritage to the
          local community.
        </Typography>
        <Typography variant="body1" gutterBottom>
          At Little Lemon, we use only the freshest ingredients, sourced locally
          whenever possible, to create our mouth-watering dishes. From our
          signature lemon chicken to our delectable baklava, every item on our
          menu is crafted with care and passion.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Our restaurant is steeped in tradition, with many of our recipes
          passed down through generations. We believe in the importance of
          family, community, and sharing meals together, and we strive to create
          an atmosphere that reflects these values.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Whether you're joining us for a casual lunch, a romantic dinner, or a
          special celebration, we strive to make every visit memorable. Thank
          you for choosing Little Lemon Restaurant, and we look forward to
          serving you soon!
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutComponent;
