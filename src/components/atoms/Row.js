import React from 'react';
import propTypes from 'prop-types';

const Row = props => {
  const {
    cols,
    children,
    textCenter,
    className,
  } = props;
  const renderCols = (items = []) => {
    const colSize = Math.floor(12 / (items.length === 0 ? 1 : items.length)); 
    return items.map((item, key) => (
      <div key={'item-' + key} className={'col-' + colSize + ' ' + className}>
        { item }
      </div>
    ));
  };
  return (
    <div className={`row ${textCenter ? 'text-center' : ''}  ${ className ? className : ''}`}>
      {cols ?
        renderCols(cols)
        : 
        <div className={`col-12 ${className}`}>
          { children }
        </div>
      }
    </div>
  );
};

Row.propTypes = {
  cols: propTypes.array,
  children: propTypes.node,
  textCenter: propTypes.bool,
  className: propTypes.string,
};

export default Row;
