import React from 'react'
import SectionCategories from '../SectionCategories'
import MenuItems from '../MenuItems'
import './Category.css'

const sidesDessertsItems = [
  {
    text: 'Cajun Fries',
    description: 'Crispy seasoned cajun fries.',
    image: 'http://localhost:3845/assets/97ebf26f98caa6c51aaf41d87b2dd2a979c5b959.png',
  },
  {
    text: 'Homestyle Mac & Cheese',
    description: 'Mac & Cheese with butter, cream, and baked cheese topping.',
    image: 'http://localhost:3845/assets/474a0840f41684306f2da8b9c2f23be85e08e5f9.png',
  },
  {
    text: 'Mashed Potatoes with Cajun Gravy',
    description: 'Creamy mashed potatoes smothered in our savory Louisiana Cajun Gravy.',
    image: 'http://localhost:3845/assets/52795876211b2ba4e64b1b22e18ad69652794e55.png',
  },
  {
    text: 'Cajun Gravy Side',
    description: 'Cajun gravy, slow-simmered, silky smooth, creamy.',
    image: 'http://localhost:3845/assets/36a20d4f503ea464f9f4908afd1b679701796c8a.png',
  },
  {
    text: 'Red Beans & Rice',
    description: 'Smooth red beans served with seasoned rice',
    image: 'http://localhost:3845/assets/f5b9f6e32c3899dc38175ae01cc94232abe5ca25.png',
  },
  {
    text: 'Coleslaw',
    description: 'A crisp and tangy cabbage and carrot coleslaw.',
    image: 'http://localhost:3845/assets/95825ee16d8bf578413e2496b3fb825ba77feea6.png',
  },
  {
    text: 'Biscuits',
    description: 'Warm buttermilk biscuit.',
    image: 'http://localhost:3845/assets/4883a3429ad3ddf35693dc5dcb5e8b854644f2ec.png',
  },
  {
    text: 'Jalapeño Pepper',
    description: 'Jalapeño pepper, bold and spicy, perfect for an extra kick.',
    image: 'http://localhost:3845/assets/906029f1d5bccf8cb562f39a14b07e7cb45fdf06.png',
  },
  {
    text: 'Caramel Apple Cheesecake Cup',
    description: 'Cheesecake with a caramel-apple swirl on a graham crust.',
    image: 'http://localhost:3845/assets/974c80777f91e4c181dd756c3b6ede5b32a04e93.png',
  },
  {
    text: 'Cinnamon Apple Pie',
    description: 'Warm, crispy crust on the outside, hot cinnamon apple goodness on the inside',
    image: 'http://localhost:3845/assets/ccc67688d2d94f65b79c386091962034cb041265.png',
  },
  {
    text: 'Strawberry Cream Cheese Pie',
    description: 'Crispy pie dough filled with tart strawberry and swirls of cream cheese.',
    image: 'http://localhost:3845/assets/16319afc127f96e0c3893843eca4dd1fbcc4b5c0.png',
  },
]

export default function SidesDesserts() {
  return (
    <div id="section-sides-desserts" className="category" data-name="Sides&Desserts">
      <SectionCategories text="Sides & Desserts" />
      <div className="category-items">
        {sidesDessertsItems.map((item, index) => (
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

