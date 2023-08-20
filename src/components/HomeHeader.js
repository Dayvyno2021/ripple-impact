import * as React from 'react';
import { routes } from '../data';
import Header from './header';
import Modal from './modal';
import { useNavigate } from 'react-router-dom';

const HomeHeader = () => {
  
  //Handle the opening and clsoing of the modal overlay
  const [openModal, setOpenModal] = React.useState(false);

  //Handles the sliding in of the modal 
  const [animateModal, setAnimateModal] = React.useState(null);
  
/**
 * @returns void: The function activates the modal overlay via sliding in through the top
 */
  const handleModalOpen = () => {
    setOpenModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 1)
  }

  /**
   * @returns void: The function deactivates the modal via sliding out through the top
   */
  const handleModalClose = () => {
    setAnimateModal(false);
    
    setTimeout(() => {
      setOpenModal(false);
    }, 20)
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
        <button onClick={handleModalOpen} onAnimationEnd={()=>setAnimateModal(null)} className={openModal? "btn--open" : "btn--close"} >&nbsp;</button>
      </div>
      {
        openModal && (
        <Modal>
          <div className="modal" >
            <div className={animateModal==true? "mobile__header" : "initial__header"}>
              <Header routes={routes} />
              {openModal && <button onAnimationEnd={()=>setAnimateModal(null)} onClick={handleModalClose} className="close__mobile"> <img src="images/close.svg" alt="" /> </button> }
            </div>
          </div>
        </Modal>
        )
      }
    </header>
  )
}

export default HomeHeader