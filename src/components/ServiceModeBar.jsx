import React from 'react'
import './ServiceModeBar.css'

export default function ServiceModeBar() {
  return (
    <div className="service-mode-bar" data-name="Service Mode Bar">
      <div className="service-mode-bar-content">
        <div className="service-mode-bar-left">
          <div className="service-mode-bar-header">
            <div className="service-mode-bar-icon-text">
              <svg className="pickup-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
              </svg>
              <p className="pickup-text">Pick Up</p>
            </div>
          </div>
          <p className="address-text">5700 Blue Lagoon Dr, Miami, FL...</p>
        </div>
        <button className="change-button">
          <div className="change-button-text">
            <p>Change</p>
            <div className="change-button-underline"></div>
          </div>
        </button>
      </div>
    </div>
  )
}

