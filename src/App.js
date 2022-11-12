import "./App.css";
import Paper from "@mui/material/Paper";
import LocationCard from "./components/LocationCard";
import { LocationCoord } from "./components/LocationCard";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import MapWrapper from "./components/MapWrapper";
import { useMemo } from "react";
// const render = (status: Status) => {
//   return <h1>{status}</h1>;
// };
import books from "../src/books.json";
import locations from "../src/locations.json";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeLocation } from "./features/locationSlice";
import Fuse from "fuse.js";
export default function App() {
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
    minMatchCharLength: 1,
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
  const locationResults =  results.map(results => results.item)
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
    <div>
      <MapWrapper currentLocation={currentLocation} />
      <Paper
        elevation={5}
        sx={{
          backgroundColor: "#f2f6f7",
          width: 400,
          display: "flex",
          flexDirection: "column",
          zIndex: 5,
          position: "absolute",
          top: 20,
          left: 20,
          bottom: 20,
          right: 20,
        
        }}
      >
        <Paper sx={{padding:"2px 4px", display: 'flex', alignItems: 'center'}}>
          <SearchIcon sx={{padding: "10px"}}/>
          <InputBase
            placeholder="Search Bike Parking"
            value={query}
            onChange={handleQuery}
          />
        </Paper>
        <div className="searchResults">
          <ul>{listItems}</ul>
        </div>
      </Paper>
    </div>
  );
}
