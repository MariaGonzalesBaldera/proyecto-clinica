import perfil from '../../img/doctoraEjemplo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faHospital } from '@fortawesome/free-solid-svg-icons'
export default function Description(){
  return(
      <div className="div-main-description">
          <section className="section-description">
          <div className="div-description"> 
            <section className='div-description-second'>
              <h2>Acerca de</h2>
              <b>Universidad</b>
              <div>
                Universidad Peruana Cayetano Heredia
              </div>
              <b>Biografia</b>
              <div>
                Dr. Diana M. is a physician graduated from Universidad Peruana Cayetano Heredia, with primary care experience. Dr Diana M. also works in service providers for insurance agencies. Her main qualities are empathy and good communication skills.
              </div>
            </section>
          </div>
          <div className="div-description">
            <img src={perfil}/>
            <div className='div-description-principal'>
            <h2>Dra. Diana Martinez</h2>
            <div  className='div-information'>
                <p><FontAwesomeIcon icon={faHouse} style={{color: "#d0d4dd",}} /> Domicilio &#160; &#160;
                <FontAwesomeIcon icon={faHospital} style={{color: "#d0d4dd",}} /> Clínica</p>
                <p>Cuento con 5 años de experiencia </p>
                <br/>
              <div className='btn-description-reservar'>
                Reservar
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 