import React from 'react';
import propTypes from 'prop-types';

const Page = props => {
  return (
    <div className={'page'}>
      {props.children}
    </div>
  );
};

Page.propTypes = {
  children: propTypes.any,
};

export default Page;

