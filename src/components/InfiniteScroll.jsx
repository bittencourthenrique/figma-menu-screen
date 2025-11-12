import React from 'react'
import TopView from './TopView'
import MenuCategories from './MenuCategories'
import BottomNav from './BottomNav'
import './InfiniteScroll.css'

export default function InfiniteScroll() {
  return (
    <div className="infinite-scroll" data-name="Infinite Scroll">
      <TopView />
      <MenuCategories />
      <BottomNav />
    </div>
  )
}

