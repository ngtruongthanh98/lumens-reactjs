import React from 'react';
import ProgressBar from '../../../components/ProgressBar';
import TextIconButton from '../../../components/TextIconButton';
import TextButton from '../../../components/TextButton';
import './styles.scss';

const MainTag = () => {
  return (
    <div className="main-tag">
      <div className="available-coin">
        <div className="text">Available Coin balance</div>
        <div className="amount">340</div>
      </div>

      <ProgressBar progress="60%" />

      <div className="text-info">
        You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.
      </div>

      <TextIconButton buttonName="View tier benefits" />

      <TextButton buttonName="My Coupons" />

      <div className="updated-date">Updated : 02/11/2021</div>
    </div>
  );
};

export default MainTag;
