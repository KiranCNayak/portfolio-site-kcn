import React from 'react';
import { Link } from 'gatsby';
import mainLogo from '../assets/kcn-logo.png';
import Image from './Image';
import { IMAGE_SIZES } from '../constants/Constants';

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-slate-600 w-full p-4">
      <Image src={mainLogo} alt={'MAIN LOGO'} size={IMAGE_SIZES['3xl'].key} />
      <nav>
        <ul className="flex flex-row">
          <li className="py-4 px-6 ml-4 bg-gradient-to-br hover:from-purple-900 from-purple-800 hover:via-purple-800 via-purple-900 hover:to-purple-900 to-purple-800 text-white text-lg font-light">
            <Link to={'/'}>Home</Link>
          </li>
          <li className="py-4 px-6 ml-4 bg-gradient-to-br hover:from-purple-900 from-purple-800 hover:via-purple-800 via-purple-900 hover:to-purple-900 to-purple-800 text-white text-lg font-light">
            <Link to={'/projects'}>Projects</Link>
          </li>
          <li className="py-4 px-6 ml-4 bg-gradient-to-br hover:from-purple-900 from-purple-800 hover:via-purple-800 via-purple-900 hover:to-purple-900 to-purple-800 text-white text-lg font-light">
            <Link to={'/resume'}>Resume</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
