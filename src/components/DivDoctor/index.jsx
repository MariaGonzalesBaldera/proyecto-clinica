import perfil from '../../img/specialties/Doctor General.png';

export default function DivDoctor (){
  return(
    <div className='div-list'>
        <div className='div-list-item'>
          <div className='text-name'>Dr. Diana M.
            <p className='text-type'>Domicilio</p>
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
              <div className='div-days-item'>24 Agosto</div>
              <div className='div-days-item'>25 Agosto</div>
          </div>
        </div>

      </div>
  )
}