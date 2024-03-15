// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './AnimatedName.css'; // Asegúrate de tener un archivo AnimatedName.css para los estilos
import Name from './Name'; // Importa el componente Name que acabamos de crear

// eslint-disable-next-line react/prop-types
const AnimatedName = ({ text }) => {
  // eslint-disable-next-line no-unused-vars
  const [dynamicText, setDynamicText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(prev => !prev);
    }, 2000); // Cambia el estado cada 2 segundos

    return () => clearInterval(intervalId);
  }, []);

  const animationClass = isAnimating ? 'animate' : '';

  return <div className={`animated-name ${animationClass}`}>
    <Name text={dynamicText} />
  </div>;
};

export default AnimatedName;
