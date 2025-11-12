import React from 'react'
import SectionCategories from '../SectionCategories'
import MenuItems from '../MenuItems'
import { getImagePath } from '../../utils/imagePath'
import './Category.css'

const wrapsItems = [
  {
    text: 'Classic Wrap',
    description: '1 Chicken Wrap with lettuce, sauce, cheese, pickles in a tortilla.',
    image: getImagePath('http://localhost:3845/assets/fd5689d3e895c790e870a9d0c242f00912ff9419.png'),
  },
  {
    text: 'Blackened Wrap',
    description: '1 Blackened Chicken Wrap with lettuce, sauce, cheese, pickles in a tortilla.',
    image: getImagePath('http://localhost:3845/assets/28975f73ebecae3fa4c740160c528c728407e49f.png'),
  },
  {
    text: 'Wraps Bundle',
    description: '2 chicken wraps + 1 premium lemonade.',
    image: getImagePath('http://localhost:3845/assets/760a78710f32dd6c9d1158d5f4a7504edf2a4857.png'),
  },
]

export default function Wraps() {
  return (
    <div id="section-wraps" className="category" data-name="Wraps">
      <SectionCategories text="Wraps" />
      <div className="category-items">
        {wrapsItems.map((item, index) => (
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

