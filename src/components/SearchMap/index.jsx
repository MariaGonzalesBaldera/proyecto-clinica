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
        <DivDoctor/>
      </div>
      <div className='div-map'>
        Mapa
      </div>
    </section>
  )
}