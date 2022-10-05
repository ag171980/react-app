import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../../assets/css/login.css'
// import Cookies from 'universal-cookie'
// import Home from '../home/Home';

// const baseUrl="http://localhost:3001/usuarios";
// const cookies = new Cookies();

function LoginP() {
  // const comprobarSesion = () => {
  //   var sesion = localStorage.getItem("miLogin");
  //   if (sesion) {
  //     return JSON.parse(sesion);
  //   } else {
  //     return false;
  //   }
  // }



  // const [miLogin, setMiLogin] = useState(comprobarSesion());
  // const [usu, setUsu] = useState("");
  // const [pas, setPas] = useState("");


  // function iniciarSesion(e) {
  //   e.preventDefault();
  //   var txtusu = document.getElementById("txtusu").value;
  //   var txtpass = document.getElementById("txtpass").value;
  //   if (txtusu.length === 0 || txtpass.length === 0) {
  //     alert("Complete Los Datos Faltantes!!");
  //   } else {
  //     if (usu === "ema@ema.com" && pas === "123") {
  //       setMiLogin(true);
  //       localStorage.setItem("miLogin", true);
  //       localStorage.setItem("usu", usu);
  //       document.getElementById("form_login").style.display = "none";
  //     } else {
  //       setMiLogin(false);
  //       alert("Error De Usuario y/o Contraseña!!");

  //       document.getElementById("txtusu").value = "";
  //       document.getElementById("txtpass").value = "";
  //       document.getElementById("txtusu").focus();
  //     }
  //   }
  // }
  function showPwd() {
    if (document.querySelector('#pwd_user').type === "password") {
      document.querySelector('#pwd_user').type = 'text'
    } else {
      document.querySelector('#pwd_user').type = 'password'
    }
  }

  
  function iniciarSesion(e) {
    e.preventDefault();
    const url = "https://localhost:3301/iniciarSesion"
    let userData = {
      email: document.querySelector("#email_user").value,
      pwd: document.querySelector("#pwd_user").value
    }

    if (userData.email !== "" && userData.pwd !== "") {
      axios.post(url, { userData })
        .then((res) => {
          console.log(res)
          //aca deberia de haber una respuesta de la api que nos diga si los datos eran correctos o erroneos

          //mostrar notificacion donde diga que el usuario ingreso correctamente
          localStorage.setItem("myUser", userData);

          // o

          // mostrar notificacion donde diga que el usuario ingreso mal su email o pwd ya que no coinciden con el registro de la bbdd
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      // if (userData.email  == "") {
      //   //mostrar notificacion de que no se ingreso email
      // } else {
      //   //mostrar notificacion de que no se ingreso pwd
      // }
    }
  }




  return (
    <React.Fragment>
      <div className="flex layout">
        <div className='notification'>
        </div>
        <div className="block14 layout">
          <div className="block15 layout">
            <div className="block15__item">
              <Link to="/"><img src="../assets/img/KeComer.png" alt="" className="icon1 layout" /></Link>
            </div>
            <div className="spacer block15__spacer"></div>
            <h5 className="highlights3 layout">KE COMER</h5>
          </div>
        </div>
        <div className="block1 layout">
          <div className="block2 layout">
            <div className="block3 layout">
              <div>
                <h1 className="hero_title layout">Iniciar sesión</h1>
                <div>
                  <h3 className="highlights layout">¿No tenés cuenta?  <Link to="/creacuenta" className="crea_cuenta">  Crear cuenta</Link></h3>
                  <div>
                  </div>
                  <form id='form_login'>
                    <div className="mb-3">
                      <label className="form-label">Correo electrónico</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email_user"
                        id="email_user"
                        aria-describedby="emailHelp"
                        required />
                    </div>
                    <div className="cont-pwd mb-3">
                      <label className="form-label">Contraseña</label>
                      <input
                        type="password"
                        className="form-control"
                        name="pwd_user"
                        id="pwd_user"
                        required />
                      <svg onClick={showPwd} className='eye_hide bi bi-eye-slash-fill' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                      </svg>
                    </div>


                    <div >
                      <p className="olvide">Olvidé mi contraseña</p>
                    </div>

                    <div className="block10 layout">
                      <button type="submit" className="btn btn-outline-danger espacio" onClick={iniciarSesion}>Iniciar sesión</button>

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

export default LoginP;