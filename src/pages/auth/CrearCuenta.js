import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

export default function CrearCuenta() {
    function showPwd() {
        if (document.querySelector('#pwd_user').type === "password") {
            document.querySelector('#pwd_user').type = 'text'
        } else {
            document.querySelector('#pwd_user').type = 'password'
        }
    }

    const crearCuenta = (e) => {
        e.preventDefault();
        const baseUrl = "https://kcomer.herokuapp.com/api/user/"
        let userData = {
            id: 1,
            email: document.querySelector("#email_user").value,
            username: "a",
            genre: "M",
            country: "Arg",
            avatar: null,
            date_of_birth: null
            // nombre: document.querySelector("#text_nombre").value,
            // apellido: document.querySelector("#text_apellido").value,
            // pwd: document.querySelector("#pwd_user").value,
        }
        const config = {
            url: baseUrl,
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(userData),
        };
        // if (userData.email !== "" && userData.nombre !== "" && userData.apellido !== "" && userData.pwd !== "") {
        if (userData.email !== "") {
            axios.post(baseUrl, config)
                .then((res) => {
                    console.log(res.status)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

    }
    return (
        <React.Fragment>
            <div className="flex layout">
                <div className="block14 layout">
                    <div className="block15 layout">
                        <div className="block15__item">
                            <Link to="/" className="crea_cuenta"><img src="../assets/img/KeComer.png" alt="" className="icon1 layout" /></Link>
                        </div>
                        <div className="spacer block15__spacer"></div>
                        <h5 className="highlights3 layout">KE COMER</h5>
                    </div>
                </div>
                <div className="block1 layout">
                    <div className="block2 layout">
                        <div className="block3 layout">
                            <div>
                                <h1 className="hero_title layout">Crear Cuenta</h1>
                                <div>
                                    <h3 className="highlights layout">¿Ya tenés cuenta?  <Link to="/login" className="crea_cuenta"> Iniciar sesión</Link></h3>
                                    <div>
                                    </div>

                                    <form>
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Correo electrónico</label>
                                            <input type="email" className="form-control" id="email_user" aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" nombre_completo mb-3">
                                            <div className='input-cont'>
                                                <label for="text_nombre" className="form-label">Nombre</label>
                                                <input type="text" className="form-control" id="text_nombre" aria-describedby="emailHelp" />
                                            </div>

                                            <div className='input-cont'>
                                                <label for="text_apellido" className="form-label">Apellido</label>
                                                <input type="text" className="form-control" id="text_apellido" aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                        <div className="cont-pwd mb-3">
                                            <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                                            <input type="password" className="form-control" name="pwd_user" id="pwd_user" />
                                            <svg onClick={showPwd} className='eye_hide bi bi-eye-slash-fill' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                            </svg>
                                        </div>

                                        <div className="block10 layout">

                                            <button type="submit" className="btn btn-outline-danger espacio" onClick={crearCuenta}>Crear cuenta</button>

                                            <button type="button" className="btn btn-outline-secondary espacio"><img src="../assets/img/44d99b5c0ac21f42e4480177f374344a.png" alt="" width="20" />Ingresar con Google</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
