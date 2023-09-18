import React from 'react';

import { MOBILE_MOCKUP_SIZES } from '../constants/Constants';
import iPhoneMockupBorder from '../../static/iphone14pro_border.png';

function MobileScreenImage() {
  return (
    <div className="flex flex-col items-center m-2">
      <div>MobileScreenImage</div>
      <div className="relative" style={{ backgroundImage: `${firstPage}` }}>
        <img
          alt={'mockup 1'}
          height={MOBILE_MOCKUP_SIZES['2xl'].height}
          width={MOBILE_MOCKUP_SIZES['2xl'].width}
          src={iPhoneMockupBorder}
          className={'z-10'}
        />
      </div>
    </div>
  );
}

export default MobileScreenImage;
