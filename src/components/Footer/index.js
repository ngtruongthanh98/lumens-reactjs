import React from 'react';
import './styles.scss';

import HomeIcon from './assets/home.svg';
import InfoIcon from './assets/info.svg';
import NotiIcon from './assets/noti.svg';
import UserIcon from './assets/user.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="icon-box">
        <img src={HomeIcon} alt="Home" />
        <img src={NotiIcon} alt="Noti" />
        <img src={InfoIcon} alt="Info" />
        <img src={UserIcon} alt="User" />
      </div>

      <div className="home-indicator"></div>
    </div>
  );
};

export default Footer;
