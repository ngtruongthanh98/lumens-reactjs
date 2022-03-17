import React from 'react';
import PropTypes from 'prop-types';
import IconCoin from '../../assets/images/icon-coin.svg';
import { formatNumber } from '../../utils';
import './styles.scss';

const TagElement = (props) => {
  return (
    <div className="tag-element">
      {props.pictureElement}

      {props.isCoinIcon ? (
        <div className="box-item">
          <img src={IconCoin} alt="Coin" />
          <span className="coin-amount-icon">{formatNumber(props.coinAmount)} Coins</span>
        </div>
      ) : (
        <div className="coin-amount">{formatNumber(props.coinAmount)} Coins</div>
      )}

      <div className="detail-info">{props.detailInfo}</div>

      {props.isInsuficient && <div className="blue-text">Insufficient coins</div>}
    </div>
  );
};

export default TagElement;

TagElement.defaultProps = {
  isInsuficient: false,
  isCoinIcon: false,
};

TagElement.propTypes = {
  pictureElement: PropTypes.element.isRequired,
  coinAmount: PropTypes.number.isRequired,
  detailInfo: PropTypes.string.isRequired,
  isInsuficient: PropTypes.bool,
  isCoinIcon: PropTypes.bool,
};
