import React from 'react'
import SectionCategories from '../SectionCategories'
import MenuItems from '../MenuItems'
import './Category.css'

export default function BYOB() {
  return (
    <div id="section-byob" className="category" data-name="BYOB">
      <SectionCategories text="Build Your Own Bundle" />
      <div className="category-items">
        <MenuItems
          text="Build Your Own Bundle"
          description="Create your meal with 3 proteins + 2 sides of your choice."
          feeds="Feeds 3-4 people"
          feeds2={true}
          image={`${import.meta.env.BASE_URL}assets/byob-image.avif`}
        />
      </div>
    </div>
  )
}

