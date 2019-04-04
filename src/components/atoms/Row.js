import React from 'react';
import propTypes from 'prop-types';

const Row = props => {
  const {cols, children} = props;
  return (
    <div className={'row'}>
      {cols ?
        null // TODO, allow multiple rows
        : 
        <div className={'col-12'}>
          { children }
        </div>
      }
    </div>
  );
};

Row.propTypes = {
  cols: propTypes.array,
  children: propTypes.node,
};

export default Row;
