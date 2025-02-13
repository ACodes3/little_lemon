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
import { styled } from "@mui/system";
import React from "react";

// Sample daily promotions with images
const dailyPromotions = {
  Monday: {
    item: "Grilled Chicken Wrap",
    discount: "20% Off",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Tuesday: {
    item: "Seafood Pasta",
    discount: "Buy 1 Get 1 Free",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Wednesday: {
    item: "Lemon Herb Salmon",
    discount: "15% Off",
    image: "https://images.unsplash.com/photo-1560717845-968823efbee1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Thursday: {
    item: "Mediterranean Platter",
    discount: "Free Dessert",
    image: "https://images.unsplash.com/photo-1512654448383-47b2fe224e44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Friday: {
    item: "Margarita Pizza",
    discount: "Happy Hour Special",
    image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Saturday: {
    item: "Steak & Fries",
    discount: "25% Off",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Sunday: {
    item: "Brunch Buffet",
    discount: "Kids Eat Free",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

// Sample special offers with images
const specialOffers = [
  {
    item: "Family Feast Combo",
    details: "Only $29.99 (Serves 4)",
    image: "https://images.unsplash.com/photo-1526016650454-68a6f488910a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    item: "Wine Night",
    details: "Half-price on all bottles",
    image: "https://images.unsplash.com/photo-1562601579-599dec564e06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    item: "Student Discount",
    details: "10% Off with Student ID",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Styled promotion card
const PromotionCard = styled(Card)({
  backgroundColor: "#fff",
  color: "#495E57",
  borderRadius: "12px",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  transition: "0.3s",
  "&:hover": {
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
  },
});

const Promotions = () => {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const todayPromo = dailyPromotions[today];

  return (
    <Box sx={{ py: 5, backgroundColor: "#fdf8ea" }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4} color="#495E57">
          Today's Special 🎉
        </Typography>

        {/* Daily Promotion */}
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8}>
            <PromotionCard
              sx={{ maxWidth: "100%", width: "600px", textAlign: "center" }}
            >
              {/* Image - Wider Aspect Ratio */}
              <CardMedia
                component="img"
                sx={{ width: "100%", height: "280px", objectFit: "cover" }} // Wider and not too tall
                image={todayPromo.image}
                alt={todayPromo.item}
              />

              {/* Text & Button Below */}
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  {todayPromo.item}
                </Typography>
                <Typography variant="h6" color="#FF0000">
                  {todayPromo.discount}
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#f4ce14",
                    color: "#495E57",
                    fontWeight: "bold",
                  }}
                >
                  Order Now
                </Button>
              </CardActions>
            </PromotionCard>
          </Grid>
        </Grid>

        {/* Special Offers */}
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          mt={5}
          mb={3}
          color="#495E57"
        >
          Special Offers 🏷️
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          {specialOffers.map((offer) => (
            <Card
              key={offer.item}
              sx={{ width: 300, borderRadius: 3, boxShadow: 3 }}
            >
              {/* Image - Landscape but smaller */}
              <CardMedia
                component="img"
                sx={{ width: "100%", height: 180, objectFit: "cover" }} // Adjusted size
                image={offer.image}
                alt={offer.item}
              />

              {/* Text Below */}
              <CardContent sx={{ textAlign: "center", p: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                  {offer.item}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {offer.details}
                </Typography>
              </CardContent>

              {/* Button Below */}
              <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#f4ce14",
                    color: "#495E57",
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                  }}
                >
                  Order Now
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Promotions;
