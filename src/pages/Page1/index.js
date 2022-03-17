import React from 'react';
import BackButton from '../../components/BackButton';
import MainTag from './MainTag';
import TagElement from '../../components/TagElement';
import SlideInfo from '../../components/SlideInfo';
import './styles.scss';

import Pic1 from '../../assets/images/pic1.svg';
import Pic2 from '../../assets/images/pic2.svg';
import Pic3 from '../../assets/images/pic3.svg';
import Pic4 from '../../assets/images/pic4.svg';
import Pic5 from '../../assets/images/pic5.svg';
import Pic6 from '../../assets/images/pic6.svg';

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

        <MainTag />
      </div>

      <div className="body">
        <SlideInfo
          title="Petro"
          tagElement1={
            <TagElement
              pictureElement={<img src={Pic1} alt="Pic1" />}
              coinAmount="20"
              detailInfo="50% discount for every $100 top-up on your Shell Petrol Card"
            />
          }
          tagElement2={
            <TagElement
              pictureElement={<img src={Pic2} alt="Pic2" />}
              coinAmount="1000"
              detailInfo="70% discount top-up on your Shell Petrol Card"
              isInsuficient
              isCoinIcon
            />
          }
        />

        <SlideInfo
          title="Rental Rebate"
          tagElement1={
            <TagElement
              pictureElement={<img src={Pic3} alt="Pic3" />}
              coinAmount="20"
              detailInfo="Get $20 Rental rebate"
            />
          }
          tagElement2={
            <TagElement
              pictureElement={<img src={Pic4} alt="Pic4" />}
              coinAmount="15"
              detailInfo="Get $500 Rental rebate"
            />
          }
        />

        <SlideInfo
          title="Food and Beverage"
          tagElement1={
            <TagElement
              pictureElement={<img src={Pic5} alt="Pic5" />}
              coinAmount="25"
              detailInfo="NTUC Fairprice $50 Voucher"
            />
          }
          tagElement2={
            <TagElement
              pictureElement={<img src={Pic6} alt="Pic6" />}
              coinAmount="5"
              detailInfo="Free Cold Stone Sundae at any flavour!"
            />
          }
        />
      </div>
    </div>
  );
};

export default Page1;
