import * as React from 'react';
import { routes } from '../data';
import Header from './header';
import Modal from './modal';
import { useNavigate } from 'react-router-dom';

const HomeHeader = () => {
  
  const [openModal, setOpenModal] = React.useState(false);
  
  const handleModal = () => {
    setOpenModal(prev => !prev);
  }
  
  const navigate = useNavigate();
  const navigateHome = () => {
    setOpenModal(false);
    navigate('/');
  }

  return (
    <header className="header">
      <nav className="header__nav">
        <Header routes={routes} />
      </nav>
      <div className="header__mobile" >
        <button onClick={navigateHome}>
          <img src={'images/logo.png'} alt="" />
        </button>
        <button onClick={handleModal} className={openModal? "btn--open" : "btn--close"} >&nbsp;</button>
      </div>
      {
        openModal && (
        <Modal>
          <div className="modal">
            <div className="mobile__header">
              <Header routes={routes} />
              {openModal && <button onClick={handleModal} className="close__mobile"> <img src="images/close.svg" alt="" /> </button> }
            </div>
          </div>
        </Modal>
        )
      }
    </header>
  )
}

export default HomeHeader