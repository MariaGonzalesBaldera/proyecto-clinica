import '../../styles/Search.css';
import logo from '../../img/hospital.png';
import lupa from '../../img/search.png';

export default function Search() {
  return (
    <>
      <div className='main-search'>
        <h2>Doctor consultas</h2>
        <img className='logo' src={logo} alt='logo' />
        <div className='search'>
          <form action='#' method='get' className='search-bar'>
            <input type='text' placeholder='Medicina general, Dentista, Pediatra.. ' />
            <button type='submit'><img className='img-lupa' src={lupa} alt='img-lupa' /></button>
          </form>
        </div>
      </div>
    </>
  )
}
