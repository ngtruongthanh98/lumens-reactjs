import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import RightIcon from '../../assets/images/right-icon.svg';

const TextIconButton = (props) => {
  return (
    <button type="button" className="icon-text-button">
      <div className="btn-name">{props.buttonName}</div>
      <img src={RightIcon} alt="Right" />
    </button>
  );
};

export default TextIconButton;

TextIconButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
};
