import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
const Products = (props) => {
    
    const {idMeal,strArea,strCategory,strTags,strMealThumb,strMeal} = props.product
    const btnDetail = props.btnDetail;
    
    
    
    return (
        
  <div className="col">
    <div className="card align-items-center">
      <img src={strMealThumb} className="card-img-top w-50" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{strMeal}</h5>
        <p className="card-text">Area: {strArea}</p>
        <p className="card-text">Tag: {strTags}</p>
        <button onClick={() => btnDetail(props.product)} className='btn btn-info fw-bold'>Click for Details <FontAwesomeIcon icon={faUtensils}/> </button>
      </div>
    </div>
  </div>


    );
};

export default Products;