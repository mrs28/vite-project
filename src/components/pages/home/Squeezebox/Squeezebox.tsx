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
  const [fontSize, setFontSize] = useState(isSmallScreen ? "15px" : "20px");

  const isSmallScreenText = useMediaQuery("(max-width: 420px)");
  // Define el estado del alineado del texto
  const [textAlign, setTextAlign] = useState(
    isSmallScreenText ? "left" : "justify"
  );

  // Actualiza el tamaño de la fuente cuando cambia la media query
  useEffect(() => {
    setFontSize(isSmallScreen ? "16px" : "20px");
    setTextAlign(isSmallScreenText ? "left" : "justify");
  }, [isSmallScreen, isSmallScreenText]);

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
          <Typography
            style={{
              color: "white",
              textAlign: textAlign,
            }}
          >
            Boost customer engagement and drive conversions with our UX & UI
            services. Our designs not only captivate your audience but also make
            it possible to increase customer interaction and facilitate seamless
            purchases, maximizing the overall effectiveness of your website.
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
            Digital Strategy & Research
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              color: "white",
              textAlign: textAlign,
            }}
          >
            We meticulously analyze market trends, user behavior, and industry
            insights to formulate a strategic roadmap. From identifying
            opportunities to mitigating risks, our approach ensures a tailored
            and effective digital strategy that propels your business forward.
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
            Custom Web Development
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              color: "white",
              textAlign: textAlign,
            }}
          >
            Empower your business with our Custom Application Development
            service. We specialize in crafting tailor-made applications that
            align with your unique needs. From user-friendly interfaces to
            robust functionalities. Our dedicated team ensures a personalized
            approach, guaranteeing a dynamic and efficient solution.
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
          <Typography
            style={{
              color: "white",
              textAlign: textAlign,
            }}
          >
            Fuel the agile and dynamic growth of your business with our
            E-commerce Development service. From secure payment gateways to
            captivating product displays, we design and optimize every element
            to deliver a seamless shopping experience.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </AccordionContainer>
  );
};

export default Squeezebox;
