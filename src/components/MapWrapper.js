import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { styled } from "@mui/material/styles";

const ResponsiveMapContainer = styled('div')(({ theme }) => ({
 
  [theme.breakpoints.up("md")]: {
    width: '100%',
    height: '100vh'
  },
  [theme.breakpoints.down("md")]: {

    height: "50vh",
  },

  // [theme.breakpoints.between("xs", "sm")]: {
  
  // },
}));

export default function MapWrapper (props) {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      });
    
      if (!isLoaded) return <div>Loading...</div>;
    //   console.log("TESTING"+LocationCoord.lat);
    return (
       <ResponsiveMapContainer>
         <GoogleMap
          zoom={15}
          center={props.currentLocation}
          mapContainerClassName="map-container"
        >
          <MarkerF position={props.currentLocation} draggable/>
          
        </GoogleMap>
       </ResponsiveMapContainer>
      );
}