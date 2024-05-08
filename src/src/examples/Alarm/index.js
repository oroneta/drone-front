import React from 'react';
import { Link } from 'react-router-dom';

const AlarmImage = () => {
  // return;
  return (
    <div id="AlarmImage" className="Card-Root">
      <div className="layout">
        <ion-icon name="alert-circle-outline"></ion-icon>
        <div>
          <h4>New alarm</h4>
          <p>
            <span className="AlarmDroneDIC"></span> has detected an alarm image
          </p>
          {/* <small style="display: none;">Click to view more</small> */}
        </div>
      </div>
      <div className="btn">
        <a className="c"
        onClick={() => {
          window.AlarmImageObj.status = false;
          window.AlarmImage.hide();
        }}
        >Close</a>
        <Link
          to="/map"
          className="v"
          onClick={() => {
            window.AlarmImageObj.status = true;
            window.AlarmImage.hide();
          }}
        //   component={Map}
        >
        View
        </Link>
      </div>
    </div>
  );
};

export default AlarmImage;
