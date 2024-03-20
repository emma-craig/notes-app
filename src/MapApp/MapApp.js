import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapApp.css';

const MapApp = () => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZW1tYWNyYWlnIiwiYSI6ImNsdHd4MjA5bzAwOGMyaXFtd3R4eDN4N24ifQ.zDxlr3ksL8bskUldAmc4wQ';

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(2.1);
  const [lat, setLat] = useState(41.4);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, [lat, lng, zoom]);

  return (
    <>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>

      <div
        ref={mapContainer}
        className="map-container"
      />
    </>
  );
};

export default MapApp;
