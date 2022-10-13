import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

export default function Navbar1() {
    return (
        <div>
            <header>
                <nav>

                    <div className="block15__item">
                        <Link className='logo' to="/">
                            <img src="../assets/img/KeComer.png" alt="" className="icon1 layout" />
                            <h3 className="highlights3 layout">KE COMER</h3>
                        </Link>

                    </div>

                    {/* <div className="url">
                        <ul>
                            <li>
                                <label for="carnes">Carnes <img src="../assets/img/flecha-abajo.svg" alt='flecha abajo' /></label>
                            </li>
                            <li>
                                <label for="vegetales">Vegetales <img src="../assets/img/flecha-abajo.svg" alt='flecha abajo' /></label>
                            </li>
                            <li>
                                <label for="condimientos">Codimentos <img src="../assets/img/flecha-abajo.svg" alt='flecha abajo' /></label>
                            </li>
                            <li>
                                <label for="categoria">Mas Categorias <img src="../assets/img/flecha-abajo.svg" alt='flecha abajo' /></label>
                            </li>
                        </ul>
                    </div> */}
                    <div className="btns">
                        <Link className='btn-link' to="/login"><button className="btn1">Ingresar</button></Link>
                        <Link className='btn-link' to="/creacuenta"><button className="btn2">Crea tu Cuenta</button></Link>
                        {/* <Link to="/apiconsume"><button className="btn3">Api</button></Link> */}
                    </div>
                </nav>
            </header>
        </div>
    )
}
