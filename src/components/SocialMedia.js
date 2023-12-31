import React from 'react';
import '../pages/styles.css';
import Image from './Image';
import xLogoImg from '../../static/x.png';
import githubLogoImg from '../../static/github.png';
import { IMAGE_SIZES } from '../constants/Constants';

const SocialMedia = () => {
  return (
    <div className="flex items-center">
      <a
        className="m-2 tooltip"
        href={'https://twitter.com/KiranCNayak'}
        data-text={'Talk to me on X'}
        tooltip-position={'top'}
        target="_blank"
      >
        <Image size={IMAGE_SIZES.small.key} alt={'X LOGO'} src={xLogoImg} />
      </a>
      <a
        className="m-2 tooltip"
        data-text={'Link to my GitHub'}
        tooltip-position={'top'}
        href={'https://github.com/KiranCNayak'}
        target="_blank"
      >
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
