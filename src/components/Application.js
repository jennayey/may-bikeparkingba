import * as React from "react";
import { useState, useRef } from "react";
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
import icon from "../icon.png";
import Collapse from "@mui/material/Collapse";
import Stack from "@mui/material/Stack";
import LocationInfo from "./LocationInfo";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Link from '@mui/material/Link';


const TopBar = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));

const options = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  minMatchCharLength: 4,
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
  const currentLocation = useSelector((state) => state.location.details);
  const containerRef = useRef(null);
  const currentView = useSelector((state) => state.location.view);

  const [query, setQuery] = useState("");
  const handleQuery = (event) => {
    setQuery(event.target.value);
    console.log("current view: " + currentView);
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
        click={place}
      />
    </li>
  ));

  return (
    <div>
      <MapWrapper
        currentLocation={{ lat: currentLocation.lat, lng: currentLocation.lng }}
      />
      {/* Great Paper is the custom Paper object that resizes based on screen size. For more, see GreatPaper.js */}
      <GreatPaper>
        <Box
          sx={{ backgroundColor: "#16B26E", padding: "15px" }}
          ref={containerRef}
        >
          <TopBar>
            <Box component="img" src={icon} alt="logo" width="40px" />

            <Stack direction="row" spacing={3}>
              {/* <Typography
                variant="body1"
                color="white"
                sx={{ cursor: "pointer" }}
              >
                About
              </Typography> */}
              <Link
                underline="none"
                color="white"
                variant="body1"
                sx={{ cursor: "pointer" }}
                href="https://forms.gle/GhCK2h3Z1jumK6Hw8"
                rel="noopener"
                target="_blank"
              >
                Contribute
              </Link>
            </Stack>
          </TopBar>

          <Collapse
            timeout={200}
            in={!currentView}
            container={containerRef.current}
            mountOnEnter
            unmountOnExit
          >
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "2px 5px",
                marginTop: "15px",
              }}
            >
              <SearchIcon sx={{ padding: "10px" }} />
              <InputBase
                sx={{ flexGrow: 2 }}
                placeholder="Search Bike Parking"
                value={query}
                onChange={handleQuery}
              />
              <IconButton sx={{ padding: "10px" }} onClick={() => setQuery("")}>
                <CloseIcon />
              </IconButton>
            </Paper>
          </Collapse>
        </Box>
        {currentView ? (
          <LocationInfo location={currentLocation} />
        ) : !query ? (
          <Box sx={{ padding: "20px" }}>
            <Typography variant="body1">
              Try searching for a place. For example: "SM Megamall" or "Pasig
              City"
            </Typography>
          </Box>
        ) : (
          <div className="searchResults">
            {listItems.length > 0 ? (
              <ul>{listItems}</ul>
            ) : (
              <Box sx={{ padding: "20px" }}>
                <Typography variant="body1">
                  Oops! No Results Found, maybe try another keyword?
                </Typography>
              </Box>
            )}
          </div>
        )}
      </GreatPaper>
    </div>
  );
}
