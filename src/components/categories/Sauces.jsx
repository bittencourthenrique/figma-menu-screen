import React from 'react'
import SectionCategories from '../SectionCategories'
import MenuItems from '../MenuItems'
import './Category.css'

const saucesItems = [
  {
    text: 'Popeyes Signature Sauce',
    description: 'Popeyes new signature creamy pepper dipping sauce, inspired by New Orleans food culture, that packs a kick of heat, hint of sweet, andour signature Cajun spices.',
    showPriceCal: true,
    priceCal: '$0.25  ∙  70 Cal',
    image: 'http://localhost:3845/assets/9d0304215c0f96a8f25054d1c2b1e3c44987098c.png',
  },
  {
    text: 'Bold BQ Sauce',
    description: 'Smoky-sweet barbecue',
    showPriceCal: true,
    priceCal: '$0.25  ∙  70 Cal',
    image: 'http://localhost:3845/assets/9d0304215c0f96a8f25054d1c2b1e3c44987098c.png',
  },
  {
    text: 'Buttermilk Ranch Sauce',
    showPriceCal: true,
    priceCal: '$0.25  ∙  70 Cal',
    showDescription: false,
    image: 'http://localhost:3845/assets/9d0304215c0f96a8f25054d1c2b1e3c44987098c.png',
  },
  {
    text: 'Sweet Heat Sauce',
    showPriceCal: true,
    priceCal: '$0.25  ∙  70 Cal',
    showDescription: false,
    image: 'http://localhost:3845/assets/9d0304215c0f96a8f25054d1c2b1e3c44987098c.png',
  },
  {
    text: 'Mardi Gras Mustard',
    showPriceCal: true,
    priceCal: '$0.25  ∙  70 Cal',
    showDescription: false,
    image: 'http://localhost:3845/assets/9d0304215c0f96a8f25054d1c2b1e3c44987098c.png',
  },
  {
    text: 'Wild Honey Mustard',
    showPriceCal: true,
    priceCal: '$0.25  ∙  70 Cal',
    showDescription: false,
    image: 'http://localhost:3845/assets/9d0304215c0f96a8f25054d1c2b1e3c44987098c.png',
  },
  {
    text: 'Bayou Buffalo Sauce',
    showPriceCal: true,
    priceCal: '$0.25  ∙  70 Cal',
    showDescription: false,
    image: 'http://localhost:3845/assets/9d0304215c0f96a8f25054d1c2b1e3c44987098c.png',
  },
  {
    text: 'Tartar Sauce',
    showPriceCal: true,
    priceCal: '$0.25  ∙  70 Cal',
    showDescription: false,
    image: 'http://localhost:3845/assets/9d0304215c0f96a8f25054d1c2b1e3c44987098c.png',
  },
  {
    text: 'Cocktail Sauce',
    showPriceCal: true,
    priceCal: '$0.25  ∙  70 Cal',
    showDescription: false,
    image: 'http://localhost:3845/assets/9d0304215c0f96a8f25054d1c2b1e3c44987098c.png',
  },
  {
    text: 'Honey BBQ Wing Sauce',
    description: 'Tangy and sweet, like a good Barbecue should be.',
    showPriceCal: true,
    priceCal: '$0.75  ∙  160 Cal',
    image: 'http://localhost:3845/assets/9d0304215c0f96a8f25054d1c2b1e3c44987098c.png',
  },
  {
    text: 'Sweet N\' Spicy Wing Sauce',
    description: 'Spicy Level: Hot. A sweet and spicy blend of chili, garlic, and ginger.',
    showPriceCal: true,
    priceCal: '$0.75  ∙  160 Cal',
    image: 'http://localhost:3845/assets/9d0304215c0f96a8f25054d1c2b1e3c44987098c.png',
  },
  {
    text: 'Signature Hot Wing Sauce',
    description: 'Nice and spicy with just a dash of Southern sweetness.',
    showPriceCal: true,
    priceCal: '$0.75  ∙  160 Cal',
    image: 'http://localhost:3845/assets/9d0304215c0f96a8f25054d1c2b1e3c44987098c.png',
  },
]

export default function Sauces() {
  return (
    <div id="section-sauces" className="category" data-name="Sauces">
      <SectionCategories text="Sauces" />
      <div className="category-items">
        {saucesItems.map((item, index) => (
          <MenuItems
            key={index}
            text={item.text}
            description={item.description}
            showPriceCal={item.showPriceCal}
            priceCal={item.priceCal}
            showDescription={item.showDescription !== false}
            showBorder={index > 0}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

