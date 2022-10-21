import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import { Context } from '../../contexto/Context'
import { useContext } from 'react'

export default function Navbar() {

  const { data, setData } = useContext(Context)
  // console.log(data)
  return (
    <>
      <div className="container-fluid">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom bg-white">
          <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <img src="../assets/img/KeComer.png" alt="" className="icon1 layout mr-3" />
            <h3 className="highlights3 layout ms-2">KE COMER</h3>
          </Link>

          {!data ?
            <div className="btns">
              <Link className='btn-link' to="/login"><button type="button" className="btn btn-outline-danger">Ingresar</button></Link>
              <Link className='btn-link' to="/creacuenta"><button type="button" className="btn btn-outline-danger bg-red-500">Crear Cuenta</button></Link>
            </div>
            :
            <div className='d-flex flex-row justify-content-evenly align-items-center'>
              <span style={{ textTransform: 'capitalize', marginRight: '10px' }}>{data.username} {data.lastname}</span>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" className="rounded-circle"
                height="30" alt="Avatar" loading="lazy" />
              <i className="fa-solid fa-right-from-bracket" style={{ fontSize: '20px', marginLeft: '20px' }} onClick={() => { localStorage.clear(); setData(''); window.location.reload() }}></i>
            </div>
          }
        </header>
      </div>
    </>
  )
}
