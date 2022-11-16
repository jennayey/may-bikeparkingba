import React from "react";
import { useState, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector } from "react-redux";
import Fuse from "fuse.js";
import MapWrapper from "../components/MapWrapper";
import LocationCard from "../components/LocationCard";
import locations from "../../src/locations.json";
import GreatPaper from "./GreatPaper";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import "../App.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import { styled } from "@mui/material/styles";

import { red, green, blue } from "@mui/material/colors";

export default function MobileView(props) {
  const Sidebar = styled("div")(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: "#F1F4F6",
    zIndex: 5,
    height: "50vh",
    [theme.breakpoints.up("md")]: {
      backgroundColor: red[500],
    },
    [theme.breakpoints.down("md")]: {
      backgroundColor: blue[500],
    },

    [theme.breakpoints.between("xs", "sm")]: {
      backgroundColor: green[500],
    },
  }));

  const SearchResults = styled("div")(({ theme }) => ({
    overflowY: "auto",
  }));
  return (
    <div>
      <MapWrapper currentLocation={props.location} />

      <Sidebar>
        <Paper
          sx={{ display: "flex", alignItems: "center", padding: "2px 10px" }}
        >
          <SearchIcon sx={{ padding: "10px" }} />
          <InputBase
            sx={{ flexGrow: 2 }}
            placeholder="Search Bike Parking"
            value={props.query}
            onChange={props.handleQuery}
          />
        </Paper>
        <SearchResults>
          <ul>{props.listItems}</ul>
        </SearchResults>
      </Sidebar>
    </div>
  );
}
