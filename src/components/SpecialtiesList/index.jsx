import '../../styles/SpecialtiesList.css';
import logo from '../../img/hospital.png';

export default function SpecialtiesList(){
  return(
    <nav className="main-nav-Specialties">
      <div className='div-logo'><img className='img-logo' src={logo} alt="menu"/></div>
      <div className='div-descripcion'>
        <p className='text-doctor'>Doctor General</p>
        <p className='text-dispobibles'>5 Especialistas disponibles</p>
      </div>
      <div>Configuración</div>
    </nav>
  )
}