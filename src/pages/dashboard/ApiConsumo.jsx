import React from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
// const baseUrl = "http://localhost:3001/usuarios"
// const baseUrl = "https://jsonplaceholder.typicode.com/todos"

export default function ApiConsumo() {

  // const [list, setList] = useState();
  // const [usu, setUsu] = useState("");
  // const [pas, setPas] = useState("");

  // useEffect(() => {
  //   Axios({
  //     url: baseUrl
  //   })
  //     .then(response => {
  //       setList(response.data);
  //       console.log(response.data)
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, [setList]);

  function iniciarSesion(e) {
    e.preventDefault();
    const url = "https://localhost:3301/iniciarSesion"
    let userData = {
      email: document.querySelector("#email_user").value,
      pwd: document.querySelector("#pwd_user").value
    }

    if (userData.email !== "" && userData.pwd !== "") {
      console.log(`User: ${userData.email}, Pwd: ${userData.pwd}`)
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
    <div>
      <div>


      </div>
      <Link to="/"><button className="btn2">Home</button></Link>
      <div>
        <form id='form_login'>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="pwd_user"
              id="email_user"
              aria-describedby="emailHelp"
              required />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="pwd_user"
              id="pwd_user"
              required />
          </div>


          <div >
            <p className="olvide">Olvidé mi contraseña</p>
          </div>

          <div className="block10 layout">
            <button type="submit" className="btn btn-outline-danger espacio" onClick={iniciarSesion}>Iniciar sesión</button>


          </div>
        </form>
      </div>
    </div>
  )
}
