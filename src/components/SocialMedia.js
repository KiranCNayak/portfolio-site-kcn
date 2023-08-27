import React from 'react';
import Image from './Image';
import xLogoImg from '../assets/x.png';
import { IMAGE_SIZES } from '../constants/Constants';

const SocialMedia = () => {
  return (
    <div>
      <a href={'https://twitter.com/KiranCNayak'} target="_blank">
        <Image size={IMAGE_SIZES.small.key} alt={'X link'} src={xLogoImg} />
      </a>
    </div>
  );
};

export default SocialMedia;
