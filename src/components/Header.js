import React from 'react';
import { Link } from 'gatsby';
import mainLogo from '../../static/kcn-logo.png';
import Image from './Image';
import { IMAGE_SIZES } from '../constants/Constants';

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-slate-600 w-full p-4">
      <div className="p-4 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-full">
        <p
          className="text-4xl leading-none font-bold text-purple-600"
          style={{
            WebkitTextStroke: '2px #FACC15',
          }}
        >
          {'<'}&nbsp;KCN&nbsp;{'/>'}
        </p>
      </div>
      <nav>
        <ul className="flex flex-row">
          <Link to={'/'}>
            <li className="py-4 px-6 ml-4 bg-gradient-to-br hover:from-yellow-500 from-purple-800 hover:via-yellow-600 via-purple-900 hover:to-yellow-500 to-purple-800 text-yellow-400 hover:text-purple-800 rounded-lg text-lg font-light">
              Home
            </li>
          </Link>

          <Link to={'#projects'}>
            <li className="py-4 px-6 ml-4 bg-gradient-to-br hover:from-yellow-500 from-purple-800 hover:via-yellow-600 via-purple-900 hover:to-yellow-500 to-purple-800 text-yellow-400 hover:text-purple-800 rounded-lg text-lg font-light">
              Projects
            </li>
          </Link>

          <Link to={'/resume'}>
            <li className="py-4 px-6 ml-4 bg-gradient-to-br hover:from-yellow-500 from-purple-800 hover:via-yellow-600 via-purple-900 hover:to-yellow-500 to-purple-800 text-yellow-400 hover:text-purple-800 rounded-lg text-lg font-light">
              Resume
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
