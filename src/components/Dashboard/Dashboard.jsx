import React from 'react'
import StatsGrid from './StatsGrid'
import ChartsSection from './ChartsSection'

const Dasboard = () => {
  return (
    <div className='space-y-6'>
      {/* Stats grid cols */}
      <StatsGrid  />
      <ChartsSection />
    </div>
  )
}

export default Dasboard
