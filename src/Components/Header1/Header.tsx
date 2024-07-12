import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, NavLink } from "react-router-dom";

const pages = [
  { title: "Home", path: "/" },
  { title: "What we treat", path: "work" },
  { title: "About us", path: "about" },
  { title: "Testimonials", path: "testimonial" },
  { title: "Our Gallery", path: "gallery" },
  { title: "Blog", path: "news" },
  { title: "Contact Us", path: "consultation" },
];

const Header = () => {
  const [activeLink, setActiveLink] = React.useState("");
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setActiveLink("");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        position: "absolute",
        zIndex: "99999",
        boxShadow: "none",
        paddingLeft: { lg: "100px", md: "80px", sm: "0px", xs: "0px" },
        paddingRight: { lg: "100px", md: "80px" },
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            display: { lg: "flex", md: "block" },
          }}
        >
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Bold",
              fontWeight: 600,
              fontSize: "32px",
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            ALIGNRADIANCE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                position: "absolute",
                zIndex: 9999,
              }}
            >
              {pages.map((page) => (
                <MenuItem onClick={handleCloseNavMenu}>
                  <a href={`#${page.path}`}>
                    <Typography
                      textAlign="center"
                      sx={{
                        fontFaimly: "Regular",
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "31px",
                        color: {
                          lg: "#ffffff",
                          md: "#ffffff",
                          sm: "#000000",
                          xs: "#000000",
                        },
                        display: "inline-block",
                        textTransform: "capitalize",
                      }}
                    >
                      {page.title}
                    </Typography>
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFaimly: "Bold",
              fontWeight: 600,
              lineHeight: "31px",
              fontSize: "32px",
              // color: "inherit",
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            ALIGNRADIANCE
          </Typography>
          <Box
            sx={{
              flexGrow: 0,
              gap: "1.5rem",
              display: {
                xs: "none",
                md: "flex",
                backgroundColor: "transparent",
              },
            }}
          >
            {pages.map((page) => (
              <a href={`#${page.path}`}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: {
                      lg: "#ffffff",
                      md: "#ffffff",
                      sm: "#000000",
                      xs: "#000000",
                    },
                    // display: "block",
                    fontFaimly: "Regular",
                    fontWeight: 400,
                    lineHeight: "31px",
                    fontSize: "18px",
                    display: "inline-block",
                    textTransform: "capitalize",
                  }}
                >
                  {page.title}
                </Button>
              </a>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
