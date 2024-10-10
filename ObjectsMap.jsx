import React, { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ScaleControl,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './styles.css';

function CustomMarkerMap() {
  const position = [-3.73839, -38.5234];

  // Estado para controlar a camada atual
  const [currentLayer, setCurrentLayer] = useState('openstreetmap');

  // Função para obter a URL da camada com base na camada atual
  const getLayerUrl = () => {
    if (currentLayer === 'google') {
      // Substitua com a URL da camada do Google Maps
      return 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}';
    } else {
      // Camada OpenStreetMap (padrão)
      return 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    }
  };

  return (
    <div>
      {/* Mapa */}
      <MapContainer
        center={position}
        zoom={15}
        className="map-container"
        maxZoom={13}
        minZoom={5}
      >
        <ScaleControl position={'bottomright'} />

        {/* TileLayer com base na camada atual */}
        <TileLayer
          url={getLayerUrl()}
          attribution="&copy; OpenStreetMap contributors"
        />
      </MapContainer>
    </div>
  );
}

export default CustomMarkerMap;
