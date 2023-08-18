import React from 'react';
import { Link } from 'react-router-dom';

const DownloadEazypayApp = ({text}) => {
  return (
    <>
      <div className="payroll__run__download">
        <div>
          <p> {text} </p>
          <div className="payroll__run__download--btns">
            <Link to="#">
              <img src="images/apple.png" alt="" />
              <div className="other__details">
                <span className="other__details--header">Download on the</span>
                <span className="other__details--paragraph">Appstore</span>
              </div>
            </Link>
            <Link to="#">
              <img src="images/android.png" alt="" />
              <div className="other__details">
                <span className="other__details--header">Download on the</span>
                <span className="other__details--paragraph">Appstore</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default DownloadEazypayApp