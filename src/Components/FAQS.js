import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import { Box } from "@mui/material";

export default function Faqs() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Box>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
          "& .MuiAccordionDetails-root": {
            display: expanded ? "block" : "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            Is Deku SMS is Safe?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Deku SMS tries to provide users with secured options for
            transmitting messages. All the features and functionalities it
            offers are optional for the users. It's best to take no ones claims
            for how safe an app is to use, personal due diligence is always a
            good thing.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            Is Deku SMS end-to-end encrypted?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Deku SMS supports end to end encryption (with Perfect Forward
            Secrecry - PFS) for users.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            How does Deku SMS end-to-end encryption work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Deku SMS supports end to end encryption (with Perfect Forward
            Secrecry - PFS) for users. For the feature to work, both users need
            to be using Deku SMS as their default SMS app. This is because there
            are protocols in Deku SMS that{" "}
            <span>
              <a
                href="https://github.com/deku-messaging/Deku-SMS-Android?tab=readme-ov-file#-end-to-end-encryption"
                target="_blank"
              >
                read more...
              </a>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            Is Deku SMS open source?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Deku SMS is completely open source</Typography>
        </AccordionDetails>
      </Accordion>
      {/*  */}
    </Box>
  );
}
