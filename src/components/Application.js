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

import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
export default function Application() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const currentLocation = useSelector((state) => state.location.value);
  const [query, setQuery] = useState("");
  const handleQuery = (event) => {
    setQuery(event.target.value);
  };


  const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    minMatchCharLength: 2,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    // fieldNormWeight: 1,
    keys: ["name", "address"],
  };

  const fuse = new Fuse(locations, options);
  // Change the pattern
  const results = fuse.search(query);
  console.log("results", results);
  const locationResults = query
    ? results.map((results) => results.item)
    : locations;
  const listItems = locationResults.map((place) => (
    <li key={place.id}>
      <LocationCard
        locationName={place.name}
        locationAddress={place.address}
        click={place.coordinates}
      />
    </li>
  ));
  return (
    // <Grid container spacing={0}>

    //   <Grid md={8} lg={9} xs={12}>
    // <MapWrapper currentLocation={currentLocation} />
    //   </Grid>
    //   <Grid md={4} lg={3} xs={12}>
    //     <Sidebar>
    //     <Paper
    //         sx={{ display: "flex", alignItems: "center", padding: "2px 10px", }}
    //       >
    //         <SearchIcon sx={{ padding: "10px" }} />
    //         <InputBase
    //           sx={{ flexGrow: 2 }}
    //           placeholder="Search Bike Parking"
    //           value={query}
    //           onChange={handleQuery}
    //         />
    //       </Paper>
    //       <div className="searchResults">
    //         <ul>{listItems}</ul>
    //       </div>
    //     </Sidebar>
    //   </Grid>
    //   {/* Great Paper is the custom Paper object that resizes based on screen size. For more, see GreatPaper.js */}
    // </Grid>

    <div>
      {!matches && (
        <DesktopView
          location={currentLocation}
          query={query}
          handleQuery={handleQuery}
          listItems={listItems}
        />
      )}
      {matches && (
        <MobileView
          location={currentLocation}
          query={query}
          handleQuery={handleQuery}
          listItems={listItems}
        />
      )}
    </div>
  );
}
