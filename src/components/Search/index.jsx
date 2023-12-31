import '../../assets/styles/Search.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllSpecialties } from '../../api/doctor.api'
import IconComponent from '../IconComponent';
import Cargando from '../Cargando'

const reactLogoPath = "dist/img/hospital.png"
const reactLupaPath = "dist/img/search.png"


export default function Search() {

  const [search, setSearch] = useState("")
  const [Specialty, setSpecialty] = useState([])

  const seacher = (e) => setSearch(e.target.value)

  useEffect(() => {
    async function loadSpecialty(){
      const res = await getAllSpecialties();
      setSpecialty(res)
    }
    loadSpecialty();
    }, []);

  const results = !search ? Specialty : Specialty.filter((dato) => dato.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")))

  return (
    <>
      <div className='main-search'>
        <h2>DOCTOR CONSULTAS</h2>
        <img className='logo' src={reactLogoPath} title='Logo' alt='logo' />
        <div className='search'>
          <div className='search-bar'>
            <input autoFocus value={search} onChange={seacher} type='text' className='input-search' placeholder='Medicina general, Dentista, Pediatra.. ' />
            <button>
              <img className='img-lupa' title='Lupa' src={reactLupaPath} alt='img-lupa'/>
            </button>
          </div>
        </div>
      </div>
      <section className='section-specialties'>
        {results.length > 0 ? (
          <div className='main-specialties'>
            {results.map((specialty) => (
              <Link to={`/select/${specialty.name}`} key={specialty.id} className='specialties-items'>
                <div>
                  <IconComponent specialty={specialty} />
                </div>
              </Link>
            ))}
            
          </div>
        ) : (
          <div className='div-sin-disponibilidad'>
            <Cargando/>
          </div>
        )}
      </section>
    </>
  )
}
