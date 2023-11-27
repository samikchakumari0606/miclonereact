import React from 'react';
import "../Styles/Offers.css";
import Offer from './Offer';

const Offers = ({offers}) => {
    console.log("offer img",offers)
  return (
    <div className="offersSection">
        {
         offers.map((item,index)=>{
          return(
            <Offer key={item.image} index={index} src={item.image} link={item.url}/>
          )
         })
        }
    </div>
  )
}

export default Offers