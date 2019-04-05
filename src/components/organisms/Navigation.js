import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import propTypes from 'prop-types';

const links = [
  ['/', 'Inicio'],
  ['/map', 'Centros de Apoyo'],
];

const Navigation = props => {
  const [state, setState] = useState({open: false});
  useEffect(() => {
    if (!props.location.pathname) {
      props.history.push('/');
    }
  }, []);
  return (
    <nav className={'navbar sticky-top navbar-light bg-light'}>
      <span className='navbar-brand'></span>
      <button
        className={ 'navbar-toggler' }
        type={ 'button'  }
        data-toggle={ 'collapse' }
        onClick={() => {
          setState({open: !state.open})
        }}
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className={`collapse navbar-collapse ${state.open ? 'show' : ''}`}>
        <ul className='navbar-nav'>
          {links
              .filter(([url]) => url !== props.location.pathname)
              .map(([url, text])=> {
                return (
                  <li key={text} className='nav-item'>
                    <Link
                      onClick={() => {
                        setState({open: false})
                      }}
                      className={'nav-link'}
                      to={url}>{text}</Link>
                  </li>
                );
              })}
        </ul>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  location: propTypes.shape({
    pathname: propTypes.string
  }).isRequired,
  history: propTypes.shape({
    push: propTypes.func,
  }).isRequired,
};

export const TestNavigation = Navigation;
export default withRouter(Navigation);
