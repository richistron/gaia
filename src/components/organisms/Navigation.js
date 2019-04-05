import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import propTypes from 'prop-types';

const Navigation = props => {
  useEffect(() => {
    if (!props.location.pathname) {
      props.history.push('/');
    }
  }, []);
  return (
    <nav className={'navbar sticky-top navbar-light bg-light'}>
      {props.location.pathname === '/'
        ?
        <span className='navbar-brand'>Gaia</span>
        :
        <Link className={'navbar-brand'} to={'/'}> Gaia </Link>
      }
      <button
        className={ 'navbar-toggler' }
        type={ 'button'  }
        data-toggle={ 'collapse' }
      >
        <span className="navbar-toggler-icon"></span>
      </button>
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
