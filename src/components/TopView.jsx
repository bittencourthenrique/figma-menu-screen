import React from 'react'
import ServiceModeBar from './ServiceModeBar'
import BackNavigation from './BackNavigation'
import TabNavigationMenu from './TabNavigationMenu'
import './TopView.css'

export default function TopView() {
  return (
    <div className="top-view" data-name="Top View">
      <ServiceModeBar />
      <BackNavigation />
      <TabNavigationMenu />
    </div>
  )
}

