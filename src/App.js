import "./App.css";
import Paper from "@mui/material/Paper";
import LocationCard from "./components/LocationCard";
import {LocationCoord} from "./components/LocationCard";

import MapWrapper from "./components/MapWrapper";
import { useMemo } from "react";
// const render = (status: Status) => {
//   return <h1>{status}</h1>;
// };

import {useSelector, useDispatch } from 'react-redux'
import {changeLocation} from './features/locationSlice'

export default function App() {

  const currentLocation = useSelector (state=>state.location.value)

  return (
    
    <div>
       <MapWrapper currentLocation={currentLocation} />

       <Paper
      sx={{
        backgroundColor: "#eee",
        minWidth: 400,
        display: "flex",
        margin: "20px",
        zIndex: 5,
        position: "absolute",
        top: 16,
        left: 16,
      }}
    >
      <LocationCard
        locationName="Megamall"
        locationAddress="Mandaluyong City"
        click={{lat: 14.546351463713943, lng: 120.98728179987157}}
      />
        

    </Paper>
    </div>
  
   

  );
}

