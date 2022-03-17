import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import BackIcon from '../../assets/images/back-icon.svg';

const BackButton = () => {
  return (
    <button type="button" className="back-button">
      <img src={BackIcon} alt="Back" />
    </button>
  );
};

export default BackButton;

BackButton.propTypes = {};
