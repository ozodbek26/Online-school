import React, { useState } from 'react';
import './Accordion.css';

function Accordion({ title, content, title2 }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='accordion'>
      <div className='accordion-header' onClick={toggleAccordion}>
        <h3>{title}</h3>
       
      </div>
      {isOpen && (
        <div className='accordion-content'>
          <h3>{content}</h3>
          <p>{title2}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
