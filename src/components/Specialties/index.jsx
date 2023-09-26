import { Link } from 'react-router-dom';
import '../../styles/Specialties.css';
import { useState, useEffect } from 'react';

export default function Specialties() {
  const [imageComponents, setImageComponents] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const imagePaths = ['Teleconsulta.png', 'Doctor General.png', 'Dentista.png', 'Ortopedista.png', 'Pediatra.png', 'Ginecologa.png', 'Cardiolo.png'];
      const imageImports = await Promise.all(
        imagePaths.map(path => `../../img/specialties/${path}`)
      );

      const imageComponents = imageImports.map((module, index) => (

        <>
          <img
            key={index}
            src={`src/img/specialties/${imagePaths[index]}`}
            alt={`${imagePaths[index]}`}
          />
          <p className='text-specialties'>{`${imagePaths[index]}`.replace(".png", "")}</p>
        </>

      ));
      setImageComponents(imageComponents);
    };
    importImages();
  }, []);

  return (
    <section>
      <div className='main-specialties'>
        <Link to={"/select"} className='specialties-items'>
          {imageComponents.map((item, index) => (
            <div key={index}>{item}
            </div>
          ))}
        </Link>
      </div>
    </section>

  )
}
