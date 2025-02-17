import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";

// Sample menu items
const menuItems = [
  {
    id: 1,
    name: "Greek Salad",
    category: ["Lunch", "Vegetarian", "Mediterranean"],
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1606735584785-1848fdcaea57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Falafel Wrap",
    category: ["Lunch", "Vegan", "Mediterranean"],
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1547058881-aa0edd92aab3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Grilled Chicken",
    category: ["Dinner", "Meat"],
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Chocolate Cake",
    category: ["Dessert", "Sugary"],
    price: "$6.99",
    image: "https://plus.unsplash.com/premium_photo-1716152291350-4137853b4a73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Pasta Primavera",
    category: ["Dinner", "Vegetarian"],
    price: "$11.99",
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Avocado Toast",
    category: ["Breakfast", "Vegan"],
    price: "$8.99",
    image: "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
