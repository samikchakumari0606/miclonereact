import React from 'react';
import "../Styles/Heading.css";


const Heading = ({text}) => {
  return (
    <div className='heading'>
        <div></div>
     <h3>{text}</h3>
     <div></div>
    </div>
  )
}

export default Heading