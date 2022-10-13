import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import Navbar from '../components/NavBar/navbar'
import "./home.css"

export default function Home() {
    const ingredientesActuales = [];
    const [ingredientes, setIngrediente] = useState(ingredientesActuales);
    // const [recetas, setRecetas] = useState([])

    function llenarIngredientes(e) {
        e.preventDefault();
        let ingrediente = document.querySelector("#ingrediente").value
        setIngrediente([...ingredientes, ingrediente])
    }
    function eliminarIngrediente(val) {
        const asd = ingredientes.indexOf(val)
        if (asd > -1) {
            ingredientes.splice(asd, 1)
        }
        setIngrediente([...ingredientes])
    }
    function modal() {
        if (document.querySelector(".modalDetail").classList.contains("show")) {
            document.querySelector(".modalDetail").classList.remove("show")
        } else {
            document.querySelector(".modalDetail").classList.add("show")
        }
    }
    useEffect(() => {
        axios.get("https://kecomer.onrender.com/recipes/recipes/", {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            withCredentials: true,
            credentials: 'same-origin',
        })
            .then((data) => {
                console.log(data)
            })
    }, [ingredientes])
    return (
        <React.Fragment>
            <div className='Home'>
                <Navbar></Navbar>
                <main>
                    <p>¡Hola! Ingresa los ingredientes y te <br /> decimos qué podes preparar <br /> <span>Podes ingresar hasta 5
                        ingredientes</span>
                    </p>
                    <div className="category">
                        <div className="divCategory">
                            <img src="../assets/img/carnes.png" alt='Carnes' />
                            <span onClick={modal}>Carnes</span>
                            <div className='modalDetail'>
                                <div className='contentModal'>
                                    <div className='headModal'>
                                        <button onClick={modal}><img src='../assets/img/closeblack.png' alt='asdasd' /></button>
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
                        </div>
                        <div className="divCategory">
                            <img src="../assets/img/frutas.png" alt='Verduras' />
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
                            <img src="../assets/img/grasas.png" alt='Grasas' />
                            <span>Grasas y aceites</span>
                        </div>
                        <div className="divCategory">
                            <img src="../assets/img/harinas-y-granos.png" alt='Harinass' />
                            <span>Harinas y granos</span>
                        </div>
                    </div>
                    <div className="barraBusqueda">
                        <div className="input">
                            <img src="../assets/img/lupa.svg" alt='Lupa' />
                            <input type="text" id='ingrediente' placeholder="Ingresar ingrediente" />
                        </div>
                        <button onClick={llenarIngredientes} className="btn3">
                            <img src="../assets/img/mas0112483-jv7a.svg" alt='.' />
                            Agregar</button>
                        <button className="btn4">Buscar recetas</button>
                    </div>
                    <div className='ingredientes'>
                        {ingredientes.map((ingred, index) => {
                            return <div className='ingredienteItem' key={index}>
                                <p>{ingred}</p>
                                <button className='eliminarIngrediente' onClick={() => eliminarIngrediente(ingred)}>x</button>
                            </div>
                        })}
                    </div>
                </main>
            </div >
        </React.Fragment >
    )
}
