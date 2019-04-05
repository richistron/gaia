import React from 'react';
import propTypes from 'prop-types';

const ProggressBar = ({value = 0}) => { return (
    <div className='progress'>
      <div
        className='progress-bar'
        role='progressbar' 
        style={{width: value + '%'}}
        aria-valuenow={value}
        aria-valuemin='10' 
        aria-valuemax='100'
      ></div>
    </div>
  );
};

ProggressBar.propTypes = {
  value: propTypes.number,
};

export default ProggressBar;
