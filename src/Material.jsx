import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";

import LibraryAddRoundedIcon from "@mui/icons-material/LibraryAddRounded";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Material() {
  return (
    <>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          spacing={2}
          style={{
            marginTop: "20px",
            backgroundColor: "lightgrey",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <Button
            color="secondary"
            variant="contained"
            // color="primary"
            onClick={() => {
              alert("clicked");
            }}
          >
            Secondary
          </Button>
          <Button variant="contained" color="success" size="large">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
          <Button color="error" variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
          <Checkbox {...label} />
          <Slider aria-label="Volume" />
        </Stack>
        <hr />
        <Stack direction="row" spacing={2}>
          <Avatar>H</Avatar>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        </Stack>
        <hr />
        <Stack direction="row" spacing={1}>
          <Chip label="primary" color="primary" />
          <Chip label="success" color="success" />
        </Stack>
        <hr />
        <Stack direction="row" spacing={2}>
          <LibraryAddRoundedIcon style={{ color: "red", fontSize: "40px" }} />
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Stack>
      </Container>
    </>
  );
}

export default Material;
