import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./NearbyDealers.css";

const NearbyDealers = () => {
  return (
    <div className="mt-5 mb-5 pt-5">
      <div>
        <h2
          className="mt-5 text-center fs-2 fw-bold mb-5"
          style={{ color: "tomato" }}
        >
          NEARBY DEALER POINTS
        </h2>
      </div>
      <div>
        <MapContainer
          center={[23.778444677250747, 90.42571466487236]}
          zoom={15}
          scrollWheelZoom={true}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[23.78163527997635, 90.42549473239008]}>
            <Popup>PRAN-RFL Center, Badda, Dhaka</Popup>
          </Marker>
          <Marker position={[23.77910882329879, 90.4178419914265]}>
            <Popup>PRAN Dealer Center</Popup>
          </Marker>
          <Marker position={[23.773531999973137, 90.42041673020344]}>
            <Popup>PRAN Dealer Center</Popup>
          </Marker>
          <Marker position={[23.776063191837125, 90.41224110733972]}>
            <Popup>PRAN Production Center</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default NearbyDealers;
