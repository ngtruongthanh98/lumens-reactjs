import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const SlideInfo = (props) => {
  return (
    <div className="slide-info">
      <div className="title">{props.title}</div>

      <div className="content">
        {props.tagElement1}

        {props.tagElement2}
      </div>
    </div>
  );
};

export default SlideInfo;

SlideInfo.propTypes = {
  title: PropTypes.string.isRequired,
  tagElement1: PropTypes.element.isRequired,
  tagElement2: PropTypes.element.isRequired,
};
