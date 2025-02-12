import { keyframes } from "@emotion/react";
import { Avatar, Box, Card, CardContent, CardHeader, Container, Grid2 as Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

// Sample testimonials data
const testimonials = [
  {
    name: "John Doe",
    testimonial:
      "The food at Little Lemon is absolutely amazing! Fresh, flavorful, and truly authentic. Every bite takes me back to the Mediterranean.",
    avatar: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jane Smith",
    testimonial:
      "I love the Mediterranean dishes here, especially the grilled salmon. The atmosphere is cozy and inviting, perfect for a night out with friends.",
    avatar: "https://plus.unsplash.com/premium_photo-1705018501151-4045c97658a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mark Johnson",
    testimonial:
      "Little Lemon is my go-to spot for family dinners. The food is always fresh, and the service is excellent. Highly recommend! No regrets!",
    avatar: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const TestimonialCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: "auto",
  borderRadius: 10,
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  animation: `${fadeIn} 0.6s ease-in-out`,
  "&:hover": {
    boxShadow: "0 6px 30px rgba(0, 0, 0, 0.15)",
  },
}));

const Testimonials = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: "#fdf8ea" }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom marginBottom={4}>
          Our Customers Love Us 💬
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item key={testimonial.name} xs={12} sm={6} md={4}>
              <TestimonialCard>
                <CardHeader
                  avatar={<Avatar alt={testimonial.name} src={testimonial.avatar} />}
                  title={testimonial.name}
                  sx={{ backgroundColor: "#495E57", color: "white", textAlign: "center" }}
                />
                <CardContent sx={{ padding: "2rem", textAlign: "center", color: "#495E57" }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
                    "{testimonial.testimonial}"
                  </Typography>
                </CardContent>
              </TestimonialCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
