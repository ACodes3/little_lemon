import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    Typography,
} from "@mui/material";
import React from "react";

const chefsData = [
  {
    name: "Chef Donna Doe",
    avatar: "https://img.freepik.com/free-photo/looking-side-middle-aged-female-cook-chef-uniform-holding-ladle-points-finger-up-isolated-yellow-wall-with-copy-space_141793-36822.jpg?t=st=1739388243~exp=1739391843~hmac=9b56fba06255aadb0780758054e24e9ecc001aeee7f2e45e2886987b3fbff6c9&w=996",
    title: "Head Chef",
    experience: "15 years",
  },
  {
    name: "Chef Jane Smith",
    avatar: "https://img.freepik.com/free-photo/cheerful-middle-aged-woman-with-curly-hair_1262-20859.jpg?t=st=1739388055~exp=1739391655~hmac=108b59b85b4810857cc79f8c5c1bf4bcfd54b7fb4bc348e3234953a3d21e1d6d&w=1060",
    title: "Sous Chef",
    experience: "10 years",
  },
  {
    name: "Chef Emily Johnson",
    avatar: "https://img.freepik.com/free-photo/caring-lovely-happy-middle-aged-redhead-woman-cross-arms-chest-smiling-joyfully-talking-lively-discuss-child-grades-school-teacher-grinning-laughing-have-interesting-conversation-white-wall_176420-37722.jpg?t=st=1739388125~exp=1739391725~hmac=61352d3e9543064df0ed702903413a3e369adf20b81ab67dd60e51b9aa52b801&w=1060",
    title: "Pastry Chef",
    experience: "8 years",
  },
];

const Chefs = () => {
  return (
    <Container maxWidth="lg"> 
      <Typography variant="h4" gutterBottom marginTop={4}>
        Our Chefs
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        gap={4}
        marginBottom={4}
      >
        {chefsData.map((chef, index) => (
          <Box key={chef.name} width={{ xs: "100%", sm: "48%", md: "30%" }} marginBottom={4} marginTop={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={chef.avatar}
                alt={`${chef.name}'s avatar`}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {chef.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {chef.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {chef.experience} of experience
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Chefs;
