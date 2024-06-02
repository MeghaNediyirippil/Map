import GoogleMapReact from 'google-map-react';
import React, { useEffect, useRef } from 'react';

function FullMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = () => {
      if (mapRef.current && mapRef.current.map) {
        mapRef.current.map.panTo({ lat: 20.5937, lng: 78.9629 });
        mapRef.current.map.setZoom(5);
      }
    };

    if (mapRef.current) {
      initMap();
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY' }}
        defaultCenter={{ lat: 20.5937, lng: 78.9629 }}
        defaultZoom={5}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = { map };
        }}
      >
        {/* Marker Component */}
        <Marker
          lat={20.5937} // Marker latitude
          lng={78.9629} // Marker longitude
          text="My Marker" // Marker text (optional)
        />
      </GoogleMapReact>
    </div>
  );
}

// Marker Component
const Marker = ({ text }) => (
    <div style={{
      position: 'absolute',
      transform: 'translate(-50%, -100%)', // Adjust the position to align the marker correctly
    }}>
      <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png" alt="Marker" style={{ width: '60px', height: '60px' }} />
      <div style={{ color: 'black', textAlign: 'center' }}>{text}</div>
    </div>
  );

export default FullMap;
