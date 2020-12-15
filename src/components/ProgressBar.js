import React from "react";
import runner from "../images/stickperson.gif";
import PropTypes from "prop-types";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: "80%",
    backgroundColor: "black",
    borderRadius: 50,
    margin: 20,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    transition: "width 1s ease-in-out",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };
  // alignItems: "center"
  return (
    <div style={{ justifyContent: "center" }}>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>
            <img src={runner} className="kiril-head" alt="home-icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  bgcolor: PropTypes.string,
  completed: PropTypes.number,
};

export default ProgressBar;
