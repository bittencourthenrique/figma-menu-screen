import React from 'react'
import './MenuItems.css'

export default function MenuItems({
  text = 'Name',
  description = 'Lorem Ipsum',
  feeds = 'Lorem Ipsum',
  feeds2 = false,
  showQuickAddMenu = false,
  showDescription = true,
  showPriceCal = false,
  priceCal = '$0.25  ∙  70 Cal ',
  showBorder = false,
  image = null,
}) {
  return (
    <div className={`menu-item ${showBorder ? 'with-border' : ''}`} data-name="Menu Items">
      <div className="menu-item-content">
        <div className="menu-item-text">
          <div className="menu-item-title-description">
            <p className="menu-item-title">{text}</p>
            {showDescription && (
              <p className="menu-item-description">{description}</p>
            )}
          </div>
          {feeds2 && (
            <p className="menu-item-feeds">{feeds}</p>
          )}
          {showPriceCal && (
            <p className="menu-item-price-cal">{priceCal}</p>
          )}
        </div>
        <div className="menu-item-image-container">
          <div className="menu-item-image">
            {image ? (
              <img src={image} alt={text} className="menu-item-image-img" />
            ) : (
              <div className="menu-item-image-placeholder"></div>
            )}
          </div>
          {showQuickAddMenu && (
            <button className="quick-add-button" data-name="Quick Add - Menu">
              <div className="quick-add-button-circle">
                <svg className="add-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 3v12M3 9h12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

