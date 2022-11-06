import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function MapWrapper (props) {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      });
    
      if (!isLoaded) return <div>LOading...</div>;
    //   console.log("TESTING"+LocationCoord.lat);
    return (
        <GoogleMap
          zoom={15}
          center={props.currentLocation}
          mapContainerClassName="map-container"
        >
          <MarkerF position={props.currentLocation} draggable/>
          
        </GoogleMap>
      );
}