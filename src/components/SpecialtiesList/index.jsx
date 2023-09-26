import '../../styles/SpecialtiesList.css';
import logo from '../../img/hospital.png';
import { Link } from 'react-router-dom';

export default function SpecialtiesList(){
  return(
    <nav className="main-nav-Specialties">
      <div className='div-logo'><Link to={"/"}>
        <img className='img-logo' src={logo} alt='logo'/></Link>
      </div>
      <div className='div-descripcion'>
        <p className='text-doctor'>Doctor General</p>
        <p className='text-disponibles'>5 Especialistas disponibles</p>
      </div>
      <div>Configuración</div>
    </nav>
  )
}