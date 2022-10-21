import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Home from '../home/Home'

import Navbar from '../components/NavBar/navbar'
import NotFound from '../../assets/img/not.png'
import Ingredientes from '../../assets/img/ingredientes.png'
import Media from '../../assets/img/media.png'
import Reloj from '../../assets/img/reloj.png'

import Guardar from '../../assets/img/heart.png'
import Compartir from '../../assets/img/compartir.png'
import Imprimir from '../../assets/img/imprimir.png'

import './receta.css'
import axios from 'axios'

export default function Receta() {
    let { recetaId } = useParams();
    const [receta, setReceta] = useState([]);

    useEffect(() => {
        axios.get(`https://kecomer.pythonanywhere.com/recipes/recipes/${recetaId}/`)
            .then(data => {
                if (data.status === 200) {
                    setReceta(receta => [...receta, data.data])
                }
            })
            .catch(err => console.error(err))
    }, [recetaId])



    function cambiarSeccion(val) {
        let barra = document.querySelector(".barra")
        let ingredientes = document.querySelector(".contenedor-ingredientes")
        let instrucciones = document.querySelector(".contenedor-instrucciones")
        if (val === "ingredientes") {
            barra.style.left = "0%"
            ingredientes.style.display = "flex"
            instrucciones.style.display = "none"
        } else {
            barra.style.left = "50%"
            ingredientes.style.display = "none"
            instrucciones.style.display = "flex"
        }
    }
    function copiarAlPortapapeles() {

        // Crea un campo de texto "oculto"
        var aux = document.createElement("input");
        aux.setAttribute("value", window.location.href);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        let copiado = document.querySelector(".copiado")
        copiado.style.zIndex = "1";
        copiado.style.transition = "0.5s all";
        setTimeout(() => {
            copiado.style.zIndex = "-1";
        }, 3000);

    }
    function like() {
        let like = document.querySelector(".like")
        if (like.classList.contains("liked")) {
            like.classList.remove("liked")
        } else {
            like.classList.add("liked")
        }

    }
    function ImgError(e) {
        if (e.target.height <= 24) {
            e.target.src = NotFound
        }
    }
    return (
        <React.Fragment>
            <div className='Receta'>
                <Navbar />
                <main>
                    <div className='copiado'>
                        ¡Link copiado!
                    </div>
                    <div className='contenido-receta'>
                        {receta.map((rec, ind) =>
                            <div className='detalle-receta' key={ind}>
                                <div className='rutas'>
                                    <p><Link to='/'>Home</Link>/<Link to={Home}>Resultados de búsqueda</Link> / <Link className='active' to={`/receta/${recetaId}`}>{rec.title}</Link></p>
                                </div>
                                <h1>{rec.title}</h1>
                                <img className='image-receta' src={rec.image === null ? NotFound : rec.image} onError={ImgError} alt='Imagen de la receta' />
                                <div className='detalles'>
                                    <div className='tiempo'>
                                        <img src={Reloj} alt='Reloj' />
                                        <p>{rec.duration} min</p>
                                    </div>
                                    <div className='cantIngredientes'>
                                        <img src={Ingredientes} alt='Ingredientes' />
                                        <p>{rec.ingredients.length} ingredientes</p>
                                    </div>
                                    <div className='dificultadReceta'>
                                        <img src={Media} alt='Dificultad' />
                                        <p>{rec.difficulty}</p>
                                    </div>
                                </div>
                                <h2>Descripcion</h2>
                                <p className='descripcion'>{rec.description}</p>
                                <div className='ingredientes-instrucciones'>
                                    <h3 onClick={() => cambiarSeccion('ingredientes')} className='titulo'>Ingredientes</h3>
                                    <h3 onClick={() => cambiarSeccion('instrucciones')} className='titulo disabled'>Instrucciones</h3>
                                    <div className='barra'></div>
                                </div>
                                <div className='contenedor-ingredientes'>
                                    {rec.ingredients.map((ingredient, iter) =>
                                        <div className='ingrediente' key={iter}>
                                            <p className='nombre-ingrediente'>{ingredient}</p>
                                            <p className='cantidad-ingrediente'>{rec.quantity[iter]}</p>
                                        </div>
                                    )}
                                </div>
                                <div className='contenedor-instrucciones'>
                                    {rec.instruction.map((instruc, i) =>
                                        <div className='instruccion' key={i}>
                                            <h4>Paso {i + 1}</h4>
                                            <p>{instruc}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        <div className='extras'>
                            <button onClick={like}>
                                <img className='like' src={Guardar} alt='Guardar' />
                                Guardar
                            </button>
                            <button>
                                <img src={Imprimir} alt='Imprimir' />
                                Imprimir
                            </button>
                            <button onClick={copiarAlPortapapeles}>
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