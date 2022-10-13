import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

export default function Navbar2() {
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

                    <div className="btns">
                    <h2>Welcome Admin</h2>
                    
                    </div>
                </nav>
            </header>
        </div>
    )
}