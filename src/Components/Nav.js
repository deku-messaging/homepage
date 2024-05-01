import { Typography, Box, Button, IconButton } from "@mui/material";
import React from "react";
import { FaGithub } from "react-icons/fa6";

export default function DesktopNav() {
  return (
    <Box
      component="nav"
      sx={{
        display: { md: "flex", xs: "none" },
        justifyContent: "space-between",
        py: 2,
        mx: 5,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          component="img"
          src="/Deku.png"
          sx={{ width: { md: "14%", xs: "10%" } }}
        />
        <Typography variant="h6" sx={{ marginLeft: "8px", fontWeight: 600 }}>
          Deku SMS
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",

            borderRadius: 7,

            px: 2,
            justifyItems: "space-between",
          }}
        >
          <Button
            component="a"
            href="/"
            sx={{
              mx: 3,
              textTransform: "none",
              color: "whitesmoke",
              fontSize: "18px",
            }}
          >
            Home
          </Button>
          <Button
            sx={{
              mx: 3,
              textTransform: "none",
              color: "whitesmoke",
              fontSize: "18px",
            }}
          >
            Privacy
          </Button>
          <Button
            component="a"
            href="https://github.com/deku-messaging/Deku-SMS-Android"
            target="_blank"
            sx={{
              mx: 3,
              textTransform: "none",
              color: "whitesmoke",
              fontSize: "18px",
            }}
          >
            Tutorials
          </Button>
          <Button
            component="a"
            href="https://github.com/deku-messaging/Deku-SMS-Android"
            target="_blank"
            sx={{
              mx: 3,
              textTransform: "none",
              color: "whitesmoke",
              fontSize: "18px",
            }}
          >
            Blogs
          </Button>
          <IconButton
            component="a"
            href="https://github.com/deku-messaging/Deku-SMS-Android"
            target="_blank"
          >
            <FaGithub />
          </IconButton>
        </Box>
        <Button
          size="large"
          className="cards"
          variant="contained"
          sx={{
            borderRadius: "30px",
            px: 4,
            mx: 2,
            textTransform: "none",
            bgcolor: "whitesmoke",
          }}
        >
          Donate
        </Button>
      </Box>
    </Box>
  );
}
