//imgs
// import Pollo from '../../../assets/img/pollito.png'
import Ingredientes from '../../../assets/img/ingredientes.png'
import Media from '../../../assets/img/media.png'
import Reloj from '../../../assets/img/reloj.png'

import { Link } from 'react-router-dom'
import './card.css'

export default function Card({ recetaInfo = [] }) {
    console.log(recetaInfo)
    return (
        <div className="receta">
            <img src={require(`../../../assets/img/${recetaInfo.img}`)} alt={recetaInfo.img} />
            <div className='descripcion'>
                <Link to='/receta'>
                    <h2>{recetaInfo.nombre}</h2>
                </Link>
                <p>{recetaInfo.descripcion}</p>
                <div className='detalles'>
                    <div className='tiempo'>
                        <img src={Reloj} alt='Reloj' />
                        <p>{recetaInfo.duracion} min</p>
                    </div>
                    <div className='cantIngredientes'>
                        <img src={Ingredientes} alt='Ingredientes' />
                        <p>{recetaInfo.cantidadIngredientes} ingredientes</p>
                    </div>
                    <div className='dificultadReceta'>
                        <img src={Media} alt='Dificultad' />
                        <p>{recetaInfo.dificultad}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}