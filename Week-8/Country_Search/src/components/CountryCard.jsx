import React from 'react'

const CountryCard = ({country}) => {
    console.log(country)
  return (
    <div className='border shadow-4xl p-2 rounded-2xl'>
        <img  className='rounded-2xl pb-3 ' src={country.flags.png} alt="" />
        <h1 className='font-bold'>{country.name.common}</h1>
        <p className='font-semibold text-small'>Region:{country.region}</p>
        <p>Population:{country.population}</p>
    </div>
  )
}

export default CountryCard