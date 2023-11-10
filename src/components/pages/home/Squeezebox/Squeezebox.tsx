import React from "react";
import { AccordionContainer } from "./styles";
// import Accordion from '@mui/material/Accordion';
// or
// import { Accordion } from '@mui/material';

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Squeezebox: React.FC = () => {
  return (
    <AccordionContainer>
      <Accordion
        style={{
          backgroundColor: "black",
          borderTop: "1px solid #f5f5f5",
          borderBottom: "1px solid #f5f5f5",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              color: "white",
              paddingTop: "16px",
              paddingBottom: "16px",
              fontSize: "23px",
            }}
          >
            UX & UI
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          backgroundColor: "black",
          borderBottom: "1px solid #f5f5f5",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              color: "white",
              paddingTop: "16px",
              paddingBottom: "16px",
              fontSize: "23px",
            }}
          >
           Website Development
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          backgroundColor: "black",
          borderBottom: "1px solid #f5f5f5",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              color: "white",
              paddingTop: "16px",
              paddingBottom: "16px",
              fontSize: "23px",
            }}
          >
            E-commerce
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          backgroundColor: "black",
          borderBottom: "1px solid #f5f5f5",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              color: "white",
              paddingTop: "16px",
              paddingBottom: "16px",
              fontSize: "23px",
            }}
          >
         WordPress
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </AccordionContainer>
  );
};

export default Squeezebox;
