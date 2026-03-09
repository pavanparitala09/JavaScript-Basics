import React from 'react'
import { useLocation } from 'react-router'

export default function Products() {
    
    const {state} = useLocation()
    let product = state?.product
    console.log(product)
  return (
    <div>
      <p className='text-4xl text-center pb-15 '>Product Details are</p>
      <div className='flex justify-between'>
        <img width="300px" className='ml-10 mr-10' src={product?.image} alt="" />
        <div className=''>
        <p className='text-4xl pb-5'>{product.title}</p>
        <p>{product.description}</p>
        <p className='font-bold pt-5'> Price:{product.price}</p>
        </div>
      </div>
    </div>
  )
}
