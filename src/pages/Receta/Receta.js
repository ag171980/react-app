import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../home/Home'

import Navbar from '../components/NavBar/navbar'
import Pollo from '../../assets/img/pollito.png'
import Ingredientes from '../../assets/img/ingredientes.png'
import Media from '../../assets/img/media.png'
import Reloj from '../../assets/img/reloj.png'

import Guardar from '../../assets/img/heart.png'
import Compartir from '../../assets/img/compartir.png'
import Imprimir from '../../assets/img/imprimir.png'

import './receta.css'

export default function Receta() {
    function cambiarSeccion(val) {

    }
    return (
        <React.Fragment>
            <div className='Receta'>
                <Navbar />
                <main>
                    <div className='rutas'>
                        <Link to={Home}>Home</Link>/<Link to={Home}>Resultados de búsqueda</Link>/<Link className='active' to={Home}>Pollo al horno con papas noisette</Link>
                    </div>
                    <div className='contenido-receta'>
                        <div className='detalle-receta'>
                            <h1>Pollo al horno con papas noisette</h1>
                            <img src={Pollo} alt='Imagen de la receta' />
                            <div className='detalles'>
                                <div className='tiempo'>
                                    <img src={Reloj} alt='Reloj' />
                                    <p>5 min</p>
                                </div>
                                <div className='cantIngredientes'>
                                    <img src={Ingredientes} alt='Ingredientes' />
                                    <p>3 ingredientes</p>
                                </div>
                                <div className='dificultadReceta'>
                                    <img src={Media} alt='Dificultad' />
                                    <p>Facil</p>
                                </div>
                            </div>
                            <h2>Descripcion</h2>
                            <p className='descripcion'>Pollito al horno con papas riki riki.  Laborum magna nulla duis ullamco cillum dolor. Laborum magna nulla duis ullamco cillum dolor.</p>
                            <div className='ingredientes-instrucciones'>
                                <h3 onClick={cambiarSeccion('ing')} className='titulo disabled'>Ingredientes</h3>
                                <h3 onClick={cambiarSeccion('ins')} className='titulo'>Instrucciones</h3>
                            </div>
                            {/* <div className='contenedor-ingredientes'>
                                <div className='ingrediente'>
                                    <p className='nombre-ingrediente'>Ingredientes</p>
                                    <p className='cantidad-ingrediente'>Cantidad y unidad</p>
                                </div>
                                <div className='ingrediente'>
                                    <p className='nombre-ingrediente'>Ingredientes</p>
                                    <p className='cantidad-ingrediente'>Cantidad y unidad</p>
                                </div>
                                <div className='ingrediente'>
                                    <p className='nombre-ingrediente'>Ingredientes</p>
                                    <p className='cantidad-ingrediente'>Cantidad y unidad</p>
                                </div>
                                <div className='ingrediente'>
                                    <p className='nombre-ingrediente'>Ingredientes</p>
                                    <p className='cantidad-ingrediente'>Cantidad y unidad</p>
                                </div>
                                <div className='ingrediente'>
                                    <p className='nombre-ingrediente'>Ingredientes</p>
                                    <p className='cantidad-ingrediente'>Cantidad y unidad</p>
                                </div>
                                <div className='ingrediente'>
                                    <p className='nombre-ingrediente'>Ingredientes</p>
                                    <p className='cantidad-ingrediente'>Cantidad y unidad</p>
                                </div>
                                <div className='ingrediente'>
                                    <p className='nombre-ingrediente'>Ingredientes</p>
                                    <p className='cantidad-ingrediente'>Cantidad y unidad</p>
                                </div>
                                <div className='ingrediente'>
                                    <p className='nombre-ingrediente'>Ingredientes</p>
                                    <p className='cantidad-ingrediente'>Cantidad y unidad</p>
                                </div>
                            </div> */}
                            <div className='contenedor-instrucciones'>
                                <div className='instruccion'>
                                    <h4>Paso 1</h4>
                                    <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
                                </div>
                                <div className='instruccion'>
                                    <h4>Paso 2</h4>
                                    <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
                                </div>
                                <div className='instruccion'>
                                    <h4>Paso 3</h4>
                                    <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
                                </div>
                                <div className='instruccion'>
                                    <h4>Paso 4</h4>
                                    <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
                                </div>
                                <div className='instruccion'>
                                    <h4>Paso 5</h4>
                                    <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
                                </div>

                            </div>
                        </div>
                        <div className='extras'>
                            <button>
                                <img src={Guardar} alt='Guardar' />
                                Guardar
                            </button>
                            <button>
                                <img src={Imprimir} alt='Imprimir' />
                                Imprimir
                            </button>
                            <button>
                                <img src={Compartir} alt='Compartir' />
                                Compartir
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </React.Fragment>
    )
}