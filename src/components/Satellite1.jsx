import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const Satellite1 = () => {
  const mapRef = useRef(null);
  const [userMarker, setUserMarker] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [fishMarkers, setFishMarkers] = useState([]);
  const [routingControl, setRoutingControl] = useState(null);
  const [directions, setDirections] = useState("Click a fish location to navigate");

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map("map", {
        maxBounds: [
          [6.5546, 68.1624],
          [35.6751, 97.3954],
        ],
        maxBoundsViscosity: 1.0,
      }).setView([20.5937, 78.9629], 5);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 12,
        minZoom: 5,
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);
      mapRef.current = map;
    }
  }, []);

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });

        const locationIcon = L.icon({
          iconUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg",
          iconSize: [20, 20],
        });

        if (!userMarker) {
          const marker = L.marker([latitude, longitude], { icon: locationIcon })
            .addTo(mapRef.current)
            .bindPopup("Your current location!");
          setUserMarker(marker);
        } else {
          userMarker.setLatLng([latitude, longitude]);
        }

        mapRef.current.setView([latitude, longitude], 10);
        updateFishData(latitude, longitude);
      },
      (error) => alert("Geolocation error: " + error.message),
      { enableHighAccuracy: true }
    );
  };

  const updateFishData = (lat, lon) => {
    if (!mapRef.current) return;
    fishMarkers.forEach((marker) => mapRef.current.removeLayer(marker));

    const fishIcon = L.icon({ iconUrl: "https://maps.google.com/mapfiles/ms/icons/green-dot.png", iconSize: [20, 20] });
    
    const newFishMarkers = [
      [lat + 0.02, lon + 0.02],
      [lat - 0.02, lon - 0.02],
      [lat + 0.03, lon - 0.03],
    ].map((coord) => {
      const marker = L.marker(coord, { icon: fishIcon })
        .addTo(mapRef.current)
        .on("click", () => navigateToFish(coord[0], coord[1]));
      return marker;
    });

    setFishMarkers(newFishMarkers);
  };

  const navigateToFish = (fishLat, fishLon) => {
    if (!userLocation || !mapRef.current) return;
    
    if (routingControl) {
      mapRef.current.removeControl(routingControl);
    }
    
    const newRoutingControl = L.Routing.control({
      waypoints: [
        L.latLng(userLocation.latitude, userLocation.longitude),
        L.latLng(fishLat, fishLon),
      ],
      routeWhileDragging: true,
      createMarker: () => null,
      lineOptions: { addWaypoints: false },
    }).addTo(mapRef.current);
    
    setRoutingControl(newRoutingControl);
    newRoutingControl.on("routesfound", (e) => {
      const instructions = e.routes[0].instructions.map((instr) => instr.text);
      setDirections(instructions.join(", "));
    });
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <div id="map" style={{ width: "100%", height: "80vh", filter: "opacity(0.7)" }}></div>
      <div style={{ textAlign: "center", marginTop: "10px", fontWeight: "bold", color: "#333", position: "absolute", bottom: "60px", left: "50%", transform: "translateX(-50%)", backgroundColor: "white", padding: "5px", borderRadius: "5px" }}>
        {directions}
      </div>
      <div style={{ position: "absolute", bottom: "20px", left: "20px", zIndex: "1000", display: "flex", gap: "10px" }}>
        <button
          onClick={getLocation}
          style={{ padding: "10px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
        >
          Get Location
        </button>
        <button
          onClick={() => window.location.href = "/"}
          style={{ padding: "10px", backgroundColor: "green", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Satellite1;
