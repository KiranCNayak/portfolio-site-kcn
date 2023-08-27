import React from 'react';
import { IMAGE_SIZES } from '../constants/Constants';

const Image = (props) => {
  return (
    <img
      {...props}
      className={`rounded-full ${IMAGE_SIZES[props.size].value}`}
    />
  );
};

export default Image;
