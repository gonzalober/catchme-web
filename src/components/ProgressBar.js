import React from "react";
import runner from "../images/stickperson.gif";
import PropTypes from 'prop-types';


const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 50,
    margin: 50,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    transition: 'width 1s ease-in-out',
    textAlign: 'right',
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}><img src={runner} className="kiril-head" alt="home-icon" /></span>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  bgcolor: PropTypes.string,
  completed: PropTypes.number,
};

export default ProgressBar;
