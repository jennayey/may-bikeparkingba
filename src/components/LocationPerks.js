import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";
const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  margin: "10px 0px",
}));

export default function LocationPerks(props) {
  return (
    <Box sx={{marginTop: "20px"}}>
      <Container>
        {props.folding ? (
          <CheckIcon color="primary" />
        ) : (
          <CloseIcon color="danger" />
        )}
        <Typography variant="body" sx={{ marginLeft: "5px" }}>
          Folding-bike friendly
        </Typography>
      </Container>

      <Container>
        {props.free ? (
          <CheckIcon color="primary" />
        ) : (
          <CloseIcon color="danger" />
        )}
        <Typography variant="body" sx={{ marginLeft: "5px" }}>
          Free-parking
        </Typography>
      </Container>

      <Container>
        {props.covered ? (
          <CheckIcon color="primary" />
        ) : (
          <CloseIcon color="danger" />
        )}
        <Typography variant="body" sx={{ marginLeft: "5px" }}>
          Covered
        </Typography>
      </Container>
    </Box>
  );
}
