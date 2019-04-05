import React, {useContext, useEffect} from 'react';
import Page from '../atoms/Page.js';
import Row from '../atoms/Row.js';
import ProggressBar from '../atoms/ProggressBar.js';
import AppContext from '../../AppContext.js'
import Gmap from '../atoms/Gmap.js';
import Geo from '../../lib/Geo.js';

const HomePage = props => {
  const {state, dispatch} = props.store || useContext(AppContext);
  const ui = (state && state.ui) || {};
  const location = (state && state.location) || {};
  const isMax = () => ui.zoom === 100;
  const isMin = () => ui.zoom === 10;
  useEffect(() => {
    dispatch({type: '@@INIT'});
    Geo().then(({latitude, longitude}) => {
      dispatch({type: 'SET_LOCATION', lat: latitude, lng: longitude});
    });
  }, []);
  return (
    <Page>
      <Row>
        {location.lat && ui.zoom
            ?
            <Gmap 
              lat={location.lat}
              lng={location.lng}
              zoom={ui.zoom / 10 + 8}
            />
            :
            null
        }
      </Row>

      <Row 
        className='zoom-title'
      >
        <h6 className='text-center'>Zoom</h6>
        <ProggressBar value={ui.zoom || 0} />
      </Row>

      <Row
        textCenter
        cols={[
          ( isMin() ? null :
            <button
              className='btn'
              onClick={() => {
                dispatch({type: 'ZOOM_OUT'});
              }}
            >-</button>
          ),
          ( isMax() ? null :
            <button
              className='btn'
              onClick={() => {
                dispatch({type: 'ZOOM_IN'});
              }}
            >+</button>
          ),
        ]}
      />
    </Page>
  );
};

export default HomePage;
