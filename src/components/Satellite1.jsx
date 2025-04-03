import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const Satellite1 = () => {
  const mapRef = useRef(null);
  const userMarkerRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);
  const [fishMarkers, setFishMarkers] = useState([]);
  const routingControlRef = useRef(null);
  const [currentStep, setCurrentStep] = useState("Click a fish location to navigate");

  useEffect(() => {
    if (!mapRef.current) {
      console.log("Initializing Map...");
      const map = L.map("map", { zoomControl: false }).setView([20.5937, 78.9629], 5);
      L.control.zoom({ position: "bottomright" }).addTo(map);
      
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 12,
        minZoom: 5,
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);
      mapRef.current = map;
    }
  }, []);

  const trackLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });

        if (!mapRef.current) return;

        const locationIcon = L.icon({
          iconUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg",
          iconSize: [20, 20],
        });

        if (!userMarkerRef.current) {
          userMarkerRef.current = L.marker([latitude, longitude], { icon: locationIcon })
            .addTo(mapRef.current)
            .bindPopup("Your current location!");
        } else {
          userMarkerRef.current.setLatLng([latitude, longitude]);
        }

        mapRef.current.setView([latitude, longitude], 10);
      },
      (error) => alert("Geolocation error: " + error.message),
      { enableHighAccuracy: true }
    );
  };

  const updateFishData = () => {
    if (!userLocation || !mapRef.current) return;
    fishMarkers.forEach((marker) => mapRef.current.removeLayer(marker));

    const fishIcon = L.icon({ iconUrl: "https://maps.google.com/mapfiles/ms/icons/green-dot.png", iconSize: [20, 20] });
    
    const newFishMarkers = [
      [userLocation.latitude + 0.005, userLocation.longitude + 0.005],
      [userLocation.latitude - 0.005, userLocation.longitude - 0.005],
      [userLocation.latitude + 0.008, userLocation.longitude - 0.008],
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
    
    if (routingControlRef.current) {
      mapRef.current.removeControl(routingControlRef.current);
    }
    
    const routingControl = L.Routing.control({
      waypoints: [L.latLng(userLocation.latitude, userLocation.longitude), L.latLng(fishLat, fishLon)],
      router: L.Routing.osrmv1({ serviceUrl: "https://router.project-osrm.org/route/v1" }),
      routeWhileDragging: true,
      createMarker: () => null,
      lineOptions: { addWaypoints: false },
      show: false,
    }).addTo(mapRef.current);
    
    routingControl.on("routesfound", (e) => {
      const steps = e.routes[0].instructions.map((instr) => instr.text);
      setCurrentStep(steps[0] || "Follow the route");
    });

    routingControl.on("routingerror", (error) => {
      console.error("Routing error:", error);
      setCurrentStep("Routing failed! Check your internet connection.");
    });
    
    routingControlRef.current = routingControl;
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <div id="map" style={{ width: "100%", height: "80vh", filter: "opacity(0.9)" }}></div>
      <div style={{ textAlign: "center", marginTop: "10px", fontWeight: "bold", color: "#333", position: "absolute", bottom: "60px", left: "50%", transform: "translateX(-50%)", backgroundColor: "white", padding: "10px", borderRadius: "8px", boxShadow: "0px 2px 10px rgba(0,0,0,0.2)" }}>
        {currentStep}
      </div>
      <div style={{ position: "absolute", bottom: "20px", left: "20px", zIndex: "1000", display: "flex", gap: "10px" }}>
        <button onClick={trackLocation} style={{ padding: "10px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Track Location</button>
        <button onClick={updateFishData} style={{ padding: "10px", backgroundColor: "orange", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Find Fish</button>
        <button onClick={() => window.location.href = "/"} style={{ padding: "10px", backgroundColor: "green", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Home</button>
      </div>
    </div>
  );
};

export default Satellite1;