import React from 'react'
import './BackNavigation.css'

export default function BackNavigation() {
  return (
    <div className="back-navigation" data-name="Back Navigation">
      <button className="back-button" data-name="Back">
        <svg className="back-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <p className="back-title">Full Menu</p>
    </div>
  )
}

