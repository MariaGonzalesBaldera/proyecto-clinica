import '../../styles/Search.css';
import logo from '../../img/hospital.png';
import lupa from '../../img/search.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor, faVideo, faBone, faUserNurse, faTooth, faHeartPulse, faChildren } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

export default function Search() {

  const [search, setSearch] = useState("")
  const [users, setUsers] = useState([])
  
  const showData = async () => {
    setUsers(Object.entries(ListSpecialties))
  } 

  const seacher =(e)=>{
      setSearch(e.target.value)
  }

  
  const ListSpecialties = {
    "Teleconsulta":{faVideo},
    "Doctor General": {faUserDoctor},
    "Ortopedista": {faBone},
    "Ginecologia": {faUserNurse},
    "Dentista": {faTooth},
    "Cardilogo": {faHeartPulse},
    "Pediatria": {faChildren}
  }

  let results =[]
  if(!search){
    results = users
  }else{
    results = users.filter( (dato) =>
          dato[0].toLowerCase().includes(search.toLocaleLowerCase()))
  }

  useEffect(()=>{
    showData()
  },[])

  return (
    <>
      <div className='main-search'>
        <h2>Doctor consultas</h2>
        <img className='logo' src={logo} alt='logo' />
        <div className='search'>
          <div className='search-bar'>

            <input value={search} onChange={seacher} type='text' className='input-search' placeholder='Medicina general, Dentista, Pediatra.. ' />

            <button type='submit'><img className='img-lupa' src={lupa} alt='img-lupa' /></button>
          </div>
        </div>
      </div>
      <section>
      <div className='main-specialties'>
        <Link to={"/select"} className='specialties-items'>
        {results.map(([specialty, iconObj]) => (
            <div key={specialty}>
              <FontAwesomeIcon className='ico-specialties' icon={Object.values(iconObj)[0]} style={{ color: "#4a7978", }} />
              <p>{specialty}</p>
            </div>
          ))}
        </Link>
      </div>
    </section>
    </>
  )
}
