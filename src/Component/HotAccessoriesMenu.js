import React from 'react';
import "../Styles/HotAccessoriesMenu.css";
import { Link } from 'react-router-dom';

const HotAccessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
     <Link className='HotAccesoriesLink' to="/music">Music Store</Link>
     <Link className='HotAccesoriesLink' to="/smartDevice">Smart Devies</Link>
     <Link className='HotAccesoriesLink' to="/home">Home</Link>
     <Link className='HotAccesoriesLink' to="/lifestyle">LifeStyle</Link>
     <Link className='HotAccesoriesLink' to="/mobileAccessories">Mobile Accessories</Link>
    </div>
  )
}

export default HotAccessoriesMenu