import { Box, Container, Typography } from "@mui/material";
import React from "react";
import HTMLFlipBook from "react-pageflip";
import LemonLogo from "../../images/fruit.png";

const MenuComponent = () => {
  return (
    <Container
      maxWidth="lg"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        mt: 6,
        mb: 12,
        height: "100vh",
      }}
    >
      <HTMLFlipBook
        width={550}
        height={700}
        showCover={true}
        showPageCorners={true}
        style={{
          marginTop: "30px",
          padding: "0 10px", // Creates space between the pages
        }}
        autoSize={true}
      >
        {/* Cover Page */}
        <Box
          sx={{
            padding: 3,
            backgroundColor: "#495E57",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100%",
            color: "white",
            position: "relative",
            textAlign: "center",
          }}
        >
          <img
            src={LemonLogo}
            alt="Lemon Logo"
            style={{
              width: "120px",
              height: "auto",
              marginBottom: "30px",
              marginTop: "50px",
            }}
          />
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "'Pacifico', cursive",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            Little Lemons Menu
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, fontSize: "18px" }}>
            Fresh and Tasty Dishes Await You - Click to Open
          </Typography>
        </Box>

        {/* Page 1 */}
        <Box
          sx={{
            padding: 3,
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: 2,
            marginRight: "20px", // Add margin to create space between pages
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: "#333" }}>
            Menu Page 2
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Item 1: Description
          </Typography>
          <Typography variant="body1" sx={{ color: "gray", lineHeight: 1.5 }}>
            A delicious dish with a unique flavor profile, served with fresh
            ingredients.
          </Typography>
        </Box>

        {/* Page 2 */}
        <Box
          sx={{
            padding: 3,
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: 2,
            marginLeft: "20px", // Add margin to create space between pages
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: "#333" }}>
            Menu Page 2
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Item 2: Description
          </Typography>
          <Typography variant="body1" sx={{ color: "gray", lineHeight: 1.5 }}>
            A delicious dish with a unique flavor profile, served with fresh
            ingredients.
          </Typography>
        </Box>

        {/* Additional Pages */}
      </HTMLFlipBook>
    </Container>
  );
};

export default MenuComponent;
