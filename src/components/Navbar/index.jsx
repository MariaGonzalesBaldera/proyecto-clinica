import '../../assets/styles/Navbar.css'

export default function Navbar() {
  const pulsar = () => {
    const mainMenuElement = document.getElementById('main-menu');
    mainMenuElement.classList.toggle('main-menu--show');
  };
  const reactMenu ="hamburger.png";
  const reactMenuPath =`/${reactMenu}`

  return (
    <>
    <nav className="main-nav">
      <div id="toggle-menu" className="toggle-menu" onClick={() => { pulsar() }}>
        <img src={reactMenuPath} alt="menu" />
      </div>
      <ul id="main-menu" className="main-menu">
        <li className="main-menu__item">
          <a href="#" className="main-menu__link">Inicio</a>
        </li>
        <li className="main-menu__item">
          <a href="#" className="main-menu__link">Acerca de nosotros</a>
        </li>
        <li className="main-menu__item">
          <a href="#" className="main-menu__link">Chat</a>
        </li>
        <li className="main-menu__item">
          <a href="#" className="main-menu__link">Configuración</a>
        </li>
      </ul>
    </nav>

    </>

  )
}