import '../styles/Specialties.css';
import { useState, useEffect } from 'react';

function Specialties() {  
  const [imageComponents, setImageComponents] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const imagePaths = ['Teleconsulta.png', 'Doctor General.png', 'Dentista.png','Ortopedista.png','Pediatra.png','Ginecologa.png', 'Cardiolo.png'];
      const imageImports = await Promise.all(
        imagePaths.map(path =>  `../img/specialties/${path}`)
      );

      const imageComponents = imageImports.map((module, index) => (
        
        <>
          <img
          key={index}
          src={`src/img/specialties/${imagePaths[index]}`}
          alt={`${imagePaths[index]}`}
        />
        <p className='text-specialties'>{`${imagePaths[index]}`.replace(".png","")}</p>
        </>
        
      ));
      setImageComponents(imageComponents);
    };
    importImages();
  }, []);

  return(
    <main>
      <div className='main-specialties'>
      <h4>Especialdades</h4>
      <div className='specialties-items'>
        {imageComponents.map((item, index) => (
          <div key={index}>{item}
          </div>
        ))}
      </div>
    </div>
    </main>
    
  )
}
export default Specialties;