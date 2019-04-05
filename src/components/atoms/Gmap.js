import React from 'react';
import propTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

const Gmap = ({lat, lng, zoom}) => {
  return (
    <div style={{ height: '70vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env['REACT_APP_LA_PODERORA']}}
        center={{
          lat: lat,
          lng: lng
        }}
        zoom={zoom}
      />
    </div>
  );
}

Gmap.propTypes = {
  lat: propTypes.number.isRequired,
  lng: propTypes.number.isRequired,
  zoom: propTypes.number.isRequired,
};

export default Gmap;
