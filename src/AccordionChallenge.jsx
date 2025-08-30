import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Container from "@mui/material/Container";
import Switch from "@mui/material/Switch";
import Collapse from "@mui/material/Collapse";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
const label = { inputProps: { "aria-label": "Switch demo" } };
function AccordionChallenge() {
  const [checked, setChecked] = useState(true);
  const containerRef = React.useRef < HTMLElement > null;
  return (
    <>
      <Container maxWidth="md" style={{ marginTop: "20px" }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ textAlign: "center" }}>
              <Switch
                {...label}
                defaultChecked
                checked={checked}
                onChange={() => {
                  setChecked((prev) => !prev);
                }}
              />
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* <Collapse
          in={checked}
          collapsedSize={100}
          style={{ textAlign: "center" }}
        >
          <div style={{ height: "400px", background: "orange" }}>
            <h1>Hello World</h1>
          </div>
        </Collapse> */}
        {/* <Fade in={checked}>
          <div style={{ height: "400px", background: "orange" }}>
            <h1>Hello World</h1>
          </div>
        </Fade> */}
        {/* <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          <div style={{ height: "400px", background: "orange" }}>
            <h1>Hello World</h1>
          </div>
        </Slide> */}
        <Slide in={checked} container={containerRef.current}>
          <div style={{ height: "400px", background: "orange" }}>
            <h1>Hello World</h1>
          </div>
        </Slide>
      </Container>
    </>
  );
}

export default AccordionChallenge;
