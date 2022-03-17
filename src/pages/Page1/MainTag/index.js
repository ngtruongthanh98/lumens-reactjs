import React from 'react';
import ProgressBar from '../../../components/ProgressBar';
import TextIconButton from '../../../components/TextIconButton';
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
    </div>
  );
};

export default MainTag;
