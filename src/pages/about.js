import React from 'react';
import Image from '../components/Image';
import profileImg from '../../static/kcn_image.jpg';
import {
  IMAGE_SIZES,
  KNOWN_FRAMEWORKS_AND_TOOLS,
} from '../constants/Constants';
import SocialMedia from '../components/SocialMedia';
import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <div className="flex bg-slate-500 p-4">
        <div className="flex items-center">
          <Image
            size={IMAGE_SIZES['5xl'].key}
            alt={'profile'}
            src={profileImg}
            rounded
          />
        </div>
        <div className="flex flex-col flex-grow items-center">
          <p className="text-5xl font-bold leading-normal">Kiran C Nayak</p>
          <div className="flex flex-col items-center">
            <p className="text-xl font-semibold">Frontend Developer</p>
            <div className="flex flex-row">
              {KNOWN_FRAMEWORKS_AND_TOOLS.map((item) => (
                <Image
                  key={item.id}
                  size={IMAGE_SIZES.small.key}
                  alt={item.alt}
                  src={item.src}
                />
              ))}
            </div>
          </div>
        </div>
        <SocialMedia />
      </div>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>About Page</title>;
