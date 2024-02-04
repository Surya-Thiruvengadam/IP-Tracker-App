import React, { useCallback, useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import iconLocation from "../assets/images/icon-location.svg";
import { Dataprovider } from "../App";
import { useMapEvent } from "react-leaflet";

const Map = () => {
  const { location } = useContext(Dataprovider);
  let position;
  if (location === "") {
    position = [50.5, 30.5];
  } else {
    position = [location.latitude, location.longitude];
  }

  const coustomIcon = new Icon({
    iconUrl: iconLocation,
    iconSize: [90, 90],
  });

  function MyComponent() {
    const map = useMapEvent("click", () => {
      map.setView(position, map.getZoom());
    });
    return null;
  }

  const Setpos = useCallback(() => {
    const pos = useMap();
    pos.setView(position);
  }, [position]);
  return (
    <>
      <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyComponent />
        <Setpos />
        <Marker position={position} icon={coustomIcon}>
          <Popup>Hi this is your location</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
