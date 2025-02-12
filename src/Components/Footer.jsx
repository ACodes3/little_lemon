import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Grid2 as Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import LogoImg from "../images/fruit.png";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#495E57", color: "white", py: 6, pt: 5 }}>
      <Container maxWidth="xl">
        {" "}
        {/* Wider Container */}
        <Grid container spacing={6} justifyContent="space-between">
          {/* About Section */}
          <Grid item xs={12} sm={4} sx={{ flexGrow: 1 }}>
            <Box
              sx={{ display: "flex", alignItems: "center" }}
              marginBottom={2}
            >
              <img
                src={LogoImg}
                alt="Logo"
                style={{ height: "40px", marginRight: "10px" }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  fontFamily: "'Pacifico', cursive",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Little Lemon
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "#bbb", maxWidth: 400 }}>
              Experience the finest Mediterranean cuisine with fresh ingredients
              and unforgettable flavors.
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={4} sx={{ flexGrow: 1 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {["Home", "About Us", "Menu", "Reservations", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    sx={{
                      color: "#bbb",
                      textDecoration: "none",
                      transition: "color 0.3s",
                      "&:hover": { color: "#f4ce14" },
                    }}
                  >
                    {item}
                  </Link>
                )
              )}
            </Box>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} sm={3} sx={{ textAlign: "center", flexGrow: 1 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              {[
                { icon: <Facebook />, link: "https://facebook.com" },
                { icon: <Twitter />, link: "https://twitter.com" },
                { icon: <Instagram />, link: "https://instagram.com" },
              ].map((social) => (
                <IconButton
                  key={social.link}
                  href={social.link}
                  target="_blank"
                  sx={{
                    color: "white",
                    transition: "transform 0.3s, color 0.3s",
                    "&:hover": { transform: "scale(1.2)", color: "#f4ce14" },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
        {/* Divider & Copyright */}
        <Divider sx={{ my: 4, backgroundColor: "#555" }} />
        <Typography variant="body2" align="center" sx={{ color: "#bbb" }}>
          © {new Date().getFullYear()} Little Lemon. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
