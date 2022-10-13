import React from 'react'
// import { Link } from 'react-router-dom'
import Exit from '../../../assets/img/closeblack.png'
import './modal.css'

export default function Modal({ abrirModal }) {
    // function modal() {
    //     if (document.querySelector(".modalDetail").classList.contains("show")) {
    //         document.querySelector(".modalDetail").classList.remove("show")
    //     } else {
    //         document.querySelector(".modalDetail").classList.add("show")
    //     }
    // }
    return (
        <div className='modalDetail'>
            <div className='contentModal'>
                <div className='headModal'>
                    <button onClick={abrirModal}><img src={Exit} alt='asdasd' /></button>
                    <h4>Seleccionar</h4>
                </div>
                <div className='bodyModal'>
                    <h4>Carnes</h4>
                    <ul>
                        <li><input type="checkbox" name="tiposCarnes" id='vaca' /> <label htmlFor='vaca'>Vaca</label></li>
                        <li><input type="checkbox" name="tiposCarnes" id='Cerdo' /> <label htmlFor='Cerdo'>Cerdo</label></li>
                        <li><input type="checkbox" name="tiposCarnes" id='Pollo' /> <label htmlFor='Pollo'>Pollo</label></li>
                        <li><input type="checkbox" name="tiposCarnes" id='Pescado' /> <label htmlFor='Pescado'>Pescado</label></li>
                        <li><input type="checkbox" name="tiposCarnes" id='Carnes' /> <label htmlFor='Carnes'>Carnes exóticas</label></li>
                        <li><input type="checkbox" name="tiposCarnes" id='Frutos' /> <label htmlFor='Frutos'>Frutos de mar</label></li>
                    </ul>
                </div>
                <div className='footerModal'>
                    <button className='btn1'>Confirmar selección</button>
                    <button className='btn4'>Confirmar selección</button>
                </div>
            </div>
        </div>
    )
}