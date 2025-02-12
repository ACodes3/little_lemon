import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import React from "react";

// Specials data
const specials = [
  {
    name: "Mediterranean Grilled Salmon",
    description:
      "Freshly grilled salmon with a lemon-garlic butter sauce, served with roasted vegetables.",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$24.99",
  },
  {
    name: "Lemon Herb Chicken",
    description:
      "Juicy chicken breast marinated in citrus and Mediterranean spices, served with couscous.",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$22.99",
  },
  {
    name: "Spaghetti al Limone",
    description:
      "Handmade pasta tossed in a creamy lemon and parmesan sauce with fresh basil.",
    image:
      "https://images.unsplash.com/photo-1589227365533-cee630bd59bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$24.99",
  },
  {
    name: "Greek Mezze Platter",
    description:
      "A selection of hummus, tzatziki, stuffed grape leaves, and warm pita.",
    image:
      "https://plus.unsplash.com/premium_photo-1663853051820-128971c46c4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$18.99",
  },
  {
    name: "Zesty Shrimp Tacos",
    description:
      "Grilled shrimp with a tangy slaw, avocado, and a squeeze of fresh lime.",
    image:
      "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$22.99",
  },
  {
    name: "Baklava Cheesecake",
    description:
      "A fusion of classic cheesecake with flaky baklava layers, drizzled with honey.",
    image:
      "https://images.unsplash.com/photo-1708175313856-8573b2bf8a3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$8.99",
  },
];

const Specials = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: "#fdf8ea" }}>
      <Container>
        <Typography
          variant="h4"
          color="#495E57"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
          marginBottom={4}
        >
          Today's Specials{" "}
          <DinnerDiningIcon fontSize="large" sx={{ color: "#495E57", ml: 1 }} />
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {specials.map((special) => (
            <Grid item key={special.name} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  maxWidth: 345,
                  mx: "auto",
                  boxShadow: 3,
                  borderRadius: 3,
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={special.image}
                  alt={special.name}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {special.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {special.description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Button
                    size="small"
                    sx={{ color: "#495E57", fontWeight: "bold" }}
                  >
                    Order Now
                  </Button>
                  <Typography
                    variant="h6"
                    color="#495E57"
                    sx={{ marginLeft: "auto" }}
                  >
                    {special.price}
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center" mt={4}>
          <Button
            variant="contained"
            href="/menu"
            sx={{
              backgroundColor: "#f4ce14",
              color: "#495E57",
              fontSize: "1.1rem",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#e4be10" },
            }}
          >
            View Full Menu
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Specials;
