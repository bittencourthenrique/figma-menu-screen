import React from 'react'
import SectionCategories from '../SectionCategories'
import MenuItems from '../MenuItems'
import { getImagePath } from '../../utils/imagePath'
import './Category.css'

const bonelessItems = [
  {
    text: '6Pc Boneless Wings',
    description: '6Pc boneless wings in bold rub & saucy flavors.',
    image: getImagePath('http://localhost:3845/assets/6c0d0ed84c168562a290ccd99795905dfccce2ab.png'),
  },
  {
    text: '12Pc Boneless Wings',
    description: '12Pc boneless wings with bold rub & saucy flavors. Pick up to 2 flavors.',
    image: getImagePath('http://localhost:3845/assets/4ec752b04bed81fbf7a1b2657d11627817b7b506.png'),
  },
  {
    text: '18Pc Boneless Wings Group Pack',
    description: '18Pc boneless wings (up to 3 flavors), 1 large side, and 3 dipping sauces.',
    feeds: 'Feeds 3-4 people',
    feeds2: true,
    image: getImagePath('http://localhost:3845/assets/bc24714817f6fc8b45497b0e9f52de5b568c30dc.png'),
  },
  {
    text: '24Pc Boneless Wings',
    description: '24Pc boneless wings (up to 4 flavors) with 4 dipping sauces.',
    feeds: 'Feeds 4-6 people',
    feeds2: true,
    image: getImagePath('http://localhost:3845/assets/713780ba158cb589d0bc6625d200d9e5109f2c94.png'),
  },
]

export default function Boneless() {
  return (
    <div id="section-boneless" className="category" data-name="Boneless">
      <SectionCategories text="Boneless Wings" />
      <div className="category-items">
        {bonelessItems.map((item, index) => (
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

