import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

//componentes
import Card from '../components/Card/card'
import Navbar from '../components/NavBar/navbar'
import Cerrar from '../../assets/img/close.png'
// import N`av from '../components/NavBar/Nav';
import "./home.css"
// import { Context } from '../contexto/Context';
// import { useContext } from 'react';

export default function Home() {
    const [ingredientes, setIngrediente] = useState([]);
    const [recetas, setRecetas] = useState([])
    const [stateRecetas, setStateRecetas] = useState(false);



    // function llenarIngredientes(e) {
    //     e.preventDefault();
    //     let ingrediente = document.querySelector("#ingrediente").value
    //     setIngrediente([...ingredientes, ingrediente])
    // }
    const llenarIngredientes = (tipo = null) => {
        if (tipo == null) {
            let ingrediente = document.querySelector("#ingrediente").value
            setIngrediente([...ingredientes, ingrediente])
        } else {
            setIngrediente([...ingredientes, tipo])
        }
    }
    const eliminarIngrediente = (val) => {
        const asd = ingredientes.indexOf(val)
        if (asd > -1) {
            ingredientes.splice(asd, 1)
        }
        setIngrediente([...ingredientes])
    }
    const makeRequest = async (arrTypes) => {
        try {
            const response = await axios.get('https://kecomer.pythonanywhere.com/recipes/recipes/');
            if (response.status === 200) { // response - object, eg { status: 200, message: 'OK' }
                console.log(response.data)
                document.querySelector(".presentacion").classList.add("hide")

                document.querySelector(".category").classList.add("hide")
                setStateRecetas(true)
                let contArr = 0;

                setTimeout(() => {
                    Object.entries(response.data).forEach((el) => {
                        if (el[0] === arrTypes[contArr]) {
                            el[1].map((rec) =>
                                setRecetas(recetas => [...recetas, rec])
                            )
                        }
                    });
                    console.log(stateRecetas)
                }, 800);
                return true;
            }
            return false;
        } catch (err) {
            console.error(err)
            return false;
        }
    }

    const mostrarRecetas = async () => {
        await makeRequest(ingredientes)


    }
    useEffect(() => {


    }, [stateRecetas])

    return (
        <React.Fragment>
            <div className='Home'>
                <Navbar />
                <main>
                    <p className='presentacion'>¡Hola! Ingresa los ingredientes y te <br /> decimos qué podes preparar <br /> <span>Podes ingresar hasta 5
                        ingredientes</span>
                    </p>
                    <div className="category">
                        <div className="divCategory" onClick={() => llenarIngredientes("CARNE")}>
                            <img src="../assets/img/carnes.png" alt='Carnes' />
                            <span>Carnes</span>
                            {/* <span onClick={modal}>Carnes</span> */}
                            {/* <Modal abrirModal={modal} /> */}
                        </div>
                        <div className="divCategory" onClick={() => llenarIngredientes("V")}>
                            <img src="../assets/img/frutas.png" alt='Verduras' />
                            <span>Vegetales</span>
                        </div>
                        <div className="divCategory" onClick={() => llenarIngredientes("P")}>
                            <img src="../assets/img/frutas.png" alt='Frutas' />
                            <span>Frutas</span>
                        </div>
                        <div className="divCategory" onClick={() => llenarIngredientes("C")}>
                            <img src="../assets/img/lacteos.png" alt='Lacteos' />
                            <span>Lateos</span>
                        </div>
                        <div className="divCategory" onClick={() => llenarIngredientes("CO")}>
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
                        <button onClick={() => llenarIngredientes()} className="btn3">
                            <img src="../assets/img/mas0112483-jv7a.svg" alt='.' />
                            Agregar</button>
                        <button onClick={mostrarRecetas} className="btn4">Buscar recetas</button>
                    </div>
                    <div className='ingredientes'>
                        {ingredientes.map((ingred, index) =>
                            <div className='ingredienteItem' key={index}>
                                {ingred === "CARNE" &&
                                    <p>Carnes</p>
                                }
                                {ingred === "V" &&
                                    <p>Vegetales</p>
                                }
                                {ingred === "P" &&
                                    <p>Frutas</p>
                                }
                                {ingred === "PA" &&
                                    <p>Lacteos</p>
                                }
                                {ingred === "PA" &&
                                    <p>Lacteos</p>
                                }
                                {ingred === "CO" &&
                                    <p>Condimentos</p>
                                }
                                {ingred !== "CARNE" && ingred !== "V" && ingred !== "P" && ingred !== "PA" && ingred !== "CO" &&
                                    <p>{ingred}</p>
                                }
                                <button className='eliminarIngrediente' onClick={() => eliminarIngrediente(ingred)}><img src={Cerrar} alt='icon eliminar ingrediente' /></button>
                            </div>
                        )}
                    </div>

                    <div className='contenedorRecetas'>
                        {recetas.length !== 0 &&
                            recetas.map((receta, index) => {
                                return (<Card recetaInfo={receta} key={index} />);
                            })
                        }
                        {recetas.length === 0 &&
                            <h1>{stateRecetas}</h1>
                        }


                    </div>
                </main>
            </div >
        </React.Fragment >
    )
}
