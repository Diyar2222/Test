import React, { useState,useRef } from 'react';


function Modal() {
  const [showModal, setShowModal] = useState(true);
  const modalRef = useRef(null)

  //Функция для закрытия модального окна
  const handleCloseModal = () => {
    setShowModal(false);
  };

  //При клике за границами модального окна, она также закрывается
  const handleOutsideClick = (event:React.MouseEvent) => {
    if(event.target===modalRef.current){
        setShowModal(false)
    }
  };
  return (
    <div ref={modalRef} className={`modal ${showModal ? 'show' : 'hide'}`} onClick={handleOutsideClick}>
      <div className="modal__content">
        <h3 className='orange'>METAMASK EXTENSION</h3>
        <div className='modal__body'>To work with our application, you have to install the   
            <span className='modal__body orange'> Metamask browser extension</span>
        </div>
        <button className='button' onClick={handleCloseModal}>Skip this step</button>
      </div>
    </div>
  );
}

export default Modal;
