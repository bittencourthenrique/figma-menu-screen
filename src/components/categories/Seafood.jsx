import React from 'react'
import SectionCategories from '../SectionCategories'
import MenuItems from '../MenuItems'
import { getImagePath } from '../../utils/imagePath'
import './Category.css'

const seafoodItems = [
  {
    text: 'Surf & Turf',
    description: '4 butterfly shrimp and 2 chicken tenders.',
    image: getImagePath('http://localhost:3845/assets/fa66cfae8f65c2a896a41cc9839ca182ea5f44de.png'),
  },
  {
    text: '1/4 Popcorn Shrimp',
    description: '¼ lb of our crispy popcorn shrimp. Includes 1 dipping sauce.',
    image: getImagePath('http://localhost:3845/assets/4df7dee2991b664651de45af0e2f1ef50021777a.png'),
  },
  {
    text: '1/4 Popcorn Shrimp & 2 Tenders',
    description: '¼ lb popcorn shrimp and 2 chicken Tenders. Includes 2 dipping sauce.',
    image: getImagePath('http://localhost:3845/assets/4f4d1c9ffa961aa30606c13e68c57124d67cebf0.png'),
  },
  {
    text: 'Shrimp Tackle Box',
    description: '8 butterfly shrimp with 1 regular side, 1 biscuit, and 1 dipping sauce.',
    image: getImagePath('http://localhost:3845/assets/46377531de5486118716d080bb4ef5a781c88d86.png'),
  },
]

export default function Seafood() {
  return (
    <div id="section-seafood" className="category" data-name="Seafood">
      <SectionCategories text="Seafood" />
      <div className="category-items">
        {seafoodItems.map((item, index) => (
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

