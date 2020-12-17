import React from "react";
import PropTypes from "prop-types";

const ProgressBar = (props) => {
  const { completed, raceDist } = props;
  const currentPercentage = (completed / raceDist) * 100;
  const containerStyles = {
    height: 20,
    width: "80%",
    backgroundColor: "black",
    borderRadius: 50,
    margin: "0 auto",
  };

  const fillerStyles = {
    height: "100%",
    width: `${currentPercentage >= 100 ? 100 : currentPercentage}%`,
    backgroundColor: "white",
    borderRadius: "inherit",
    transition: "width 1s ease-in-out",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  completed: PropTypes.number,
  raceDist: PropTypes.number,
};

export default ProgressBar;
