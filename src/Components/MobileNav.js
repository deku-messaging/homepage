import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

function MobileNav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <nav position="static" className="cards">
      <Container
        maxWidth="sm"
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex">
          <img
            src="/Deku.png"
            style={{ width: "35px" }}
            alt="smswithoutborders logo"
          />
          <Typography variant="body1" sx={{ fontWeight: 600, px: 2 }}>
            Deku SMS
          </Typography>
        </Box>{" "}
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0, left: 0 }}>
            <IconButton
              size="large"
              aria-label="menu"
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
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} component="a" href="/">
                <Typography textAlign="center">Home</Typography>
              </MenuItem>

              <MenuItem
                onClick={handleCloseNavMenu}
                component="a"
                href="https://github.com/deku-messaging/Deku-SMS-Android"
                target="_blank"
              >
                <Typography textAlign="center">Pricavy</Typography>
              </MenuItem>

              <MenuItem
                onClick={handleCloseNavMenu}
                component="a"
                href="https://github.com/deku-messaging/Deku-SMS-Android"
                target="_blank"
              >
                <Typography textAlign="center">Tutorials</Typography>
              </MenuItem>

              <MenuItem
                onClick={handleCloseNavMenu}
                component="a"
                href="https://github.com/deku-messaging/Deku-SMS-Android"
                target="_blank"
              >
                <Typography textAlign="center">Blogs</Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Donate</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </nav>
  );
}
export default MobileNav;
