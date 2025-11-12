import React from 'react'
import SectionCategories from '../SectionCategories'
import MenuItems from '../MenuItems'
import { getImagePath } from '../../utils/imagePath'
import './Category.css'

const signatureChickenItems = [
  {
    text: '2Pc Signature Chicken',
    description: '2Pc crispy chicken, marinated in Louisiana herbs and hand-battered.',
    image: getImagePath('http://localhost:3845/assets/b04b679ffc1d3f4bbbf04819e49f2daab9a3137c.png'),
  },
  {
    text: '3Pc Signature Chicken Deal',
    description: '3Pc of our juicy, crispy chicken just for you at a special price.',
    image: getImagePath('http://localhost:3845/assets/d8c1fcd7e9d387815561f61ab40c760bb8d29234.png'),
  },
  {
    text: '3Pc Signature Chicken',
    description: '3Pc crispy chicken, marinated in Louisiana herbs and hand-battered.',
    image: getImagePath('http://localhost:3845/assets/d8c1fcd7e9d387815561f61ab40c760bb8d29234.png'),
  },
  {
    text: '4Pc Signature Chicken',
    description: '4Pc crispy chicken, marinated in Louisiana herbs and hand-battered.',
    image: getImagePath('http://localhost:3845/assets/f559579d360be06183a7e85a869cd6c77a05ac3e.png'),
  },
  {
    text: '8Pc Signature Chicken',
    description: '8Pc crispy chicken. Family meal includes 1 large side & 4 biscuits.',
    feeds: 'Feeds 3-4 people',
    feeds2: true,
    image: getImagePath('http://localhost:3845/assets/980404bf2f141c490b19b3165312aad1b537a046.png'),
  },
  {
    text: '12Pc Signature Chicken',
    description: '12Pc crispy chicken. Family meal includes 2 large sides & 6 biscuits.',
    feeds: 'Feeds 4-6 people',
    feeds2: true,
    image: getImagePath('http://localhost:3845/assets/f559579d360be06183a7e85a869cd6c77a05ac3e.png'),
  },
  {
    text: '16Pc Signature Chicken',
    description: '16Pc crispy chicken. Family meal includes 3 large sides & 8 biscuits.',
    feeds: 'Feeds 6-8 people',
    feeds2: true,
    image: getImagePath('http://localhost:3845/assets/1aa72570e09cbb002599355358d52af61c35235e.png'),
  },
]

export default function SignatureChicken() {
  return (
    <div id="section-signature-chicken" className="category" data-name="Signature Chicken">
      <SectionCategories text="Signature Chicken" />
      <div className="category-items">
        {signatureChickenItems.map((item, index) => (
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

