import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Satellite1 = () => {
  const mapRef = useRef(null);
  const userMarkerRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);
  const [fishMarkers, setFishMarkers] = useState([]);
  const [routePolyline, setRoutePolyline] = useState(null);
  const [currentStep, setCurrentStep] = useState("Click a fish location to navigate");
  const [routeSteps, setRouteSteps] = useState([]);
  
  useEffect(() => {
    if (!mapRef.current) {
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

  const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (angle) => (angle * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
    return R * c;
  };

  const getDirection = (lat1, lon1, lat2, lon2) => {
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    let direction = "";
    
    if (Math.abs(dLat) > Math.abs(dLon)) {
      direction = dLat > 0 ? "Head North" : "Head South";
    } else {
      direction = dLon > 0 ? "Head East" : "Head West";
    }
    return direction;
  };

  const updateNavigationStep = (lat, lon) => {
    if (routeSteps.length === 0) return;
    
    const [nextStep, ...remainingSteps] = routeSteps;
    const distanceToNext = haversineDistance(lat, lon, nextStep.lat, nextStep.lon);
    
    if (distanceToNext < 0.05) {
      setRouteSteps(remainingSteps);
      setCurrentStep(nextStep.instruction);
    } else {
      setCurrentStep(getDirection(lat, lon, nextStep.lat, nextStep.lon));
    }
  };

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
        updateNavigationStep(latitude, longitude);
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
    
    if (routePolyline) {
      mapRef.current.removeLayer(routePolyline);
    }
    
    const route = [[userLocation.latitude, userLocation.longitude], [fishLat, fishLon]];
    const polyline = L.polyline(route, { color: "blue", weight: 4 }).addTo(mapRef.current);
    setRoutePolyline(polyline);
    
    setRouteSteps([{ lat: fishLat, lon: fishLon, instruction: "You have reached your destination." }]);
    setCurrentStep(getDirection(userLocation.latitude, userLocation.longitude, fishLat, fishLon));
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <div id="map" style={{ width: "100%", height: "80vh" }}></div>
      <div style={{ textAlign: "center", marginTop: "10px", fontWeight: "bold", color: "#333" }}>{currentStep}</div>
      <div style={{ position: "absolute", bottom: "20px", left: "20px", display: "flex", gap: "10px" }}>
        <button style={{ padding: "10px 20px", background: "blue", color: "white", borderRadius: "10px" }} onClick={trackLocation}>Track</button>
        <button style={{ padding: "10px 20px", background: "green", color: "white", borderRadius: "10px" }} onClick={updateFishData}>Find Fish</button>
        <button style={{ padding: "10px 20px", background: "red", color: "white", borderRadius: "10px" }} onClick={() => setRoutePolyline(null)}>Home</button>
      </div>
    </div>
  );
};

export default Satellite1;
