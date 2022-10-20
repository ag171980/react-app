import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

//componentes
import Card from '../components/Card/card'
import Navbar from '../components/NavBar/navbar'
//import Nav from '../components/NavBar/Nav';
import "./home.css"
// import { Context } from '../contexto/Context';
// import { useContext } from 'react';

export default function Home() {
    const recetasComida = [
        {
            id: 1,
            img: "pollito.png",
            tipo: "Carnes",
            nombre: "Pollo al horno con papas",
            descripcion: "Pollito al horno con papas riki riki.  Laborum magna nulla duis ullamco cillum dolor. Laborum magna nulla duis ullamco cillum dolor.",
            duracion: 30,
            cantidadIngredientes: 6,
            dificultad: "Fácil"
        },
        {
            id: 2,
            img: "milanesas.jpg",
            tipo: "Carnes",
            nombre: "Milanesas Napolitanas",
            descripcion: "Milanesita napolitanas que tienen salsa, jamon, queso y tomate bien tanas. Laborum magna nulla duis ullamco cillum dolor.",
            duracion: 30,
            cantidadIngredientes: 6,
            dificultad: "Dificil"
        },
        {
            id: 3,
            img: "Ensalada-cesar.jpg",
            tipo: "Vegetales",
            nombre: "Ensalada Cesar",
            descripcion: "Ensalada Cesar bien simple para que comas sanito. Laborum magna nulla duis ullamco cillum dolor.",
            duracion: 50,
            cantidadIngredientes: 4,
            dificultad: "Fácil"
        },
        {
            id: 4,
            img: "Ensalada-frutas.jpg",
            tipo: "Frutas",
            nombre: "Ensalada de Frutas",
            descripcion: "Ensalada de frutas ideal para comer despues de una ensaladita Cesar, facil de hacer. Laborum magna nulla duis ullamco cillum dolor.",
            duracion: 20,
            cantidadIngredientes: 3,
            dificultad: "Fácil"
        }
    ]
    const [ingredientes, setIngrediente] = useState([]);
    let resultadoFinal = []
    // const { log, account } = useContext(Context)
    const [recetas, setRecetas] = useState([])
    // function compare(props1, props2) {
    //     if (props1[0].email !== props2.email && props1[0].contraseña !== props2.contraseña) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    // function llenarIngredientes(e) {
    //     e.preventDefault();
    //     let ingrediente = document.querySelector("#ingrediente").value
    //     setIngrediente([...ingredientes, ingrediente])
    // }
    const llenarIngredientes = (tipo) => {
        setIngrediente([...ingredientes, tipo])
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
                // console.log('success stuff');
                // console.log(response.data)

                let contArr = 0;
                Object.entries(response.data).forEach((el) => {
                    // console.log(arrTypes[contArr])

                    if (el[0] === arrTypes[contArr]) {
                        el[1].map((rec) =>
                            setRecetas([...recetas, rec])
                        )
                        // setRecetas([...el[1]])
                        // el[1].map(rec => {
                        //     console.log(rec)
                        //     console.log("---")
                        //     setRecetas([...rec])
                        // })
                    }

                });
                return true;
            }
            return false;
        } catch (err) {
            console.error(err)
            return false;
        }
    }

    // console.log(makeRequest())
    // axios({
    //     method: 'GET',
    //     url: "https://kecomer.pythonanywhere.com:3030/admin/recipes/recipesmodel/",
    //     responseType: 'stream'

    // })
    //     .then((data) => {
    //         console.log(data)
    //     })
    const mostrarRecetas = async () => {
        await makeRequest(ingredientes)

        setTimeout(() => {
            

            // document.querySelector(".category").classList.add("hide")
            // document.querySelector(".presentacion").classList.add("hide")

            // resultadoFinal = recetasComida.filter((rec) => rec === ingredientes[0])
            // resultadoFinal.map((rec) =>
            //     setRecetas([...recetas, rec])
            // )
        }, 800);
    }
    useEffect(() => {


    }, [ingredientes])

    return (
        <React.Fragment>
            <div className='Home'>
                <Navbar />
                <main>
                    <p className='presentacion'>¡Hola! Ingresa los ingredientes y te <br /> decimos qué podes preparar <br /> <span>Podes ingresar hasta 5
                        ingredientes</span>
                    </p>
                    <div className="category">
                        <div className="divCategory" onClick={() => llenarIngredientes("C")}>
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
                        <button onClick={mostrarRecetas} className="btn4">Buscar recetas</button>
                    </div>
                    <div className='ingredientes'>
                        {ingredientes.map((ingred, index) => {
                            return <div className='ingredienteItem' key={index}>
                                <p>{ingred}</p>
                                <button className='eliminarIngrediente' onClick={() => eliminarIngrediente(ingred)}>x</button>
                            </div>
                        })}
                    </div>

                    <div className='contenedorRecetas'>
                        {
                            recetas.map((receta, index) => <Card recetaInfo={receta} key={index} />)
                            // resultadoFinal.map((receta) =>
                            //     <Card recetaInfo={receta} key={receta.id} />
                            // )
                        }
                        {/* <Card recetaInfo={}/> */}
                        {/* <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card /> */}

                    </div>
                </main>
            </div >
        </React.Fragment >
    )
}
