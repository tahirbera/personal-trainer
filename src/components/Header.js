import React from 'react';
import Carbonl from '../images/carbonl.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-logo'>
        <img className='carbon-logo' src={Carbonl} alt='CarbonLogo' />
      </div>
      {/* <div className='header-sections'>
        <ul className='header-sections-flex'>
          <li className='flex-li'>Hakkımda</li>
          <li className='flex-li'>Eğitim</li>
          <li className='flex-li'>İletişim</li>
          <li className='flex-li'>Adres</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Header;
