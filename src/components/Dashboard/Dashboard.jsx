import React from 'react'
import StatsGrid from './StatsGrid'
import ChartsSection from './ChartsSection'
import TableSection from './TableSection'

const Dasboard = () => {
  return (
    <div className='space-y-6'>

      {/* Stats grid cols */}
      <StatsGrid />

      {/* Chart section */}
      <ChartsSection />

      <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
        <div className='xl:col-span-2'>
          <TableSection />
        </div>
      </div>
    </div>
  )
}

export default Dasboard
