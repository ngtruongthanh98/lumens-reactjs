import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const TextButton = (props) => {
  return (
    <button type="button" className="text-button">
      <span className="btn-name">{props.buttonName}</span>
    </button>
  );
};

export default TextButton;

TextButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
};
