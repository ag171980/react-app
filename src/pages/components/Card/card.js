import { Animated } from "react-animated-css";
//imgs
// import Pollo from '../../../assets/img/pollito.png'
import Ingredientes from '../../../assets/img/ingredientes.png'
import Media from '../../../assets/img/media.png'
import Reloj from '../../../assets/img/reloj.png'

import NotFound from '../../../assets/img/not.png'
import { Link } from 'react-router-dom'
import './card.css'

export default function Card({ recetaInfo = [] }) {
    let difficult = recetaInfo.difficulty
    if (difficult === "1") {
        recetaInfo.difficulty = "Facil"
    }
    if (difficult === "2") {
        recetaInfo.difficulty = "Medio"
    }
    if (difficult === "3") {
        recetaInfo.difficulty = "Dificil"
    }
    function ImgError(e) {
        if (e.target.height <= 24) {
            e.target.src = NotFound
        }
    }
    return (
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>

            <div className="receta">
                <img src={recetaInfo.image === null ? NotFound : recetaInfo.image} alt={recetaInfo.img} onError={ImgError} />
                <div className='descripcion'>
                    <Link to={`/receta/${recetaInfo.id}`}>
                        <h2>{recetaInfo.title}</h2>
                    </Link>
                    <p>{recetaInfo.description}</p>
                    <div className='detalles'>
                        <div className='tiempo'>
                            <img src={Reloj} alt='Reloj' />
                            <p>{recetaInfo.duration} min</p>
                        </div>
                        <div className='cantIngredientes'>
                            <img src={Ingredientes} alt='Ingredientes' />
                            <p>{recetaInfo.ingredients.length} ingredientes</p>
                        </div>
                        <div className='dificultadReceta'>
                            <img src={Media} alt='Dificultad' />
                            <p>{recetaInfo.difficulty}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Animated >
    )
}