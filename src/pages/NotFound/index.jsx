import '../../assets/styles/NotFound.css'
import { Link } from 'react-router-dom';

export default function NotFound() {

  const errorPath = "dist/img/error-404.png"

  return (
    <section className='section-not-found'>
      <div className="container">
        <div className="text">
          <h1>Página no encontrada</h1>
          <p>Al parecer, ocurrio un error al encontrar la página. Intente revisando la URL o ingresa a Regresar a la página inicial</p>
          <ul className="menu">
            <Link to={'/'} className='link-home'>
              <h3>VAMOS AL INICIO</h3>
            </Link>
          </ul>
        </div>
        <div>
          <img className="image-not-found" src={errorPath} alt="" />
        </div>
      </div>
    </section>
  )
}