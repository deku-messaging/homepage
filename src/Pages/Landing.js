import {
  Grid,
  Typography,
  Box,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { FaCircle } from "react-icons/fa6";
import Faqs from "../Components/FAQS";

export default function Landing() {
  return (
    <Box>
      {/* Banner Page */}
      <Grid
        className="bg"
        container
        rowSpacing={4}
        sx={{
          px: { md: 15, sm: 10, xs: 3 },
          mb: { md: 7, xs: 5 },
          mt: { md: 2, xs: 2 },
        }}
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
            Deku SMS is an Android SMS app.
          </Typography>
          <Typography variant="h5" sx={{ mt: 7, opacity: "70%" }}>
            Deku SMS is being developed as a proof-of-concept for secure SMS
            messaging, SMS image transmission and SMS-Cloud communications.
          </Typography>
          {/*  */}
          <Grid container alignItems="center" columnSpacing={4} sx={{ mt: 5 }}>
            <Grid
              item
              md={4}
              xs={6}
              component="a"
              href="https://play.google.com/store/apps/details?id=com.afkanerd.deku"
              target="_blank"
            >
              <Box
                className="goggle-play"
                component="img"
                src="/googleplay.png"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={6}
              component="a"
              href="https://f-droid.org/packages/com.afkanerd.deku/"
              target="_blank"
            >
              <Box
                className="goggle-play"
                component="img"
                src="/fdroid.png"
                sx={{ width: "100%" }}
              />
            </Grid>
            {/* <Grid item md={4} xs={6}>
              <Typography variant="h6">
                Deku Web{" "}
                <IconButton>
                  <FaCircleChevronRight />
                </IconButton>
              </Typography>
              <Divider sx={{ width: "75%" }} />
            </Grid> */}
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
          Deku SMS is a feature-rich, open-source default SMS app designed to
          enhance your messaging experience while prioritizing your privacy and
          security. With Deku SMS, you can seamlessly send and receive
          end-to-end encrypted SMS messages, ensuring that your conversations
          remain confidential.
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
                    End-to-end encryption: Protect your SMS conversations with
                    robust encryption, giving you peace of mind that your
                    messages are secure.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FaCircle />
                  </ListItemIcon>
                  <ListItemText>
                    Image sharing: Easily send and receive images over SMS,
                    making your conversations more engaging and expressive.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FaCircle />
                  </ListItemIcon>
                  <ListItemText>
                    Message forwarding: Configure the app to forward your SMS
                    messages to your online servers, allowing you to access your
                    messages from any device.
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
