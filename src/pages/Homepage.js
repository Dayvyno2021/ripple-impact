import * as React from 'react';
import HomeHeader from '../components/HomeHeader';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className='container'>
      <div className="homepage">
        <HomeHeader />
        <div className="payroll">
          <div className="payroll__run">
            <div className="payroll__run__frame">
              <div className="payroll__run__frame--text">
                <h1 className="header--text">
                  <span className="black">Run your </span>
                  <span className="green">payroll </span> 
                  <span className="cream">easily </span>
                  <span className="black">in </span>
                  <span className="red">seconds</span>
                </h1>
                <span className="paragraph">We’ve built an all-inclusive simple solution for individual and businesses to manage staff, pay salaries, bills, and relevant taxes all at once.</span>
              </div>
              <Link to='#' className="payroll__run__frame--button">
                <button className='btn2'>
                  Start Using Free, Forever
                </button>
              </Link>
            </div>
            <div className="payroll__run__download">
              <div>
                <p>Download the Eazipay App</p>
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
          </div>
          <div className="payroll__welcome"></div>
        </div>
      </div>
    </div>
  )
}

export default Homepage