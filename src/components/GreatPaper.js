import * as React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { red, green, blue } from "@mui/material/colors";

const CustomPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#f2f6f7",
  zIndex: 5,
  position: "absolute",

  [theme.breakpoints.up("md")]: {
    // backgroundColor: red[500],
    width: 400,
    top: 20,
    left: 20,
    bottom: 20,
    right: 20,
  },
  [theme.breakpoints.down("md")]: {
    // backgroundColor: blue[500],
    bottom: 0,
    left: 0,
    right: 0,
    height: "50vh",
  },

  [theme.breakpoints.between("xs", "sm")]: {
    bottom: 0,
    left: 0,
    right: 0,
    // backgroundColor: green[500],
  },
}));

export default function GreatPaper(props) {
  return <CustomPaper>{props.children}</CustomPaper>;
}
