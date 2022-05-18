import Banner from "../components/UI/Banner";
import Footer from "../components/UI/Footer";
import Header from "../components/UI/Header";
import Map from "../components/Map";
import { MapContainer } from "react-leaflet";
import React, { useState, useEffect } from "react";

// --------- FUNCTIONS ------------
// useState for 'position' and 'cities' because the overall function is re-rendered.
// useState uses array destructuring - e.g., position, setPosition - setPosition is the callable function, position is the 'current state' (e.g., null)
// In this e.g., it goes on to point to the handlyCityChange function, and set a new position based on selected city.

const Search = () => {
  const [locations, setLocations] = useState(null);
  const [distance, setDistance] = useState("20");
  const [position, setPosition] = useState(null);
  const [citiesVisible, setCitiesVisible] = useState(false);

  // geolocation api docs:
  // https://ipgeolocation.io/

  // useEffect to get current location and set current location (postion) in state
  // passing location to let it know to show cities visible
  // geolocation docs:
  //  https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
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

  // fetch locations from api
  useEffect(() => {
    console.log(position, distance);
    if (!position || !distance) {
      return;
    }
    const urlencoded = new URLSearchParams();
    urlencoded.append("distance", distance);
    urlencoded.append("latitude", position[0]);
    urlencoded.append("longitude", position[1]);
    console.log(position);
    fetch(`${process.env.REACT_APP_API}locations`, {
      method: "POST",
      body: urlencoded,
    })
      .then((response) => response.json())
      .then((result) => setLocations(result))
      .catch((error) => console.log("error", error));
  }, [position, distance]);

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
    setDistance(e.target.value);
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
    // rendered using a fragment - <> - https://reactjs.org/docs/fragments.html
    // fragment allows one parent element to render multiple elements.
    <>
      <Banner />
      <Header />
      <section className="bg-white max-w-lg mx-auto  md:p-5 my-5 mb-20 rounded-lg shadow-2xl">
        <h2 className="text-center pt-1 text-gray-700">
          Please enable geolocation.
          <br /> Alternatively, a drop-down list will be provided.
        </h2>

        <form className="pt-10">
          <div className="flex">
            {/* && means, if citiesVisible selected do the following... */}
            {citiesVisible && (
              <div className="p-5 flex justify-end">
                <label className="text-1xl font-bold text-gray-700 border-b-[1px] border-lime-400">
                  Cities:
                </label>
                <select onChange={handleCityChange} className="ml-5">
                  <option>select city</option>
                  {cities.map((city) => (
                    <option value={city.name}>{city.name}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="p-5 flex justify-end">
              <label className="text-1xl font-bold text-gray-700 border-b-[1px] border-lime-400">
                {" "}
                Distance:
              </label>
              <select
                onChange={(event) => handleDistanceChange(event)}
                className="ml-5"
                defaultValue={distance}
              >
                <option value="5">5 miles</option>
                <option value="10">10 miles</option>
                <option value="20">20 miles</option>
                <option value="30">30 miles</option>
                <option value="50">50 miles</option>
                <option value="1000">national</option>
              </select>
            </div>
          </div>
          {locations && (
            <p className="text-gray-700 pt-2 p-2 text-center">
              Found {locations.length} location(s) within your search critera
            </p>
          )}
        </form>
      </section>

      {locations && (
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
      <Footer />
    </>
  );
};

export default Search;
