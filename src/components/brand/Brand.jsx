import React from 'react'
import{brands} from './imports'
import './brand.css'
const Brand = () => {
  return (
   <div className="brand section__padding">
    {brands.map((brand,index)=>(
      <div key={index}>
        <img src={require('../../assets/' + brand.image +'.png')} alt={brand.title} />
      </div>
    ))}

   </div>
  )
}

export default Brand
