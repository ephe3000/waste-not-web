import { Link } from "react-router-dom";
import { TileLayer, Marker, Popup, useMap } from "react-leaflet";
import leaflet from "leaflet";
import userPositionIcon from '../images/user-position-icon.png'


// ----------- FUNCTIONS --------------
const Map = (props) => {
  const map = useMap();
  const markerBounds = leaflet.latLngBounds([]);
  props.locations.forEach((location) =>
    markerBounds.extend([location.latitude, location.longitude])
  );
  markerBounds.extend(props.userPosition);
  map.fitBounds(markerBounds);

  const icon = leaflet.icon({
    iconUrl: userPositionIcon,
    iconSize: [20, 20],
  });

  
//  ---------- RENDER -------------------
  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={props.userPosition} icon={icon}></Marker>
      {props.locations.map((location) => (
        <Marker position={[location.latitude, location.longitude]}>
          <Popup>
            {location.name}
            <br />
            <Link to={`/food-bank/${location.id}`}>Visit {location.name}</Link>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default Map;


  // https://stackoverflow.com/questions/65878831/how-to-set-leaflet-maps-zoom-to-show-all-markers-in-react-leaflet
  //  for each location in json location, place a marker with set bounds

  // https://leafletjs.com/
  // tilelayer attribution and url from 'leaflet' docs