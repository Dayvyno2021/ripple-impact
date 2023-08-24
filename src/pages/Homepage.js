import * as React from 'react';
import HomeHeader from '../components/HomeHeader';
import { Link } from 'react-router-dom';
import { dashboardComponents, formInputs, supportAndSettings, walletDetails } from '../data';
import DownloadEazypayApp from '../components/DownloadEazypayApp';
import Footer from '../components/Footer';

const Homepage = () => {

  //Variable to handle the slide animation of the middle slide when the third slide is hovered.
  const [slide2, setSlide2] = React.useState(null);

  //Controls the flow animation
  const [flowStart, setFlowStart] = React.useState(true);

  /**
   * @returns void
   * Sets slide2 to true when the third slide is onMouseOver
   */
  const activateSlide2 = () => {
    setSlide2(true);
  }

    /**
   * @returns void
   * Sets slide2 to false when the third slide is onMouseLeave
   */
  const deactivateSlide2 = () => {
    setSlide2(false);
  }

  React.useEffect(() => {
    setFlowStart(true);
    function runAtInterval() {
      setInterval(() => setFlowStart(false), 35000);
    }
    runAtInterval();
  }, [flowStart])
  

  return (
    <div className='container'>
      <div className="homepage">
        <HomeHeader />
        <section className="payroll">

          <div className="payroll__run">
            <div className="payroll__run__frame">
              <div className="payroll__run__frame--text">
                <h1 className="header--text">
                  <span className="black">Run your </span>
                  <span className="green">payroll </span> <br/>
                  <span className="cream">easily </span>
                  <span className="black">in </span>
                  <span className="red">seconds</span>
                </h1>
                <p className="paragraph">We’ve built an all-inclusive simple solution for individual and businesses to manage staff, pay salaries, bills, and relevant taxes all at once.</p>
              </div>
              <Link to='#' className="payroll__run__frame--button">
                <button className='btn2'>
                  Start Using Free, Forever
                </button>
              </Link>
            </div>
            <DownloadEazypayApp text="Download the Eazipay App" />
          </div>
          <div className="payroll__welcome">
            <div className="welcome__container">

              <div className="welcome__container__design simplify__payroll">
                <img src="images/simplify-payroll.png" alt="" />
                <p className="welcome__container__design--text">
                  Simplify payroll with Eazipay's one-click solution!
                </p>
              </div>

              <div className="welcome__container__design join__business">
                <img src="images/business.png" alt="" />
                <p className="welcome__container__design--text">
                  Join <span>200+</span> businesses using Eazipay's easy solution.
                </p>
              </div>

              <div className="captioned__user">
                <div className="captioned__user__details">
                  <img src="images/user.png" alt="" />
                  <div className="captioned__user__details--text">
                    <h1>Bolade Ifedayo</h1>
                    <h2>Data Analyst</h2>
                    <p> Female | Monthly </p>
                  </div>
                </div>
                <div className="captioned__user__worth">
                  <h1>N250,600.78</h1>
                </div>
              </div>

              <div className="welcome__user">
                <div className="welcome__user__dashboard">
                  <div className="welcome__user__dashboard__easypay">
                    <div className="easypay__logo"></div>
                    <div className="easypay__content">
                      <div className="easypay__content__lists">
                        <div className="easypay__content__lists--group-1">
                          {
                            dashboardComponents?.map((component, i) => (
                              <div className="dashboard__group__components" key={`${i}${component.label}`}>
                                <div className="component__vertical"> </div>
                                <img src={`images/${component.logo}`} alt="" className="component__logo" />
                                <div className="component__label"> {component.label} </div>
                                <div className="component__dropdown"> {component.dropdown? (<span className="material-symbols-outlined" style={{fontSize: "14px"}} >expand_more</span>) : ''} </div>
                              </div>
                            ))
                          }
                        </div>
                        <div className="easypay__content__lists--line"></div>
                        <div className="easypay__content__lists--group-2">
                          {
                            supportAndSettings?.map((component, i) => (
                              <div className="dashboard__group__components" key={`${i}${component.label}`}>
                                <div className="component__vertical"> </div>
                                <img src={`images/${component.logo}`} alt="" className="component__logo" />
                                <div className="component__label"> {component.label} </div>
                                <div className="component__dropdown"> {component.dropdown? (<span className="material-symbols-outlined" style={{fontSize: "14px"}} >expand_more</span>) : ''} </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="welcome__user__dashboard__shekel">
                    <div className="shekel__container">
                      <img src="images/shekel.png" alt="" className="shekel__logo" />
                      <div className="shekel__alarm">
                        <div className="shekel__alarm__container">
                          <img src="images/alarm.png" alt="" />
                          <span>7</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="welcome__user__dashboard__details">
                    <div className="welcome__board">
                      <div className="welcome__board__frame1">
                        <div className="welcome__board__frame1--sub1">
                          <h1>Welcome Abasiama</h1>
                          <p>Pay and manage your employee in minutes</p>
                        </div>
                        <div className="welcome__board__frame1--sub2">
                          <div className="wallet__dashboard">
                            <div className="wallet__dashboard__display">
                              <div className="wallet__dashboard__display-1">
                                <p>Wallet Balance</p>
                                <div className="wallet__dashboard__display-1__amount">
                                  <h1>N12,560,078.00</h1>
                                  <button ><img src="images/eye1.svg" alt="" /></button>
                                </div>
                              </div>
                              <button className="wallet__dashboard__display-2">Fund Wallet</button>
                            </div>
                            <div className="wallet__dashboard__details">

                              {
                                walletDetails?.map((wallet, i) => (
                                  
                                <button key={i + wallet.label} className="wallet__dashboard__details--box">
                                  <img src={`images/${wallet.logo}.png`} alt="" />
                                  <span> {wallet.label} </span>  
                                </button>
                                ))
                              }

                            </div>
                          </div>
                          <div className="wallet__empty"></div>
                        </div>
                      </div>
                      <div className="welcome__board__frame2"></div>
                    </div>
                    <div className="welcome__extension"></div>
                  </div>
                </div>
              </div>
              <div className="welcome__radial"></div>
            </div>
          </div>
        </section>

        <section className="indi-and-biz">
          <div className="indi-and-biz__frame">
            <div className="indi-and-biz__frame-text">
              <h1 className='main__header'>For Individuals and Businesses</h1>
              <p >Join 200+ businesses using Eazipay's easy solution.</p>
            </div>
            <div className="indi-and-biz__frame-slide">
              <button className="indi-and-biz__frame-slide-1 slider">
                <h2>Tamper-proof Payroll for LIfe</h2>
                <p>Your staff payroll history is kept in one place forever.</p>
                <p>No more excel sheet or manual records.</p>
                <p>Download your payroll history anytime you need it.</p>
              </button>

              <button className='indi-and-biz__frame-slide-2 slider' style={{left: slide2 && "308px"}}>
                <h2>All Payroll, Anytime Anywhere</h2>
                <p>Wherever you are Eazipay has got you covered on ALL your Payroll tasks.</p>
                <p>Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay handle all your compliamces in one place and easily, in seconds!</p>
              </button>

              <button className="indi-and-biz__frame-slide-3 slider"
                onMouseOver={activateSlide2} onMouseLeave={deactivateSlide2}
              >
                <h2>Payroll in Seconds</h2>
                <p>Never again wil you spend more than 2 minutes on payroll.</p>
                <p>Just click on your staff annd bulk-pay them at once.</p>
                <p>Payment is done permanently.</p>
              </button>
            </div>
            <p className="indi-and-biz__frame-reachout">
              We are happy to answer your queries. Please, reach us at <br/> <span>hello@myeazipay.com</span> and expect our response shortly after.
            </p>
          </div>
        </section>
        <section className="how-it-works">
          <div className="how-it-works__header">
            <h1 className="main__header">How Eazipay Works</h1>
            <p>Get started in 3 simple steps.</p>
          </div>
          <div className="how-it-works__analogy">
            <div className="how-it-works__analogy--circles">
              <img src="images/phone.gif" alt="" />
              <div className="how-it-works__analogy--circles-1 circles"></div>
              <div className="how-it-works__analogy--circles-2 circles"></div>
              <div className="how-it-works__analogy--circles-3 circles"></div>
            </div>
            <div className="how-it-works__analogy--direction">
              <div className="direction__sub-container">
                <div className="direction__sub-container-frame-1 text__container">
                  <div className="direction-1 direction__square-box"> <div className={flowStart? "new-direction-1" : ""}>1</div> </div>
                  <Link to={'#'} className="direction__text">
                    <h2 className="sub__header-2">Create your free account</h2>
                    <p className='paragraph-2'>Click here to set up your Eazipay account.</p>
                  </Link>
                </div>
                <div className="direction__sub-container-frame-2 text__container">
                  <div className="direction-2 direction__square-box"> <div className={flowStart? "new-direction-2" : ""}>2</div> </div>
                  <Link to={'#'} className="direction__text">
                    <h2 className="sub__header-2">Add Employee Data</h2>
                    <p className='paragraph-2'>Your employee information is 100% safe and secure.</p>
                  </Link>
                </div>
                <div className="direction__sub-container-frame-3 text__container">
                  <div className="direction-3 direction__square-box"><div className={flowStart? "new-direction-3" : ""}>3</div></div>
                  <Link to={'#'} className="direction__text">
                    <h2 className="sub__header-2">Prepare your Transaction</h2>
                    <p className='paragraph-2'>Run payroll: Bulk Salaries and Compliance are done at once!</p>
                  </Link>
                </div>
              </div>
              <div className="direction__rectangle-1 direction__rectangle">
                <div className={ flowStart? "new-direction__rectangle-1" : ""}></div>
                <div className="direction__rectangle-1__inner-container direction__container">
                  <div className="direction__rectangle-1__inner-container__circle tip-circle"> <div className={flowStart? "new-tip-circle" : ""}></div> </div>
                  <div className={flowStart? "rectangle-1__last-square" : ""}></div>
                </div>
              </div>
              <div className="direction__rectangle-2 direction__rectangle">
                <div className={flowStart? "direction__rectangle-2__container" : ""}>
                  <div className="direction__rectangle-2__inner-container__circle tip-circle"> <div className={flowStart? "new-tip-circle-2" : ""}></div> </div>
                  <div className="direction__rectangle-2__inner-container direction__container"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="salary__payment">
          <img src="images/pink-dots.png" alt="" />
          <div className="salary__payment__details">
            <div className="salary__payment__details-1">
              <h1 className='main__header'>Free forever <br/> for your <span>salary</span> <br/> <span>payment</span> </h1>
              <DownloadEazypayApp text="Subscribe to the Eazilife today" />
            </div>
            <div className="salary__payment__details-2">
              <div className="salary__payment__details-2__person">
                <div className="person__details">
                  <img src="images/user.png" alt="" />
                  <h2 className="sub__header">Adebayo Kemi</h2>
                  <p>Arts & Production Officer</p>
                  <p>Female | Weekly</p>
                </div>
                <div className="person__salary">
                  <h3 className="sub__header"> N150,600.78 </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="eazipay-demo">
          <img src="images/green-dots.png" alt="" className="eazipay-demo__green-dots" />
          <div className='eazipay-demo__details'>
            <div className="eazipay-demo__details__frame-1">
              <h1 className="main__header">Get an Exclusive <br/> Demo of Eazipay</h1>
              <p>Our greatest priority is to put you and your business first. Let’s show you how we can help.</p>
            </div>
            <div className="eazipay-demo__details__frame-2">
              <div className="eazidemo-demo__details__frame-2__header">
                <h1 className="sub__header-l">First things first</h1>
                <p>We want to serve you better. Tell us a bit about yourself or company</p>
              </div>
              <div className="eazipay-demo__details__frame-2__tab">
                <button className="contact__btn individual">Individual</button>
                <button className="contact__btn company">Company</button>
              </div>
              <form action="" className="eazipay-demo__details__contact">
                <div className="eazipay-demo__details__contact--inputs form__control">
                  {
                    formInputs?.map((formInput) => (
                      <input key={formInput.placeholder}
                        className="contact__input form__input"
                        type={formInput.type}
                        placeholder={formInput.placeholder}
                        name={formInput.name}
                      />
                    ))
                  }
                </div>
                <button className="form__submit">Request Demo</button>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default Homepage