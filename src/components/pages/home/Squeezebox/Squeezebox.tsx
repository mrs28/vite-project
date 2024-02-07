import React, { useState, useEffect } from "react";
import { AccordionContainer } from "./styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Squeezebox: React.FC = () => {
  const isSmallScreen = useMediaQuery("(max-width: 420px)");
   // Define el estado local para el tamaño de la fuente
   
  const [fontSize, setFontSize] = useState(isSmallScreen ? "16px" : "20px");

    // Actualiza el tamaño de la fuente cuando cambia la media query
    useEffect(() => {
      setFontSize(isSmallScreen ? "16px" : "20px");
    }, [isSmallScreen]);

  return (
    <AccordionContainer>
      <Accordion
        style={{
          backgroundColor: "black",
          borderTop: "1px solid #696969",
          borderBottom: "0.5px solid #696969",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#696969" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              color: "white",
              paddingTop: "10px",
              paddingBottom: "10px",
              fontSize: fontSize,
              letterSpacing: "2px",
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
          borderBottom: "0.5px solid #696969",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#696969" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              color: "white",
              paddingTop: "10px",
              paddingBottom: "10px",
              fontSize: fontSize,
              letterSpacing: "2px",
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
          borderBottom: "0.5px solid #696969",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#696969" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              color: "white",
              paddingTop: "10px",
              paddingBottom: "10px",
              fontSize: fontSize,
              letterSpacing: "2px",
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
          borderBottom: "0.5px solid #696969",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#696969" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              color: "white",
              paddingTop: "10px",
              paddingBottom: "10px",
              fontSize: fontSize,
              letterSpacing: "2px",
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
