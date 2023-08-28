import React from 'react';
import { IMAGE_SIZES, MOBILE_MOCKUP_SIZES } from '../constants/Constants';

const Image = (props) => {
  return (
    <img
      {...props}
      height={
        props.mockup
          ? MOBILE_MOCKUP_SIZES[props.size].height
          : IMAGE_SIZES[props.size].height
      }
      width={
        props.mockup
          ? MOBILE_MOCKUP_SIZES[props.size].width
          : IMAGE_SIZES[props.size].width
      }
      className={props?.rounded ? 'rounded-full' : ''}
    />
  );
};

export default Image;
