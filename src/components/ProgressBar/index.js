import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <span className="bar">
        <span className="progress" style={{ width: props.progress }}></span>
      </span>
    </div>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  progress: PropTypes.string.isRequired,
};
