import locations from "../mock/locations.json";
import Header from "../components/Header";
import Map from "../components/Map";
import { MapContainer } from "react-leaflet";
import React, { useState, useEffect } from "react";

// --------- FUNCTIONS ------------
const Search = () => {
  const [position, setPosition] = useState(null);
  const [citiesVisible, setCitiesVisible] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      setCitiesVisible(true);
      return; // error - geolocation not supported.
    }
    navigator.geolocation.getCurrentPosition(
      (location) => handleLocationChange(location), // success
      () => setCitiesVisible(true) // error - location denied
    );
  }, []);

  // ------------- HANDLERS --------------
  const handleCityChange = (e) => {
    const city = cities.find((city) => city.name === e.target.value);
    setPosition([city.latitude, city.longitude]);
    // if you were to console.log here, you would see old value.
    // this is because it's a 'scheduled' change that will be handled by virtualDOM
  };

  const handleLocationChange = (location) => {
    setPosition([location.coords.latitude, location.coords.longitude]);
  };

  //THIS IS NOT USED YET - will be based on backend/sql sphere location
  const handleDistanceChange = (e) => {
    console.log(e.target.value);
  };

  // --------  CITIES/OBJECT --------------
  const cities = [
    {
      name: "London",
      latitude: 51.4893335,
      longitude: -0.14405508452768728,
    },

    {
      name: "Birmingham",
      latitude: 52.48,
      longitude: -1.9025,
    },
    {
      name: "Manchester",
      latitude: 53.4794,
      longitude: -2.2453,
    },
    {
      name: "Leeds",
      latitude: 53.7997,
      longitude: -1.5492,
    },

    {
      name: "Newcastle",
      latitude: 55.0077,
      longitude: -1.6578,
    },
    {
      name: "Bristol",
      latitude: 51.45,
      longitude: -2.5833,
    },
  ];

  // ------------- RENDER -----------------
  return (
    <>
      <Header />
      <form className="pt-20">
        <div className="flex">
          {/* && means, if citiesVisible selected do the following... */}
          {citiesVisible && (
            <div className="p-10 flex justify-end">
              <label className="text-2xl font-bold">Cities:</label>
              <select onChange={handleCityChange} className="ml-5">
                <option>select city</option>
                {cities.map((city) => (
                  <option value={city.name}>{city.name}</option>
                ))}
              </select>
            </div>
          )}

          <div className="p-10 flex justify-end">
            <label className="text-2xl font-bold"> Distance:</label>
            <select
              onChange={(event) => handleDistanceChange(event)}
              className="ml-5"
            >
              <option value="5">5 miles</option>
              <option value="10">10 miles</option>
              <option value="20">20 miles</option>
              <option value="30">30 miles</option>
              <option value="50">50 miles</option>
              <option value="1000">national</option>
              {/* distance will be calculated using sql distance sphere */}
            </select>
          </div>
        </div>
      </form>

      {position && (
        <div>
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "400px" }}
          >
            <Map locations={locations} userPosition={position} />
          </MapContainer>
        </div>
      )}
    </>
  );
};

export default Search;

// free geolocation api:
// https://ipgeolocation.io/

// useState for 'position' and 'cities' because the overall function is re-rendered.
// useState uses array destructuring - e.g., position, setPosition - setPosition is the callable function, position is the 'current state' (e.g., null)
// In this e.g., it goes on to point to the handlyCityChange function, and set a new position based on selected city.

// useEffect to get current location and set current location (postion) in state
// passing location to let it know to show cities visible
// geolocation docs:
//  https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition

// rendered using a fragment - <> - https://reactjs.org/docs/fragments.html
// fragment allows one parent element to render multiple elements.
