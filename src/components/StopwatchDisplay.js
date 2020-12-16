import React from 'react';
import PropTypes from 'prop-types';

class StopwatchDisplay extends React.Component {
  render() {
    return (
      <div className={'stopwatch__display'}>
        <span>
          {this.props.formatTime(this.props.currentTimeMin)}:
          {this.props.formatTime(this.props.currentTimeSec)}:
          {this.props.formatTime(this.props.currentTimeMs, 'ms')}
        </span>
      </div>
    );
  }
}

StopwatchDisplay.propTypes = {
  formatTime: PropTypes.func,
  currentTimeMin: PropTypes.number,
  currentTimeSec: PropTypes.number,
  currentTimeMs: PropTypes.number,
};


export default StopwatchDisplay;
