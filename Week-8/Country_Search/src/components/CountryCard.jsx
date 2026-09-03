import React from 'react'

const CountryCard = ({country}) => {
  return (
    <div className='border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-3 rounded-2xl bg-white'>
      <img
        className='w-full h-36 object-cover rounded-xl pb-2'
        src={country.flags?.png}
        alt={country.name?.common || 'Country Flag'}
        loading="lazy"
      />
      <h2 className='font-bold text-base text-gray-900'>{country.name?.common}</h2>
      <p className='font-semibold text-sm text-gray-600'>Region: <span className='font-normal'>{country.region}</span></p>
      <p className='font-semibold text-sm text-gray-600'>Population: <span className='font-normal'>{country.population?.toLocaleString()}</span></p>
    </div>
  )
}

export default CountryCard