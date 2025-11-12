import React from 'react'
import SectionCategories from '../SectionCategories'
import MenuItems from '../MenuItems'
import { getImagePath } from '../../utils/imagePath'
import './Category.css'

const groupMealsItems = [
  {
    text: '18Pc Wing Group Pack',
    description: '18Pc bone-in & boneless wings (up to 3 flavors), 1 large side, and 3 dipping sauces.',
    feeds: 'Feeds 3-4 people',
    feeds2: true,
    image: getImagePath('http://localhost:3845/assets/162279f511bdc507e47071004bfc57c6ed9f966d.png'),
  },
  {
    text: '8Pc Signature Chicken Family Meal',
    description: '8Pc crispy chicken. Family meal includes 1 large side & 4 biscuits.',
    feeds: 'Feeds 3-4 people',
    feeds2: true,
    image: getImagePath('http://localhost:3845/assets/64cc94845050408009f303e8d6593ed7905c4eec.png'),
  },
  {
    text: '12Pc Signature Chicken Family Meal',
    description: '12Pc crispy chicken. Family meal includes 2 large sides & 6 biscuits.',
    feeds: 'Feeds 4-6 people',
    feeds2: true,
    image: getImagePath('http://localhost:3845/assets/7703f77297495693551f6e58ff9fef08c242f255.png'),
  },
  {
    text: '16Pc Signature Chicken Family Meal',
    description: '16Pc crispy chicken. Family meal includes 3 large sides & 8 biscuits.',
    feeds: 'Feeds 6-8 people',
    feeds2: true,
    image: getImagePath('http://localhost:3845/assets/debc9579278cb4bfdbd71240d1b65062b0562a40.png'),
  },
  {
    text: '8Pc Tenders Family Meal',
    description: '8Pc crispy tenders. Includes 2 large sides, 6 biscuits, and 4 dipping sauces.',
    feeds: 'Feeds 3-4 people',
    feeds2: true,
    image: getImagePath('http://localhost:3845/assets/db27fae11cdfed69d2724616826112cea446a731.png'),
  },
  {
    text: '12Pc Tenders Family Meal',
    description: '12Pc crispy tenders. Includes 2 large sides, 6 biscuits, and 4 dipping sauces.',
    feeds: 'Feeds 4-6 people',
    feeds2: true,
    image: getImagePath('http://localhost:3845/assets/e34a644b29d8ec363ff29c62dfd59fb30074ca68.png'),
  },
  {
    text: '16Pc Tenders Family Meal',
    description: '16Pc crispy tenders. Includes 2 large sides, 6 biscuits, and 4 dipping sauces.',
    feeds: 'Feeds 6-8 people',
    feeds2: true,
    image: getImagePath('http://localhost:3845/assets/728c1bcc1182647178fcab45337cff8e0ab42dde.png'),
  },
]

export default function GroupMeals() {
  return (
    <div id="section-family-meals" className="category" data-name="Group Meals">
      <SectionCategories text="Group Meals" />
      <div className="category-items">
        {groupMealsItems.map((item, index) => (
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

