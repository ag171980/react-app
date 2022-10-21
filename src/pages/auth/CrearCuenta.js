// import axios from 'axios'
import React from 'react'
import Navbar from '../components/NavBar/navbar'
import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
//import { Context } from '../contexto/Context';
//import { useContext } from 'react';
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios';
import "../../assets/css/crear_cuenta.css"
const reviewSchema = yup.object({
    email: yup.string().email('Invalid Email').required('required'),
    // nombre: yup.string().required().min(4).max(10),
    username: yup.string().required().min(4).max(10),
    last_name: yup.string().required().min(4).max(10),
    // apellido: yup.string().required().min(4).max(10),
    // contraseña: yup.string().required().matches(/^[0-9A-Za-z]*[!@#$%^&*()_+\-=\]{};':"\\|,.<>?][0-9a-zA-Z]*$/,
    //     'Need one special character',).min(8).max(15),
    password: yup.string().required().matches(/^[0-9A-Za-z]*[!@#$%^&*()_+\-=\]{};':"\\|,.<>?][0-9a-zA-Z]*$/,
        'Need one special character',).min(8).max(15),
    password2: yup.string().required().matches(/^[0-9A-Za-z]*[!@#$%^&*()_+\-=\]{};':"\\|,.<>?][0-9a-zA-Z]*$/,
        'Need one special character',).min(8).max(15),
})
export default function CrearCuenta() {
    //const{agregarCuenta, account} = useContext(Context)
    // const[datos, setDatos]= useState([])
    const [status, setStatus] = useState()
    const [error, setError] = useState('')
    function showPwd() {
        if (document.querySelector('#pwd_user').type === "password") {
            document.querySelector('#pwd_user').type = 'text'
        } else {
            document.querySelector('#pwd_user').type = 'password'
        }
    }

    // const crearCuenta = (e) => {
    //     e.preventDefault();
    //     const baseUrl = "https://kcomer.herokuapp.com/api/user/"
    //     let userData = {
    //         //test
    //         id: 2,
    //         email: "asd@gmail.com",
    //         username: "a",
    //         genre: "M",
    //         country: "Arg",
    //         avatar: null,
    //         date_of_birth: null
    //         //original
    //         // email: document.querySelector("#email_user").value,
    //         // nombre: document.querySelector("#text_nombre").value,
    //         // apellido: document.querySelector("#text_apellido").value,
    //         // pwd: document.querySelector("#pwd_user").value,
    //     }
    //     const headers = {
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    //         'Content-Type': 'application/json',
    //     };
    //     // if (userData.email !== "" && userData.nombre !== "" && userData.apellido !== "" && userData.pwd !== "") {
    //     axios.post(baseUrl, userData, { headers })
    //         .then((res) => {
    //             console.log(res.status)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    //     // }

    // }

    return (
        <React.Fragment>
            <div className="flex layout">
                <Navbar></Navbar>
                <div className="block1 layout">
                    <div className="block2 layout">
                        <div className="block3 layout">
                            <div>
                                <h1 className="hero_title layout">Crear Cuenta</h1>
                                <div>
                                    <h3 className="highlights layout">¿Ya tenés cuenta?  <Link to="/login" className="crea_cuenta"> Iniciar sesión</Link></h3>
                                    <div>
                                    </div>
                                    <Formik
                                        initialValues={{ username: '', last_name: '', email: '', password: '', password2: '' }}
                                        validationSchema={reviewSchema}
                                        onSubmit={(values, actions) => {
                                            actions.resetForm();
                                            axios.post("https://kecomer.pythonanywhere.com/users/signup/", values).then(data => {
                                                setStatus(data.request.status)
                                                console.log(data.request.status)
                                            }).catch(function (err) {
                                                setStatus(err.request.status)
                                                console.log(err.request.status)
                                                setError(err.response.data.email[0]);

                                            })

                                        }}
                                    >
                                        {(props) => (
                                            <Form>
                                                {status === 201 ?
                                                    <div class="alert alert-success" role="alert">
                                                        Cuenta creada exitosamente
                                                    </div>
                                                    : status === 400 ?
                                                        <div class="alert alert-danger" role="alert" >
                                                            {error}
                                                        </div>
                                                        :
                                                        <div class="alert alert-danger" role="alert" style={{ display: 'none' }} >
                                                            {error}
                                                        </div>
                                                }
                                                <div className="mb-3">
                                                    <label for="exampleInputEmail1" className="form-label">Correo electrónico</label>
                                                    <Field id="email_user"
                                                        name="email"
                                                        placeholder="jane@acme.com"
                                                        type="email"
                                                        className="form-control"
                                                        onChangeText={props.handleChange('email')}
                                                        onBlur={props.handleBlur('email')}
                                                        value={props.values.email}
                                                    />
                                                    <span className='Errorcolor'>{props.touched.email && props.errors.email}</span>
                                                </div>
                                                <div className=" nombre_completo mb-3">
                                                    <div className='input-cont'>
                                                        <label for="text_nombre" className="form-label">Nombre</label>
                                                        <Field
                                                            id="text_nombre"
                                                            name="username"
                                                            type="text"
                                                            className="form-control"
                                                            onChangeText={props.handleChange('username')}
                                                            onBlur={props.handleBlur('username')}
                                                            value={props.values.username}
                                                        />
                                                        <span className='Errorcolor'>{props.touched.username && props.errors.username}</span>
                                                    </div>
                                                    <div className='input-cont'>
                                                        <label for="text_apellido" className="form-label">Apellido</label>
                                                        <Field
                                                            id="text_apellido"
                                                            name="last_name"
                                                            type="text"
                                                            onChangeText={props.handleChange('last_name')}
                                                            onBlur={props.handleBlur('last_name')}
                                                            value={props.values.last_name}
                                                            className="form-control"
                                                        />
                                                        <span className='Errorcolor'>{props.touched.last_name && props.errors.last_name}</span>
                                                    </div>
                                                </div>
                                                <div className="cont-pwd mb-3">
                                                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                                                    <Field
                                                        id="pwd_user"
                                                        name="password"
                                                        type="password"
                                                        className="form-control"
                                                        secure={true}
                                                        onChangeText={props.handleChange('password')}
                                                        onBlur={props.handleBlur('password')}
                                                        value={props.values.password}
                                                    />
                                                    <svg onClick={showPwd} className='eye_hide bi bi-eye-slash-fill' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                                    </svg>
                                                    <span className='Errorcolor'>{props.touched.password && props.errors.password}</span>
                                                </div>

                                                <div className="cont-pwd mb-3">
                                                    <label for="exampleInputPassword1" className="form-label">Repetir contraseña</label>
                                                    <Field
                                                        id="pwd_user"
                                                        name="password2"
                                                        type="password"
                                                        className="form-control"
                                                        secure={true}
                                                        onChangeText={props.handleChange('password2')}
                                                        onBlur={props.handleBlur('password2')}
                                                        value={props.values.password2}
                                                    />
                                                    <svg onClick={showPwd} className='eye_hide bi bi-eye-slash-fill' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                                    </svg>
                                                    <span className='Errorcolor'>{props.touched.password2 && props.errors.password2}</span>
                                                </div>
                                                <div className="block10 layout">
                                                    <button type="submit" className="btn btn-outline-danger espacio" onClick={props.handleSubmit}>Crear cuenta</button>
                                                    <button type="button" className="btn btn-outline-secondary espacio"><img src="../assets/img/44d99b5c0ac21f42e4480177f374344a.png" alt="" width="20" />Ingresar con Google</button>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
