import * as React from "react";

import { Paper, Button, Box, Typography } from "@mui/material";
import LocationPerks from "./LocationPerks";
import { useDispatch } from "react-redux";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { changeView } from "../features/locationSlice";

export default function LocationInfo(props) {
  const dispatch = useDispatch();

  return (
    <div className="searchInfo">
      <Paper sx={{ padding: "5%" }} elevation={0}>
        <Button
          variant="text"
          color="primary"
          startIcon={<ChevronLeftIcon />}
          onClick={() => {
            dispatch(changeView(false));
          }}
          sx={{ marginBottom: "15px" }}
        >
          Go back
        </Button>
        <Box
          component="img"
          src={props.location.imgName===undefined ? `/images/placeholder.png` : `/images/${props.location.imgName}` }
          width="100%"
          sx={{
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        />
        <Typography variant="h4">{props.location.name}</Typography>
        <Typography variant="body1" color="text.secondary">
          {props.location.address}
        </Typography>
        <LocationPerks
          folding={props.location.folding}
          free={props.location.free}
          covered={props.location.covered}
        />
      </Paper>
    </div>
  );
}
