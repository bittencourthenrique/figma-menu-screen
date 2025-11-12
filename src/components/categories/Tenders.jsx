import React from 'react'
import SectionCategories from '../SectionCategories'
import MenuItems from '../MenuItems'
import './Category.css'

const tendersItems = [
  {
    text: '3Pc Tenders',
    description: '3Pc Louisiana-style crispy tenders. Includes 1 dipping sauce.',
    image: 'http://localhost:3845/assets/5369204c43a588db89e6ca9b0dc64ac5f7a1ea5d.png',
  },
  {
    text: '5Pc Tenders',
    description: '5Pc Louisiana-style crispy tenders. Includes 2 dipping sauce.',
    image: 'http://localhost:3845/assets/ab03b116f112a961d640e57f475625e1cf1acca6.png',
  },
  {
    text: '8Pc Tenders Family Meal',
    description: '8Pc crispy tenders. Includes 2 large sides, 6 biscuits, and 4 dipping sauces.',
    feeds: 'Feeds 3-4 people',
    feeds2: true,
    image: 'http://localhost:3845/assets/db27fae11cdfed69d2724616826112cea446a731.png',
  },
  {
    text: '12Pc Tenders Family Meal',
    description: '12Pc crispy tenders. Includes 2 large sides, 6 biscuits, and 4 dipping sauces.',
    feeds: 'Feeds 4-6 people',
    feeds2: true,
    image: 'http://localhost:3845/assets/e34a644b29d8ec363ff29c62dfd59fb30074ca68.png',
  },
  {
    text: '16Pc Tenders Family Meal',
    description: '16Pc crispy tenders. Includes 2 large sides, 6 biscuits, and 4 dipping sauces.',
    feeds: 'Feeds 6-8 people',
    feeds2: true,
    image: 'http://localhost:3845/assets/728c1bcc1182647178fcab45337cff8e0ab42dde.png',
  },
]

export default function Tenders() {
  return (
    <div id="section-tenders" className="category" data-name="Tenders">
      <SectionCategories text="Tenders" />
      <div className="category-items">
        {tendersItems.map((item, index) => (
          <MenuItems
            key={index}
            text={item.text}
            description={item.description}
            feeds={item.feeds}
            feeds2={item.feeds2}
            showBorder={index > 0}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

