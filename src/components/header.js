import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <>
      <div className="header__nav__other--routes">
        <Link className='header__logo' to={'/'} >
          <img src={'images/logo.png'} alt="" />
        </Link>
        <div className="header__nav__other--routes-items">
          {
            props?.routes?.map((route, i) => (
              <Link to={route.url} key={`${route.label}${i}`}>{route.label}</Link>
            ))
          }
        </div>
      </div>
      <div className="header__nav__user--routes">
        <button className='btn login'>Log in</button>
        <button className='btn register' >Register</button>
      </div>
    </>
  )
}

export default Header