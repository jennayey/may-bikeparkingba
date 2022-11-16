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
import { styled } from "@mui/material/styles";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { red, green, blue } from "@mui/material/colors";

export default function DesktopView (props) {

    return (
        <div>
        <MapWrapper currentLocation={props.location} />
        {/* Great Paper is the custom Paper object that resizes based on screen size. For more, see GreatPaper.js */}
        <GreatPaper>
          <Paper
            sx={{ display: "flex", alignItems: "center", padding: "2px 10px" }}
          >
            <SearchIcon sx={{ padding: "10px" }} />
            <InputBase 
            sx={{flexGrow:2}}
              placeholder="Search Bike Parking"
              value={props.query}
              onChange={props.handleQuery}
            />
          </Paper>
          <div className="searchResults">
            <ul>{props.listItems}</ul>
          </div>
        </GreatPaper>
      </div>
    )
}




