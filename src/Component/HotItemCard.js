import React from 'react';
import "../Styles/HotItemCard.css"

const HotItemCard = ({image,price,name,index}) => {
  return (
    <div className='HotItemCard'>
        <img src={image} alt={`${index} product`} />
        <p>{name}</p>
        <span>{price}</span>

    </div>
  )
}

export default HotItemCard