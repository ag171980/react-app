import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import { useState } from 'react'
import { Context } from '../../contexto/Context'
import { useContext } from 'react'


export default function Navbar2() {
    const[toggle, setToggle]= useState(false)
    const{setData}=useContext(Context)
   
    return (
        <div>
            <header>
                <nav>
                 
                    <div className="block15__item">
                        <Link className='logo' to="/">
                            <img src="../assets/img/KeComer.png" alt="" className="icon1 layout" />
                            <h3 className="highlights3 layout">KE COMER</h3>
                        </Link>

                    </div>

                    <div>
                    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <Link onClick={()=>{setToggle(true)}} onDoubleClick={()=>{setToggle(false)}} class="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdownMenuLink"
          role="button" data-mdb-toggle="dropdown" aria-expanded="false">
          <img  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" class="rounded-circle"
            height="50" alt="Avatar" loading="lazy" />
        </Link>
        {toggle ? <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{display:'block'}}>
          <li>
            <Link class="dropdown-item" >My profile</Link>
          </li>
          <li>
            <Link class="dropdown-item" >Settings</Link>
          </li>
          <li>
            <Link class="dropdown-item" >Logout</Link>
          </li>
        </ul>
        :
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{display:'none'}}>
          <li>
            <Link class="dropdown-item" >My profile</Link>
          </li>
          <li>
            <Link class="dropdown-item" >Settings</Link>
          </li>
          <li >
            <button class="dropdown-item">Logout</button>
          </li>
        </ul>
        }
        {/* hasta aca */}
      </li>
    </ul>
    <button onClick={()=>{localStorage.clear(); setData('')} }>log out</button>
  </div>
                </nav>
            </header>
        </div>
    )
}