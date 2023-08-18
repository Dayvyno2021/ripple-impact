import React from 'react';
import { footerLinks, socialMedias } from '../data';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__company">
          <Link to={'/'}>
            <img src="images/logo.png" alt="" />
          </Link>
          <div className="footer__company__copyright">
            <p>Copyright © 2023 Eazipay.</p>
            <p>All rights reserved</p>
          </div>
          <div className="footer__company__social-medias">
            {
              socialMedias?.map(social => (
                <button className="social__mdeia-image" key={social.label}>
                  <img src={`images/${social.label}.png`} alt="" />
                </button>
              ))
            }
          </div>
        </div>
        <div className="footer__links">
          {
            footerLinks?.map((link, i) => (
              <div className="footer__links__frame" key={link.header}>
                <h1 className="footer__links__frame--header sub__header-1"> {link.header} </h1>
                <div className="footer__links__frame--links">
                  {
                    link.links.map((sublink, j) => (
                      <button className="footer__sub-link" key={sublink} >{sublink}</button>
                    ))
                  }
                </div>
              </div>
            ))
          }
          <div className="footer__links__frame">
          <h1 className="footer__links__frame sub__header-1"> Contact Us </h1>
            <div className="footer__links__frame--links contact__us">
              <button className="footer__sub-link" > eazipay@gmail.com </button>
              <button className="footer__sub-link" >+234 816 878 9518 </button>
              <div className="footer__send-email">
                <input type="email" className="email__input form__input" />
                <button className="email__send"><img src="/images/send.png" alt="" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer