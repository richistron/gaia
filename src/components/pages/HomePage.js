import React, {useContext, useEffect} from 'react';
import Page from '../atoms/Page.js';
import Row from '../atoms/Row.js';
import ProggressBar from '../atoms/ProggressBar.js';
import AppContext from '../../AppContext.js'

const HomePage = props => {
  const {state, dispatch} = props.store || useContext(AppContext);
  const ui = (state && state.ui) || {};
  const isMax = () => ui.zoom === 100;
  const isMin = () => ui.zoom === 25;
  useEffect(() => dispatch({type: '@@INIT'}), []);
  return (
    <Page>
      <Row 
      >
        <h6 className='text-center'>Zoom</h6>
        <ProggressBar value={ui.zoom || null} />
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
