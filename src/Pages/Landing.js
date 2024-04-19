import {
  Grid,
  Typography,
  Box,
  Card,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { FaCircle, FaCircleChevronRight } from "react-icons/fa6";
import Faqs from "../Components/FAQS";

export default function Landing() {
  return (
    <Box>
      {/* Banner Page */}
      <Grid
        className="bg"
        container
        rowSpacing={4}
        sx={{ px: { md: 15, sm: 10, xs: 3 }, my: { md: 7, xs: 5 } }}
      >
        <Grid
          item
          md={6}
          xs={12}
          sx={{ justifyContent: "center", display: "flex", mx: "auto" }}
        >
          <Box
            component="img"
            src="/a.png"
            sx={{ width: { md: "80%", xs: "100%" } }}
          />
        </Grid>
        <Grid item md={6} xs={12} my="auto">
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Fully encrypted end-to-end SMS messaging application.
          </Typography>
          <Typography variant="h5" sx={{ mt: 7, opacity: "70%" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dignissim purus eu nunc ullamcorper, vel convallis ante tincidunt.
          </Typography>
          {/*  */}
          <Grid container alignItems="center" columnSpacing={4}>
            <Grid item md={4} xs={6}>
              <Box
                className="goggle-play"
                component="img"
                src="/googleplay.png"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item md={4} xs={6}>
              <Typography variant="h6">
                Deku Web{" "}
                <IconButton>
                  <FaCircleChevronRight />
                </IconButton>
              </Typography>
              <Divider sx={{ width: "75%" }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*  */}
      {/* About Section */}
      <Box
        textAlign="center"
        sx={{ py: { md: 18, xs: 5 }, px: { md: 30, xs: 3 } }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, fontSize: { xs: "25px", md: "33px" } }}
        >
          What is Deku SMS
        </Typography>
        <Typography variant="h5" sx={{ p: { md: 5, xs: 2 }, opacity: "75%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
          purus eu nunc ullamcorper, vel convallis ante tincidunt. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed dignissim purus eu
          nunc ullamcorper, vel convallis ante tincidunt.
        </Typography>
      </Box>
      {/*  */}
      {/*  */}
      <Box>
        <Grid
          container
          sx={{ px: { md: 15, sm: 10, xs: 3 }, my: { md: 7, xs: 10 } }}
        >
          <Grid
            item
            md={6}
            xs={12}
            sx={{ justifyContent: "center", display: "flex", mx: "auto" }}
          >
            <Box
              component="img"
              src="/c.png"
              sx={{ width: { md: "80%", xs: "100%" } }}
            />
          </Grid>
          <Grid item md={6} xs={12} my="auto">
            <Typography variant="h4" sx={{ fontWeight: 700, py: 3, px: 2 }}>
              Why make Deku your default sms messaging app?
            </Typography>
            <Box>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <FaCircle />
                  </ListItemIcon>
                  <ListItemText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FaCircle />
                  </ListItemIcon>
                  <ListItemText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FaCircle />
                  </ListItemIcon>
                  <ListItemText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FaCircle />
                  </ListItemIcon>
                  <ListItemText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/*  */}
      {/*  */}
      <Box sx={{ px: { md: 15, sm: 10, xs: 3 }, my: { md: 18, xs: 10 } }}>
        <Typography variant="h4" sx={{ fontWeight: 700, py: 3, px: 2 }}>
          Stay updated with Deku SMS
        </Typography>
        <Card
          sx={{
            p: { md: 13, xs: 3 },
            bgcolor: "#D5C6E0",
            color: "black",
            px: { md: 15, sm: 10, xs: 1 },
          }}
        >
          <Grid container rowSpacing={4} columnSpacing={4}>
            <Grid
              item
              md={4}
              xs={12}
              sx={{ justifyContent: "center", mx: "auto" }}
            >
              <Box
                component="img"
                src="/online.jpg"
                sx={{ width: { md: "100%", xs: "100%" }, borderRadius: 5 }}
              />
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                consectetur adipiscing elit.
              </Typography>
              <Typography variant="body2" sx={{ color: "blue" }}>
                read more{" "}
              </Typography>
            </Grid>
            {/*  */}
            <Grid
              item
              md={4}
              xs={12}
              sx={{ justifyContent: "center", mx: "auto" }}
            >
              <Box
                component="img"
                src="/inspired.jpg"
                sx={{ width: { md: "100%", xs: "100%" }, borderRadius: 5 }}
              />
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                consectetur adipiscing elit.
              </Typography>
              <Typography variant="body2" sx={{ color: "blue" }}>
                read more{" "}
              </Typography>
            </Grid>
            {/*  */}
            <Grid
              item
              md={4}
              xs={12}
              sx={{ justifyContent: "center", mx: "auto" }}
            >
              <Box
                component="img"
                src="/online.jpg"
                sx={{ width: { md: "100%", xs: "100%" }, borderRadius: 5 }}
              />
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                consectetur adipiscing elit.
              </Typography>
              <Typography variant="body2" sx={{ color: "blue" }}>
                read more{" "}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Box>
      {/*  */}
      {/*  */}
      <Box sx={{ px: { md: 15, sm: 10, xs: 3 }, my: { md: 7, xs: 10 } }}>
        <Faqs />
      </Box>
      {/*  */}
    </Box>
  );
}
