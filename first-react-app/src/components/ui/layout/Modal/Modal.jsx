import './Modal.css'
import { useState } from 'react'

export default function Modal({ opened, toggleModal, children }) {
    return (
        <>
            <div className={`modal-wrapper ${opened ? "active" : "modal-closed"}`}>
                <button id="modal-close" onClick={toggleModal}>&#10006;</button>
                <div className="modal-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sapiente corporis quam iste sit totam nesciunt minus nemo tempore molestiae officia quasi, placeat saepe? Laborum!
                </div>
                {children}
            </div>
            <div id="overlay" className={`${opened ? "active" : "inactive"}`} onClick={toggleModal}></div>
        </>
    )
}
