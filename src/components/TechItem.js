import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete}) {
  return(
    <li 
      key={tech}>
      {tech}
      <button 
        onClick={onDelete}
        type='button'>
          Remover
      </button>
    </li>
  );
}

// default props
// Default propssão os valores padrões destas propriedades, quando não forem atribuidos
// na criação do compontente
TechItem.defaultProps = {
  tech: 'Oculto',
}

// Prop types
// prop types são definições padroes do formato(tipo) dos atributos 
// (props) passados para o componente, depende de prop-types
// yarn add prop-types / import PropTypes from 'prop-types'
TechItem.propTypes = {
 tech: PropTypes.string.isRequired,
 onDelete: PropTypes.func.isRequired
}

export default TechItem;