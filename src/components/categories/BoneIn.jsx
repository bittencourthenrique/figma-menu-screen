import React from 'react'
import SectionCategories from '../SectionCategories'
import MenuItems from '../MenuItems'
import { getImagePath } from '../../utils/imagePath'
import './Category.css'

const boneInItems = [
  {
    text: '6Pc Bone-In Wings',
    description: '6Pc crispy wings in bold rub & saucy flavors.',
    image: getImagePath('http://localhost:3845/assets/adc19f7b945a7a4cd1825cae85e79c319d2b97bd.png'),
  },
  {
    text: '12Pc Bone-In Wings',
    description: '12Pc crispy wings with bold rub & saucy flavors. Pick up to 2 flavors.',
    image: getImagePath('http://localhost:3845/assets/ebe53f4cb726b852b5cb8a390e8aafd854e9525b.png'),
  },
  {
    text: '18Pc Bone-In Wings Group Pack',
    description: '18Pc crispy wings (up to 3 flavors), 1 large side, and 3 dipping sauces.',
    feeds: 'Feeds 3-4 people',
    feeds2: true,
    image: getImagePath('http://localhost:3845/assets/162279f511bdc507e47071004bfc57c6ed9f966d.png'),
  },
  {
    text: '24Pc Bone-In Wings',
    description: '24Pc crispy wings (up to 4 flavors) with 4 dipping sauces.',
    feeds: 'Feeds 4-6 people',
    feeds2: true,
    image: getImagePath('http://localhost:3845/assets/07a74d59989ae2c9bc282dc1573f499a6a2f58f3.png'),
  },
]

export default function BoneIn() {
  return (
    <div id="section-bone-in" className="category" data-name="Bone-In">
      <SectionCategories text="Bone-In Wings" />
      <div className="category-items">
        {boneInItems.map((item, index) => (
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

