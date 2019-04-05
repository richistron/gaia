import React from 'react';
import Page from '../atoms/Page.js';
import {Link} from 'react-router-dom';

const MapPage = props => {
  return (
    <Page>
      <div className='jumbotron'>
        <h1 className='display-4'>Hola</h1>
        <p className='lead'>Aquí podrás encontrar la úbicación de Centros de apoyo cércanos a ti.</p>
        <hr className='my-4'/>
        <p>Ayúdanos a mejorar y envía tu opinón</p>
        <p className='lead'>
          <Link className='btn btn-primary btn-lg' to={'/map'} role='button'>Ver Centros</Link>
        </p>
      </div>
    </Page>
  );
};

export default MapPage;
