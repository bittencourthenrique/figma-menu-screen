import React from 'react'
import SectionCategories from '../SectionCategories'
import MenuItems from '../MenuItems'
import './Category.css'

const ltoItems = [
  {
    text: '3Pc Signature Chicken Deal',
    description: '3Pc of our juicy, crispy chicken just for you at a special price.',
    image: 'http://localhost:3845/assets/d8c1fcd7e9d387815561f61ab40c760bb8d29234.png',
  },
  {
    text: 'Fansville Wing Deal',
    description: '12 wings + a FREE regular drink',
    image: 'http://localhost:3845/assets/d1d41c26583fdd9808cca85b89a18b13bab81e1c.png',
  },
  {
    text: 'Wraps Bundle',
    description: '2 chicken wraps + 1 premium lemonade.',
    image: 'http://localhost:3845/assets/760a78710f32dd6c9d1158d5f4a7504edf2a4857.png',
  },
  {
    text: 'Shrimp Tackle Box',
    description: '8 butterfly shrimp with 1 regular side, 1 biscuit, and 1 sauce.',
    image: 'http://localhost:3845/assets/46377531de5486118716d080bb4ef5a781c88d86.png',
  },
  {
    text: 'Ghost Pepper Chicken Sandwich',
    description: '1 chicken breast fillet on toasted brioche buns with pickles and Ghost Pepper Sauce.',
    image: 'http://localhost:3845/assets/80eaecd3201a983ed876bada1dbe6f5839a0faae.png',
  },
  {
    text: '12Pc Tender Group Bundle',
    description: '12Pc tenders, 4 regular sides, 4 drinks, 4 biscuits and 4 dipping sauces.',
    feeds: 'Feeds 4-6 people',
    feeds2: true,
    image: 'http://localhost:3845/assets/b83d06848a8edcf5ef181e229210bf737b3d8417.png',
  },
]

export default function LTO() {
  return (
    <div id="section-lto" className="category" data-name="LTO">
      <SectionCategories text="Limited Time" />
      <div className="category-items">
        {ltoItems.map((item, index) => (
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

