import '../../styles/SearchMap.css';
import DivDoctor from '../DivDoctor';
export default function SearchMap(){
  return(
    <section className="section-map">
      <div className='div-list'>
        <DivDoctor/>
        <DivDoctor/>
        <DivDoctor/>
        <DivDoctor/>
        <DivDoctor/>
      </div>
      <div className='div-map'>
        <iframe className='iframe-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.312788174603!2d-77.06407192570944!3d-12.021974141438088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf6e0011edbd%3A0x6be3d14590186ce!2sCentro%20de%20lima!5e0!3m2!1ses-419!2spe!4v1693021352884!5m2!1ses-419!2spe"></iframe>
      </div>
    </section>
  )
}