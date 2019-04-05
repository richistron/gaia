import React from 'react';
import propTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

const Marker = props => {
  switch (props.type) {
    case 'home':
      return <i className="large material-icons">home</i>;

    case 'location':
      return <i className="large material-icons">location_on</i>;

    default:
      return null;
  }
};

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

      >
        <Marker
          lat={20.6678244}
          lng={-103.3578431}
          type={'home'}
        />

        <Marker
          lat={20.6809156}
          lng={-103.3334337}
          type={'home'}
        />
        <Marker
          lat={lat}
          lng={lng}
          type={'location'}
        />
      </GoogleMapReact>
    </div>
  );
}

Gmap.propTypes = {
  lat: propTypes.number.isRequired,
  lng: propTypes.number.isRequired,
  zoom: propTypes.number.isRequired,
};

export default Gmap;
