import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <React.Fragment>
            <div>
                <header>
                    <nav>

                        <div className="block15__item">
                            <Link to="/"><img src="../assets/img/KeComer.png" alt="" className="icon1 layout" /><h3 className="highlights3 layout">KE COMER</h3></Link>

                        </div>

                        <div className="url">
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
                        </div>
                        <div className="btn">
                            <Link to="/login"><button className="btn1">Ingresar</button></Link>
                            <Link to="/creacuenta"><button className="btn2">Crea tu Cuenta</button></Link>
                            <Link to="/apiconsume"><button className="btn3">Api</button></Link>
                        </div>
                    </nav>
                </header>
                <main>
                    <p>¡Hola! Ingresa los ingredientes y te <br /> decimos qué podes preparar <br /> <span>Podes ingresar hasta 5
                        ingredientes</span>
                    </p>
                    <div className="category">
                        <div className="divCategory">
                            <img src="../assets/img/carnes.png" alt='Carnes' />
                            <span>Carnes</span>
                        </div>
                        <div className="divCategory">
                            <img src="../assets/img/verduras.png" alt='Verduras' />
                            <span>Vegetales</span>
                        </div>
                        <div className="divCategory">
                            <img src="../assets/img/frutas.png" alt='Frutas' />
                            <span>Frutas</span>
                        </div>
                        <div className="divCategory">
                            <img src="../assets/img/lacteos.png" alt='Lacteos' />
                            <span>Lateos</span>
                        </div>
                        <div className="divCategory">
                            <img src="../assets/img/especias.png" alt='Especias' />
                            <span>Condimentos</span>
                        </div>
                        <div className="divCategory">
                            <img src="../assets/img/bebidas.png" alt='Bebidas' />
                            <span>Bebidas</span>
                        </div>
                        <div className="divCategory">
                            <img src="../assets/img/harinas-y-granos.png" alt='Harinass' />
                            <span>Harinas y granos</span>
                        </div>
                        <div className="divCategory">
                            <img src="../assets/img/grasas.png" alt='Grasas' />
                            <span>Grasas y aceites</span>
                        </div>
                    </div>
                    <div className="barraBusqueda">
                        <div className="input">
                            <img src="../assets/img/lupa.svg" alt='Lupa' />
                            <input type="text" placeholder="Ingresar ingredientes" />
                        </div>
                        <button className="btn3"><img src="../assets/img/mas0112483-jv7a.svg" alt='.' />
                            Agregar</button>
                        <button className="btn4">Buscar receta</button>
                    </div>
                </main>
            </div>
        </React.Fragment>
    )
}
