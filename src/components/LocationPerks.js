import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import PaymentIcon from "@mui/icons-material/Payment";
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
      <PaymentIcon color={props.folding ? "primary" : "gray"} fontSize="small" />
        <Typography variant="body1" sx={{ marginLeft: "5px" }}>
         {props.folding ? "Folding-bike is allowed inside" : "Folding-bike not allowed inside"}
        </Typography>
      </Container>

      <Container>
      <PaymentIcon color={props.free ? "primary" : "gray"} fontSize="small" />

        <Typography variant="body1" sx={{ marginLeft: "5px" }}>
         {props.free ? "Free-parking" : "Paid parking"}
        </Typography>
      </Container>

      <Container>
      <WarehouseIcon color={props.covered ? "primary" : "gray"} fontSize="small" />

        <Typography variant="body1" sx={{ marginLeft: "5px" }}>
          {props.covered ? "Covered parking" : "Outside parking"}
        </Typography>
      </Container>
    </Box>
  );
}
