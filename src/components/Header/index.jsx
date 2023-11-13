import '../../assets/styles/Header.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export default function Header({titulo , mensaje}) {

  const reactLogoPath = "/dist/img/hospital.png"
  return (
    <nav className="main-nav-Specialties">
      <div className='div-logo'><Link to={"/"}>
        <img className='img-logo' src={reactLogoPath} title='Logo' alt='logo' /></Link>
      </div>
      <div className='div-descripcion'>
        <p className='text-doctor'>{titulo}</p>
        <p className='text-disponibles'>{mensaje}</p>
      </div>
      <div>CONFIGURACIÓN</div>
    </nav>
  )
}

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
  mensaje: PropTypes.string.isRequired  
};
