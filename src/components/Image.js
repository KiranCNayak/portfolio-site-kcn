import React from 'react';
import { IMAGE_SIZES } from '../constants/Constants';

const Image = (props) => {
  return (
    <img
      {...props}
      height={IMAGE_SIZES[props.size].height}
      width={IMAGE_SIZES[props.size].width}
      className={props?.rounded ? 'rounded-full' : ''}
    />
  );
};

export default Image;
