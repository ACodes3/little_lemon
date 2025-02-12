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
    image: "https://img.freepik.com/free-photo/tortilla_144627-20848.jpg?t=st=1739374611~exp=1739378211~hmac=fc73eaaaefbe2316f5ac2b978353b4a97253af4d2988eefc08b9137c6cee712c&w=1060",
  },
  Tuesday: {
    item: "Seafood Pasta",
    discount: "Buy 1 Get 1 Free",
    image: "https://img.freepik.com/free-photo/freshly-cooked-linguini-with-prawn-seafood-generated-by-ai_188544-18064.jpg?t=st=1739374578~exp=1739378178~hmac=b3471614c095eb30aa781912a6f5511f4c8b6c48552f87edf9119cfd762d052f&w=1380",
  },
  Wednesday: {
    item: "Lemon Herb Salmon",
    discount: "15% Off",
    image: "https://img.freepik.com/free-photo/grilled-salmon-fillet-with-asparagus-lemon-wedges-plate_9975-124447.jpg?t=st=1739374535~exp=1739378135~hmac=7cafe081bbdc4eae2123ec4ec31b455d7c2a983a8e70373735fcaf4420961fc8&w=1380",
  },
  Thursday: {
    item: "Mediterranean Platter",
    discount: "Free Dessert",
    image: "https://img.freepik.com/free-photo/antipasto-catering-platter-with-bacon-jerky-sausage-blue-cheese-grapes-wooden-table-top-view_2829-5496.jpg?t=st=1739374659~exp=1739378259~hmac=698665daa966c8c3eac1a529a98e0d5f9f8d28a4403d92bd9c5e6dff41762002&w=1060",
  },
  Friday: {
    item: "Margarita Pizza",
    discount: "Happy Hour Special",
    image: "https://img.freepik.com/free-photo/top-view-delicious-pizza-with-fresh-cheese_23-2150096953.jpg?t=st=1739374751~exp=1739378351~hmac=697efe1a5e48aa462c5ef11a10d78428bd9aa4ca1382efb96e1e42d0d41fbcad&w=1060",
  },
  Saturday: {
    item: "Steak & Fries",
    discount: "25% Off",
    image: "https://img.freepik.com/free-photo/portion-beefsteak-dining-meal-barbecued_1172-322.jpg?t=st=1739374704~exp=1739378304~hmac=e69041d6c9a3a747508a405b056ee809ef2c69e495c2baf1d5f1864b5c5b2770&w=1060",
  },
  Sunday: {
    item: "Brunch Buffet",
    discount: "Kids Eat Free",
    image: "https://img.freepik.com/free-photo/delicious-breakfast-table-with-salad-fried-eggs-pastry-side-view-white-background_176474-3625.jpg?t=st=1739374780~exp=1739378380~hmac=037a39a76f72bf3d34791d419c102afb30ca781ccf9bb6c125f7dc23ab6ddc63&w=1060",
  },
};

// Sample special offers with images
const specialOffers = [
  {
    item: "Family Feast Combo",
    details: "Only $29.99 (Serves 4)",
    image: "https://img.freepik.com/free-photo/happy-man-carving-meat-thanksgiving-dinner-dining-table_637285-10139.jpg?t=st=1739374820~exp=1739378420~hmac=18c8bc61353dc85a65329f1210985e0850fe5daf48035f2da38d8c9c7812a42c&w=1060",
  },
  {
    item: "Wine Night",
    details: "Half-price on all bottles",
    image: "https://img.freepik.com/free-photo/hands-with-glasses-champagne-family-couple-close-up_8353-6770.jpg?t=st=1739374868~exp=1739378468~hmac=4517bf11af0453cbb737948bc24f16ad056d5f364fc2f2c85354ee7191339c30&w=1060",
  },
  {
    item: "Student Discount",
    details: "10% Off with Student ID",
    image: "https://img.freepik.com/free-photo/food-drinks_1122-1994.jpg?t=st=1739374904~exp=1739378504~hmac=ae961812778e48aa073a0063e508c855d4a45ee82aebf48aae22d90a193fc035&w=1060",
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
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
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
