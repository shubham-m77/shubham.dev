
'use client' 
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import smileMemoji from "@/assets/images/memoji-smile.png"

// Access token from .env
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function MapboxMap({
  lng= 86.29529,
  lat = 24.18912,
  zoom = 10,
}: {
  lng?: number;
  lat?: number;
  zoom?: number;
}) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    // Optional: Add zoom and rotation controls
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

const el = document.createElement("div");
el.className = `
  relative
  w-[75px] h-[75px]
  flex items-center justify-center
`;

const ping = document.createElement("div");
ping.className = `
  absolute
  w-full h-full
  rounded-full
  bg-gradient-to-br from-emerald-300 to-blue-700
  opacity-70
  animate-ping
  z-0
`;

const markerBg = document.createElement("div");
markerBg.className = `
  relative
  w-full h-full
  rounded-full
  bg-gradient-to-br from-emerald-300 to-blue-700
  shadow-lg
  overflow-hidden
  z-10
`;

const img = document.createElement("img");
img.src = smileMemoji.src;
img.className = "w-full h-full object-cover";

markerBg.appendChild(img);
el.appendChild(ping);
el.appendChild(markerBg);

    // Optional marker
    new mapboxgl.Marker(el).setLngLat([lng, lat]).addTo(map.current);
    map.current.on('click', () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(googleMapsUrl, '_blank');
  });
  }, [lat, lng, zoom]);

  return (
    <div className="w-full h-full rounded-3xl overflow-hidden shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
}
