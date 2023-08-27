import React from 'react';
import Image from './Image';
import profileImg from '../assets/kcn_image.jpg';
import reactLogoImg from '../assets/react.png';
import css3LogoImg from '../assets/css3.png';
import html5LogoImg from '../assets/html5.png';
import nextJSLogoImg from '../assets/nextjs.png';
import jsLogoImg from '../assets/js.png';
import tailwindCSSLogoImg from '../assets/tailwindcss.png';
import { IMAGE_SIZES } from '../constants/Constants';
import SocialMedia from './SocialMedia';

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-slate-600 w-full p-4">
      <Image size={IMAGE_SIZES.large.key} alt={'profile'} src={profileImg} />
      <div className="flex flex-col items-center">
        <p className="text-5xl leading-normal">Kiran C Nayak</p>
        <div className="flex flex-col items-center">
          <p>Frontend Developer</p>
          <div className="flex flex-row">
            <Image
              size={IMAGE_SIZES.extraSmall.key}
              alt={'HTML Icon'}
              src={html5LogoImg}
            />
            <Image
              size={IMAGE_SIZES.extraSmall.key}
              alt={'CSS ICON'}
              src={css3LogoImg}
            />
            <Image
              size={IMAGE_SIZES.extraSmall.key}
              alt={'JS ICON'}
              src={jsLogoImg}
            />
            <Image
              size={IMAGE_SIZES.extraSmall.key}
              alt={'REACT ICON'}
              src={reactLogoImg}
            />
            <Image
              size={IMAGE_SIZES.extraSmall.key}
              alt={'NEXTJS ICON'}
              src={nextJSLogoImg}
            />
            <Image
              size={IMAGE_SIZES.extraSmall.key}
              alt={'TAILWINDCSS ICON'}
              src={tailwindCSSLogoImg}
            />
          </div>
        </div>
      </div>
      <SocialMedia />
    </div>
  );
};

export default Header;
