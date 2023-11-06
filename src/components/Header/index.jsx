import '../../assets/styles/Header.css'
import { Link } from 'react-router-dom';

export default function Header(){

  const reactLogo ="hospital.png";
  const reactLogoPath =`/${reactLogo}`


  return(
    <nav className="main-nav-Specialties">
      <div className='div-logo'><Link to={"/"}>
        <img className='img-logo' src={reactLogoPath} alt='logo'/></Link>
      </div>
      <div className='div-descripcion'>
        <p className='text-doctor'>Medicina General</p>
        <p className='text-disponibles'>5 Especialistas disponibles</p>
      </div>
      <div>Configuración</div>
    </nav>
  )
}