import React from 'react'
import SectionCategories from '../SectionCategories'
import MenuItems from '../MenuItems'
import { getImagePath } from '../../utils/imagePath'
import './Category.css'

const sandwichesItems = [
  {
    text: 'Classic Chicken Sandwich',
    description: '1 chicken breast fillet on toasted brioche buns with pickles and classic mayo.',
    image: getImagePath('http://localhost:3845/assets/bc3d73988a30e0ce72845742e22f2a9e12f7362f.png'),
  },
  {
    text: 'Spicy Chicken Sandwich',
    description: '1 chicken breast fillet on toasted brioche buns with pickles and spicy mayo.',
    image: getImagePath('http://localhost:3845/assets/72403166ee58a7b747d866fb8784c97bf8275f9a.png'),
  },
  {
    text: 'Bacon & Cheese Chicken Sandwich',
    description: '1 chicken breast fillet on toasted brioche buns with bacon, cheese, and pickle.',
    image: getImagePath('http://localhost:3845/assets/3711b6a245f4d898a44eb0c6e38eb9d4419365ed.png'),
  },
]

export default function Sandwiches() {
  return (
    <div id="section-sandwiches" className="category" data-name="Sandwiches">
      <SectionCategories text="Sandwiches" />
      <div className="category-items">
        {sandwichesItems.map((item, index) => (
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

