import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";

// Sample menu items
const menuItems = [
  {
    id: 1,
    name: "Greek Salad",
    category: ["Lunch", "Vegetarian", "Mediterranean"],
    price: "$12.99",
    image: "https://source.unsplash.com/500x300/?salad",
  },
  {
    id: 2,
    name: "Falafel Wrap",
    category: ["Lunch", "Vegan", "Mediterranean"],
    price: "$9.99",
    image: "https://source.unsplash.com/500x300/?falafel",
  },
  {
    id: 3,
    name: "Grilled Chicken",
    category: ["Dinner", "Meat"],
    price: "$14.99",
    image: "https://source.unsplash.com/500x300/?grilled-chicken",
  },
  {
    id: 4,
    name: "Chocolate Cake",
    category: ["Dessert", "Sugary"],
    price: "$6.99",
    image: "https://source.unsplash.com/500x300/?chocolate-cake",
  },
  {
    id: 5,
    name: "Pasta Primavera",
    category: ["Dinner", "Vegetarian"],
    price: "$11.99",
    image: "https://source.unsplash.com/500x300/?pasta",
  },
  {
    id: 6,
    name: "Avocado Toast",
    category: ["Breakfast", "Vegan"],
    price: "$8.99",
    image: "https://source.unsplash.com/500x300/?avocado-toast",
  },
];

// Categories for filter
const categories = {
  Meals: ["Breakfast", "Lunch", "Dinner"],
  Diet: ["Vegetarian", "Vegan", "Meat"],
  Flavor: ["Mediterranean", "Salty", "Sugary"],
};

const OrderItems = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter menu items based on selected category
  const filteredItems = selectedCategory
    ? menuItems.filter((item) => item.category.includes(selectedCategory))
    : menuItems;

  return (
    <Container sx={{ py: 5 }}>
        <Typography
                  variant="h4"
                  fontWeight="bold"
                  textAlign="center"
                  mt={5}
                  mb={3}
                  color="#495E57"
                >
                  Order Now 🍽️
                </Typography>
      {/* Dropdown Filter */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Filter by Category</InputLabel>
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <MenuItem value="">All Items</MenuItem>
            {Object.entries(categories).map(([group, items]) => (
              <optgroup key={group} label={group}>
                {items.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </optgroup>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Menu Items */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            sx={{ width: 300, borderRadius: 3, boxShadow: 3 }}
          >
            {/* Image - Landscape but smaller */}
            <CardMedia
              component="img"
              sx={{ width: "100%", height: 180, objectFit: "cover" }}
              image={item.image}
              alt={item.name}
            />

            {/* Text Below */}
            <CardContent sx={{ textAlign: "center", p: 2 }}>
              <Typography variant="h6" fontWeight="bold">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.category.join(", ")}
              </Typography>
            </CardContent>

            {/* Price & Order Button */}
            <CardActions sx={{ justifyContent: "center", pb: 2 }}>
              <Typography variant="h6" fontWeight="bold" color="primary">
                {item.price}
              </Typography>
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
  );
};

export default OrderItems;
