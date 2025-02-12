import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import L from 'leaflet'; // Import Leaflet for icon configuration
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet CSS is imported
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const ContactComponent = () => {
  // Define the marker icon
  const markerIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
  });

  return (
    <Box sx={{ padding: 3 }}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={4} marginTop={4} marginBottom={2}>
        {/* Left: Contact Form */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" gutterBottom marginBottom={2}>
            Contact Us
          </Typography>
          <form>
            <Stack spacing={2}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                placeholder="Your Name"
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                placeholder="Your Email"
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                placeholder="Your Message"
                multiline
                rows={4}
              />
              <Button variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Stack>
          </form>
        </Box>

        {/* Right: Map (Leaflet) */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" gutterBottom>
            Our Location
          </Typography>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '400px', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Apply the marker with the custom icon */}
            <Marker position={[51.505, -0.09]} icon={markerIcon}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </Box>
      </Stack>
    </Box>
  );
};

export default ContactComponent;
