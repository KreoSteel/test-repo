import './Modal.css'
import { useState } from 'react'

export default function Modal({ opened, toggleModal }) {
    return (
        <>
            <div className={`modal-wrapper ${opened ? "active" : "modal-closed"}`}>
                <div className="modal-header">
                    <h3>Modal header</h3>
                    <button id="modal-close" onClick={toggleModal}>&#10006;</button>
                </div>
                <div className="modal-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sapiente corporis quam iste sit totam nesciunt minus nemo tempore molestiae officia quasi, placeat saepe? Laborum!
                </div>
            </div>
            <div id="overlay" className={`${opened ? "active" : "inactive"}` } onClick={toggleModal}></div>
        </>
    )
}