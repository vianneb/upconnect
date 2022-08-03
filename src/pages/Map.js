import { useRef, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Map.css";
import {
  useLoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
  Circle,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import SAMPLE_MENTORS from "../data/sample_mentors.json";

const defaultOptions = {
  strokeOpacity: 0.75,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.2,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.15,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.1,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};

export function Places(props) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (val) => {
    setValue(val, false);
    clearSuggestions();

    const results = await getGeocode({ address: val });
    const { lat, lng } = await getLatLng(results[0]);

    props.setLocation({ lat, lng });
  };

  return (
    <div>
      <Combobox onSelect={handleSelect} className="flex justify-center">
        <ComboboxInput
          value={value}
          disabled={!ready}
          onChange={(e) => setValue(e.target.value)}
          className="combobox-input"
          placeholder="Search an address"
        ></ComboboxInput>
        <ComboboxPopover className="bg-white w-max shadow-lg">
          <ComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption
                  key={place_id}
                  value={description}
                  className="combobox-option list-none w-max"
                />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default function Map() {
  const [location, setLocation] = useState();
  const [mentors, setMentors] = useState(SAMPLE_MENTORS);
  const [infoFlag, setInfoFlag] = useState(false);
  const [currWindow, setcurrWindow] = useState();
  const [center, setCenter] = useState({ lat: 39.8097343, lng: -98.5556199 });
  const [zoom, setZoom] = useState(4);

  const mapRef = useRef();

  const onLoad = useCallback((map) => (mapRef.current = map), []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBXyUpp9iJSsY0jnAAXEdFixAJkb4e-CPw",
    libraries: ["places"],
  });

  if (!isLoaded) {
    return null;
  }

  const updateMentor = (mentor) => {
    setcurrWindow(mentor);
    setInfoFlag(true);
  };

  let infoWindow;
  if (infoFlag) {
    infoWindow = (
      <InfoWindow
        onCloseClick={() => {
          setInfoFlag(false);
        }} //Keeps infoWindow closed before Click
        position={currWindow.Coordinates} //Puts infoWindow on location position {lng and lat }
      >
        {/* Show selected Data on the info window */}
        <div style={{ padding: 3 }}>
          <p className="info-window-name">{currWindow.Name}</p>
          <p>{currWindow.Header}</p>
          <p>{currWindow.Location}</p>
          <p>
            {" "}
            {
              <p>
                <img
                  src={currWindow.Image}
                  alt="mentor"
                  className="info-window-pic"
                />
              </p>
            }
          </p>

          <p>
            <Link to="/mentorProfile" className="link-primary">
              View Profile
            </Link>
          </p>
        </div>
      </InfoWindow>
    );
  } else {
    infoWindow = null;
  }

  return (
    <div className="map-container ">
      <div className="col-3 ">
        <h2 className="text-primary text-2xl font-extrabold mt-10 mb-10 text-center">
          Search Mentors Near You
        </h2>
        <div className="">
          <Places
            setLocation={(position) => {
              setLocation(position);
              mapRef.current.panTo(position);
              setCenter(position);
              setZoom(8);
            }}
          />
        </div>
      </div>
      <div className="col-9">
        <GoogleMap
          zoom={zoom}
          center={center}
          mapContainerClassName="map-container-2"
          onLoad={onLoad}
        >
          {location && (
            <>
              <Marker position={location} />

              <Circle center={location} radius={50000} options={closeOptions} />
              <Circle
                center={location}
                radius={75000}
                options={middleOptions}
              />
              <Circle center={location} radius={100000} options={farOptions} />
            </>
          )}

          {mentors.map((mentor) => (
            <Marker
              key={mentor.Name}
              position={mentor.Coordinates}
              icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
              onClick={() => {
                updateMentor(mentor);
              }}
            />
          ))}

          {infoWindow}
        </GoogleMap>
      </div>
    </div>
  );
}
