import perfil from '../../img/specialties/Doctor General.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faHospital } from '@fortawesome/free-solid-svg-icons'

export default function DivDoctor (){
  return(
        <div className='div-list-item'>
          <div className='text-name'>Dr. Diana M.
            <p className='text-type'><FontAwesomeIcon icon={faHouse} style={{color: "#9ba19f",}} /> Domicilio <FontAwesomeIcon icon={faHospital} style={{color: "#9ba19f",}} /> Clinica</p>
            <img src={perfil} alt='perfil.png'/>
          </div>
          <div className='text-description'>
            <div className='div-price'>S/. 100</div>
            <div className='div-description-doctor'>
          20.9km de ti.   <br/>Ingles / Español / Francés <br/>2 años de experiencia
          </div>
          
          </div>
          <div className='div-days'>
              <div className='div-days-item'>HOY</div>
              <div className='div-days-item'>24 Agos</div>
              <div className='div-days-item'>25 Agos</div>
          </div>
        </div>

  )
}