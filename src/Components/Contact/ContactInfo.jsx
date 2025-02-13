import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const ContactInfo = () => {
  return (
    <Container sx={{ marginBottom: 3 }}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        spacing={4}
      >
        <Box flex={1} display="flex" alignItems="center" mb={{ xs: 4, md: 0 }}>
          <Box>
            <Typography variant="h6" color="#495E57">Location 1</Typography>
            <Typography display="flex" alignItems="center">
              <LocationOnIcon color="primary" style={{ marginRight: 4 }} />
              123 Main St, Cityville, ST 12345
            </Typography>
            <Typography display="flex" alignItems="center">
              <PhoneIcon style={{ marginRight: 4 }} />
              (123) 456-7890
            </Typography>
          </Box>
        </Box>

        <Box flex={1} display="flex" alignItems="center">
          <Box>
            <Typography variant="h6" color="#495E57">Location 2</Typography>
            <Typography display="flex" alignItems="center">
              <LocationOnIcon color="primary" />
              456 Elm St, Townsville, ST 67890
            </Typography>
            <Typography>
              <PhoneIcon /> (987) 654-3210
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactInfo;
