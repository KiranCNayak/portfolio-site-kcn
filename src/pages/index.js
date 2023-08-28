import * as React from 'react';
import Layout from '../components/Layout';
import Image from '../components/Image';
import profileImg from '../../static/kcn_image.jpg';
import './styles.css';
import {
  IMAGE_SIZES,
  KNOWN_FRAMEWORKS_AND_TOOLS,
} from '../constants/Constants';
import SocialMedia from '../components/SocialMedia';
import iPhoneMockupBorder from '../../static/iphone14pro_border.png';
import {
  MOBILE_MOCKUP_SIZES,
  LIPSUM_P1,
  LIPSUM_P2,
} from '../constants/Constants';

const IndexPage = () => {
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
            <p className="text-xl font-semibold leading-loose">
              Frontend Developer with experience in
            </p>
            <div className="flex flex-row">
              {KNOWN_FRAMEWORKS_AND_TOOLS.map((item) => (
                <div
                  className="tooltip"
                  data-text={item.toolTipText}
                  key={item.id}
                >
                  <Image
                    size={IMAGE_SIZES.small.key}
                    alt={item.alt}
                    src={item.src}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="projects" className="text-white flex flex-col">
        <p>My Projects</p>
        <div className="flex items-center justify-center p-4 bg-gradient-to-l from-yellow-600 to-yellow-400">
          <Image
            src={iPhoneMockupBorder}
            alt={'mockup 1'}
            size={MOBILE_MOCKUP_SIZES['2xl'].key}
            mockup
          />
          <div className="flex flex-col m-4 text-justify">
            <p>{LIPSUM_P1}</p>
            <p>{LIPSUM_P2}</p>
          </div>
        </div>
        <div className="flex items-center justify-center p-4 bg-gradient-to-r from-red-600 to-red-400">
          <div className="flex flex-col m-4 text-justify">
            <p>{LIPSUM_P1}</p>
            <p>{LIPSUM_P2}</p>
          </div>
          <Image
            src={iPhoneMockupBorder}
            alt={'mockup 1'}
            size={MOBILE_MOCKUP_SIZES['2xl'].key}
            mockup
          />
        </div>
        <div className="flex items-center justify-center p-4 bg-gradient-to-l from-emerald-600 to-emerald-400">
          <Image
            src={iPhoneMockupBorder}
            alt={'mockup 1'}
            size={MOBILE_MOCKUP_SIZES['2xl'].key}
            mockup
          />
          <div className="flex flex-col m-4 text-justify">
            <p>{LIPSUM_P1}</p>
            <p>{LIPSUM_P2}</p>
          </div>
        </div>
        <div className="flex items-center justify-center p-4 bg-gradient-to-r from-purple-700 to-purple-500">
          <div className="flex flex-col m-4 text-justify">
            <p>{LIPSUM_P1}</p>
            <p>{LIPSUM_P2}</p>
          </div>
          <Image
            src={iPhoneMockupBorder}
            alt={'mockup 1'}
            size={MOBILE_MOCKUP_SIZES['2xl'].key}
            mockup
          />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
