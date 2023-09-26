import '../../styles/SearchMap.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import data from '../../archivo.json';
import MapContainers from '../MapContainers';

export default function SearchMap() {
  const [positions, setPositions] = useState([-12.045955, -77.030550])
  const [users, setUsers] = useState([])
  const [selectedMode, setSelectedMode] = useState('Domicilio');

  const showData = () => setUsers(data)
  useEffect(() => showData(), [])
  const handleChange = (e) => {
    setSelectedMode(e.target.value);
  };

  const hasSelectedMode = (item) => {
    const modesArray = Object.values(item.mode);
    return modesArray.includes(selectedMode);
  };

  const filteredData = data.filter((item) => hasSelectedMode(item));

  const handleMouseEnter = (e) => {
    const eventContainer = e.target.classList.contains('link-description')
    if (!eventContainer) {
      e.stopPropagation();
    } else {
      users.filter(user => user["id"] == e.target.id).map(user => {
        setPositions(user["url-map"])
      })
    }
  };

  return (
    <section className="section-map">
      <div className='div-list' >

        {/* inicio radio /> */}

        <div className="form-group-mode">
          <span className="opcion-radio">
            <input type="radio" id="Domicilio-clinica" name="type-of-mode" value="Domicilio"
              checked={selectedMode == "Domicilio"}
              onChange={handleChange} />
            <label htmlFor="Domicilio-clinica">Domicilio/Clinica</label>
          </span>
          <span className="opcion-radio">
            <input type="radio" id="Videoconsulta" name="type-of-mode" value="Videoconsulta"
              checked={selectedMode == "Videoconsulta"}
              onChange={handleChange} />
            <label htmlFor="Videoconsulta">Video Consulta</label>
          </span>
        </div>
        {/* fin radio /> */}
        {filteredData.map((user) => (
          <Link to={`/description/${user.id}`} className='link-description' key={user.id} onMouseEnter={handleMouseEnter} id={user.id}>
            <div className='div-list-item'>
              <div className='text-name'> Dr. {user.name}
                <p className='text-type'>{Object.values(user.mode).join(' - ')}</p>
                <img src={user.photo} alt='perfil.png' />
              </div>
              <div className='text-description'>
                <div className='div-price'>S/. {user.price}</div>
                <div className='div-description-doctor'>
                  20.9km de ti.<br />
                  {Object.values(user.idioms).join(', ')}
                  <br />{user["years-experience"]} años de experiencia
                </div>
              </div>
              <div className='div-days'>
                <div className='div-days-item'>HOY</div>
                <div className='div-days-item'>24 Agos</div>
                <div className='div-days-item'>25 Agos</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className='div-map'>
        <MapContainers positions={positions} />
      </div>
    </section>

  )
}