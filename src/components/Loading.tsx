import React from 'react'

export const Loading = () => {
  return (
    <div className='loading'>
        <div className="spinner-box">
            <div className="pulse-container">
                <div className="pulse-bubble bubble-1"></div>
                <div className="pulse-bubble bubble-2"></div>
                <div className="pulse-bubble bubble-3"></div>
            </div>
        </div>
    </div>
  )
}
