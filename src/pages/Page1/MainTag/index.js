import React from 'react';
import ProgressBar from '../../../components/ProgressBar';
import './styles.scss';

const MainTag = () => {
  return (
    <div className="main-tag">
      <div className="available-coin">
        <div className="text">Available Coin balance</div>
        <div className="amount">340</div>
      </div>

      <ProgressBar progress="60%" />
    </div>
  );
};

export default MainTag;
