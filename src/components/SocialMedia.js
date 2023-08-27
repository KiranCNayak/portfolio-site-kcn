import React from 'react';
import Image from './Image';
import xLogoImg from '../assets/x.png';
import githubLogoImg from '../assets/github.png';
import { IMAGE_SIZES } from '../constants/Constants';

const SocialMedia = () => {
  return (
    <div className="flex">
      <a href={'https://twitter.com/KiranCNayak'} target="_blank">
        <Image size={IMAGE_SIZES.small.key} alt={'X LOGO'} src={xLogoImg} />
      </a>
      <a href={'https://github.com/KiranCNayak'} target="_blank">
        <Image
          size={IMAGE_SIZES.small.key}
          alt={'GITHUB LOGO'}
          src={githubLogoImg}
        />
      </a>
    </div>
  );
};

export default SocialMedia;
