import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from './GlobalStateProvider';

const AlarmImage = () => {
  const closeAlarm = () => {
    document.getElementById('AlarmImage').classList.remove('active');
  };

  return (
    <div id="AlarmImage" className="Card-Root">
      <div className="layout">
        <ion-icon name="alert-circle-outline"></ion-icon>
        <div>
          <h4>New alarm</h4>
          <p>
            <span className="AlarmDroneDIC"></span> has detected an alarm image
          </p>
          {/* <small>Click to view more</small> */}
        </div>
      </div>
      <div className="btn">
        <a className="c" onClick={closeAlarm}>Close</a>
        <Link
          to="/map"
          className="v"
          onClick={closeAlarm}
        //   component={Map}
        >
        View
        </Link>
      </div>
    </div>
  );
};

export default AlarmImage;
