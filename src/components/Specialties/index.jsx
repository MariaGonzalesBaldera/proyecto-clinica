import { Link } from 'react-router-dom';
import '../../styles/Specialties.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor, faVideo, faBone, faUserNurse, faTooth, faHeartPulse, faChildren } from '@fortawesome/free-solid-svg-icons'

export default function Specialties() {
  const ListSpecialties = {
    0 : ["Teleconsulta" , faVideo],
    1 : ["Doctor General" , faUserDoctor],
    2 : ["Ortopedista" , faBone],
    3 : ["Ginecologia" , faUserNurse],
    4 : ["Dentista" , faTooth],
    5 : ["Cardilogo" , faHeartPulse],
    6 : ["Pediatria" , faChildren]
  }

  return (
    <section>
      <div className='main-specialties'>
        <Link to={"/select"} className='specialties-items'>
        {Object.keys(ListSpecialties).map((key) => (
          <div key={key}>
            <FontAwesomeIcon className='ico-specialties' icon={ListSpecialties[key][1]} style={{ color: "#4a7978", }} />
            <p>{ListSpecialties[key][0]}</p>
          </div>
          ))} 
        </Link>
      </div>
    </section>
  )
}