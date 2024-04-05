import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'

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
  
  

const addRoute = (coords) => {
  // If a route is already loaded, remove it
  if (map.getSource('route')) {
    map.removeLayer('route');
    map.removeSource('route');
  } else {
    // Add a new layer to the map
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: coords
        }
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#03AA46',
        'line-width': 8,
        'line-opacity': 0.8
      }
    });
  }

}
  
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    }
     );
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    const getMatch = async(coordinates, radius, profile) =>  {
      const radiuses = radius.join(';');
    // Create the query
    const query = await fetch(
      `https://api.mapbox.com/matching/v5/mapbox/${profile}/${coordinates}?geometries=geojson&radiuses=${radiuses}&steps=true&access_token=${mapboxgl.accessToken}`,
      { method: 'GET' }
    );
    const response = await query.json();
    // Handle errors
    if (response.code !== 'Ok') {
      alert(
        `${response.code} - ${response.message}.\n\nFor more information: https://docs.mapbox.com/api/navigation/map-matching/#map-matching-api-errors`
      );
      return;
    }
    // Get the coordinates from the response
    const coords = response.matchings[0].geometry;
    window.alert(coords);
  addRoute(coords)
  getInstructions(response.matchings[0]);

    }

    function getInstructions(data) {
      // Target the sidebar to add the instructions
      const directions = document.getElementById('directions');
      let tripDirections = '';
      // Output the instructions for each step of each leg in the response object
      for (const leg of data.legs) {
        const steps = leg.steps;
        for (const step of steps) {
          tripDirections += `<li>${step.maneuver.instruction}</li>`;
        }
      }
      directions.innerHTML = `<p><strong>Trip duration: ${Math.floor(
        data.duration / 60
      )} min.</strong></p><ol>${tripDirections}</ol>`;
      }    

    const Draw = new MapboxDraw({
      // Instead of showing all the draw tools, show only the line string and delete tools.
      displayControlsDefault: false,
      controls: {
        line_string: true,
        trash: true
      },
      // Set the draw mode to draw LineStrings by default.
      defaultMode: 'draw_line_string',
      styles: [
        // Set the line style for the user-input coordinates.
        {
          id: 'gl-draw-line',
          type: 'line',
          filter: ['all', ['==', '$type', 'LineString'], ['!=', 'mode', 'static']],
          layout: {
            'line-cap': 'round',
            'line-join': 'round'
          },
          paint: {
            'line-color': '#438EE4',
            'line-dasharray': [0.2, 2],
            'line-width': 4,
            'line-opacity': 0.7
          }
        },
        // Style the vertex point halos.
        {
          id: 'gl-draw-polygon-and-line-vertex-halo-active',
          type: 'circle',
          filter: [
            'all',
            ['==', 'meta', 'vertex'],
            ['==', '$type', 'Point'],
            ['!=', 'mode', 'static']
          ],
          paint: {
            'circle-radius': 12,
            'circle-color': '#FFF'
          }
        },
        // Style the vertex points.
        {
          id: 'gl-draw-polygon-and-line-vertex-active',
          type: 'circle',
          filter: [
            'all',
            ['==', 'meta', 'vertex'],
            ['==', '$type', 'Point'],
            ['!=', 'mode', 'static']
          ],
          paint: {
            'circle-radius': 8,
            'circle-color': '#438EE4'
          }
        }
      ]
    })
    map.current.addControl(Draw, 'top-right')
    const updateRoute = (prof = 'driving', draw) => {
      const profile = 'driving';
      // Get the coordinates that were drawn on the map
      const data = Draw.getAll();
      const lastFeature = data.features.length - 1;
      const coords = data.features[lastFeature].geometry.coordinates;
      // Format the coordinates
      const newCoords = coords.join(';');
      // Set the radius for each coordinate pair to 25 meters
      const radius = coords.map(() => 25);
      getMatch(newCoords, radius, profile)
    }
    updateRoute()
    
  }, [lat, lng, zoom]);

  
  return (
    <div className='main'>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>

      <div
        ref={mapContainer}
        className="map-container"
      />
    </div>
  );
};

export default MapApp;
