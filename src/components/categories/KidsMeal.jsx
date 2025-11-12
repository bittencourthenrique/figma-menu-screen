import React from 'react'
import SectionCategories from '../SectionCategories'
import MenuItems from '../MenuItems'
import './Category.css'

const kidsMealItems = [
  {
    text: 'Mac & Cheese Kids Meal',
    description: 'Homestyle Mac & Cheese with apple juice, GoGo Squeez applesauce, and a toy.',
    image: 'http://localhost:3845/assets/7b738f22572830e57a768d8d2b1d306bf94dcd3a.png',
  },
  {
    text: '1Pc Leg Kid\'s Meal',
    description: '1 piece Leg with apple juice, GoGo Squeez applesauce, and a toy.',
    image: 'http://localhost:3845/assets/f0564e0142280fc640aa1589e95827f520109e86.png',
  },
  {
    text: '1Pc Tender Kid\'s Meal',
    description: '1 piece Tender with apple juice, GoGo Squeez applesauce, and a toy.',
    image: 'http://localhost:3845/assets/9d0304215c0f96a8f25054d1c2b1e3c44987098c.png',
  },
]

export default function KidsMeal() {
  return (
    <div id="section-kids-meal" className="category" data-name="Kids Meal">
      <SectionCategories text="Kids Meal" />
      <div className="category-items">
        {kidsMealItems.map((item, index) => (
          <MenuItems
            key={index}
            text={item.text}
            description={item.description}
            showBorder={index > 0}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

