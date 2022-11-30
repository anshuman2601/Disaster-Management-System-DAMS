import React from "react";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useRef, useEffect, useState } from "react";
import Container from "@mui/material/Container";

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5zaHVtYW5zYWh1IiwiYSI6ImNsYXlwb2o3bjExb2wzdm9iaWRtemQxejAifQ.u5h94dPCUzloiJfhPN_WDA';

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-122.41669);
    const [lat, setLat] = useState(37.7749);
    const [zoom, setZoom] = useState(15);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12', // stylesheet location
            center: [lng, lat],
            zoom: zoom
        });
    }
    );

    return (
        <Container>
        <div className="map">
          <div ref={mapContainer} className="map-container" />
        </div>
        </Container>
    );
}