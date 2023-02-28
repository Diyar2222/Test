import React from 'react'
import { PlanetCircle } from './PlanetCircle'

export const Body_Top= () => {
  return (
    <div className='body__top'>
      <div className='body__top-text'>
            <h1>Explore your own planet</h1>
            <h1>In <span className='transparent-bg-text'>our new</span> metaverse</h1>
        </div>
      <PlanetCircle/>
        <div className='roadmap'>
            <h2 className='roadmap__title'>ROADMAP STATS</h2>
          <div>
            <h2 className='roadmap-numbers'>12,345</h2>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className='underline'></div>
          <div>
            <h2 className='roadmap-numbers'>12,345</h2>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className='underline'></div>
          <div>
            <h2 className='roadmap-numbers'>12,345</h2>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
    </div>
  )
}
