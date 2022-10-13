//imgs
// import Pollo from '../../../assets/img/pollito.png'
import Ingredientes from '../../../assets/img/ingredientes.png'
import Media from '../../../assets/img/media.png'
import Reloj from '../../../assets/img/reloj.png'
import './card.css'

export default function Card({ recetaInfo = [] }) {
    console.log(recetaInfo)
    return (
        <div className="receta">
            <img src={require(`../../../assets/img/${recetaInfo.img}`)} alt={recetaInfo.img} />
            <div className='descripcion'>
                <h2>{recetaInfo.nombre}</h2>
                <p>{recetaInfo.descripcion}</p>
                <div className='detalles'>
                    <div className='tiempo'>
                        <img src={Reloj} />
                        <p>{recetaInfo.duracion} min</p>
                    </div>
                    <div className='cantIngredientes'>
                        <img src={Ingredientes} />
                        <p>{recetaInfo.cantidadIngredientes} ingredientes</p>
                    </div>
                    <div className='dificultadReceta'>
                        <img src={Media} />
                        <p>{recetaInfo.dificultad}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}