import React from 'react'
import './Modal.css'

const Modal = ({url, active, setActive}) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className={active ? 'modal__content active' : ' modal__content'} onClick={ e => e.stopPropagation()}>
        <img src={url}/>
      </div>
    </div>
  )
}

export default Modal