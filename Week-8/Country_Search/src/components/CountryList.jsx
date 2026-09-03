import React from 'react'
import CountryCard from './CountryCard'

const CountryList = ({countries}) => {
  if (!Array.isArray(countries)) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {countries.map((country, index) => (
          <CountryCard key={country.name?.common || index} country={country} />
        ))}
      </div>
    </div>
  )
}

export default CountryList