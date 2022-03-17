import React from 'react';
import BackButton from '../../components/BackButton';
import TextButton from '../../components/TextButton';
import './styles.scss';

const Page1 = () => {
  return (
    <div className="page-1">
      <div className="header">
        <BackButton />

        <div className="content-box">
          <div className="title">Silver Tier</div>
          <div className="content">
            In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive
            rewards.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
