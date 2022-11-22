import React, { useCallback } from "react";
import { useState, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import Fuse from "fuse.js";
import MapWrapper from "../components/MapWrapper";
import LocationCard from "../components/LocationCard";
import locations from "../../src/locations.json";
import GreatPaper from "./GreatPaper";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../App.css";
import { styled } from "@mui/material/styles";
import logo from "../logo-white.png";
import LocationPerks from "./LocationPerks";
const TopBar = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  height: "30px",
  marginBottom: "15px",
}));

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
const LocationCardMemo = React.memo(LocationCard);
const fuse = new Fuse(locations, options);

export default function Application() {
  const currentLocation = useSelector((state) => state.location.value);
  const [query, setQuery] = useState("");
  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  // Change the pattern
  const results = fuse.search(query);
  console.log("results", results);
  const locationResults = query
    ? results.map((results) => results.item)
    : locations;
  const listItems = locationResults.map((place) => (
    <li key={place.id}>
      <LocationCardMemo
        locationName={place.name}
        locationAddress={place.address}
        click={place.coordinates}
      />
    </li>
  ));

  return (
    <div>
      <MapWrapper currentLocation={currentLocation} />
      {/* Great Paper is the custom Paper object that resizes based on screen size. For more, see GreatPaper.js */}
      <GreatPaper>
        <Box sx={{ backgroundColor: "#16B26E", padding: "20px" }}>
          <TopBar>
            <img src={logo} alt="logo" />

            <div>
              <Typography
                variant="body"
                color="white"
                sx={{ marginRight: "15px", cursor: "pointer" }}
              >
                About
              </Typography>
              <Typography
                variant="body"
                color="white"
                sx={{ cursor: "pointer" }}
              >
                Contribute
              </Typography>
            </div>
          </TopBar>
          <Paper
            sx={{ display: "flex", alignItems: "center", padding: "2px 5px" }}
          >
            <SearchIcon sx={{ padding: "10px" }} />
            <InputBase
              sx={{ flexGrow: 2 }}
              placeholder="Search Bike Parking"
              value={query}
              onChange={handleQuery}
            />
          </Paper>
        </Box>
        <div className="searchResults">
          {listItems.length > 0 ? (
            <ul>{listItems}</ul>
          ) : (
            <Typography variant="body">
              No Results Found, maybe try another keyword?
            </Typography>
          )}
        </div>
        <div className="searchInfo">
          <Paper sx={{padding: "5%"}} elevation={0}>
          <Typography variant="h5">Jollibee Mercedes </Typography>

          <Typography variant="body">123 Market Avenue, San Miguel, Pasig City </Typography>
         <LocationPerks/>
          </Paper>
        </div>
      </GreatPaper>
    </div>
  );
}
