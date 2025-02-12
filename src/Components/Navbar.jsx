import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Person";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import LogoImg from "../images/fruit.png";

const pages = ["Home", "About", "Menu", "Reservations", "Order Online", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#495E57", width: "100%" }}>
      <Container maxWidth="xl" sx={{ width: "100%" }}>
        <Toolbar disableGutters>
          {/* Logo */}
          <img src={LogoImg} alt="Logo" style={{ height: "40px", marginRight: "10px" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "'Pacifico', cursive",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Little Lemon
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  backgroundColor: "#495E57", // Menu background color
                  width: "100%", // Full-width menu
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ textAlign: "center" }}>
                  <Typography sx={{ color: "white", textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu} sx={{ color: "white" }}>
                {page}
              </Button>
            ))}
          </Box>

          {/* Avatar or Login Icon */}
          <Tooltip title={isLoggedIn ? "Open settings" : "Login"}>
            <IconButton onClick={handleOpenUserMenu} sx={{ ml: 2 }}>
              {isLoggedIn ? <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" /> : <LoginIcon sx={{ color: "white" }} />}
            </IconButton>
          </Tooltip>

          {/* User Menu */}
          <Menu
            anchorEl={anchorElUser}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {isLoggedIn ? (
              settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>{setting}</Typography>
                </MenuItem>
              ))
            ) : (
              <MenuItem onClick={() => setIsLoggedIn(true)}>
                <Typography>Login</Typography>
              </MenuItem>
            )}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
