import React from 'react'
import SectionCategories from '../SectionCategories'
import MenuItems from '../MenuItems'
import './Category.css'

const drinksItems = [
  {
    text: 'Premium Lemonade',
    description: 'Features an all-natural classic style lemonade made with cane sugar and real juice',
    image: 'http://localhost:3845/assets/31d384136b5a63397b051ae527e99b286c81c1d1.png',
  },
  {
    text: 'Mango Premium Lemonade',
    description: 'Features a classic style premium lemonade made with real mango.',
    image: 'http://localhost:3845/assets/d0a9d800b493bcde1623ff43a426685fae0afa34.png',
  },
  {
    text: 'Strawberry Premium Lemonade',
    description: 'Features a classic style premium lemonade made with real strawberry.',
    image: 'http://localhost:3845/assets/a882dbd4b751d3438e96e1c1f1c26fb8f0eebefe.png',
  },
  {
    text: 'Small Fountain Drink',
    description: 'Refreshing flavors in a 16oz size, perfect for any mood.',
    image: 'http://localhost:3845/assets/dd1b781e612e074d7d4e0aab44b7420a6ae50fce.png',
  },
  {
    text: 'Regular Fountain Drinks',
    description: 'Refreshing flavors in a 20oz size, perfect for any mood.',
    image: 'http://localhost:3845/assets/dd1b781e612e074d7d4e0aab44b7420a6ae50fce.png',
  },
  {
    text: 'Large Fountain Drinks',
    description: 'Refreshing flavors in a 32oz size, perfect for any mood.',
    image: 'http://localhost:3845/assets/dd1b781e612e074d7d4e0aab44b7420a6ae50fce.png',
  },
  {
    text: 'Gallon Drink',
    description: 'Thirsty? Choose ½ Gallon or Gallon drinks in a variety of refreshing flavors.',
    image: 'http://localhost:3845/assets/395637a4f0da29767e0bc2ad2ea6d832a801e7e8.png',
  },
  {
    text: 'Cane Sweet Iced Tea',
    description: 'Fresh brewed Iced Tea made from a blend of black teas from Asia and South America.',
    image: 'http://localhost:3845/assets/3b7c8e595190dd88b1ef67e4ebe180cf3e8c7598.png',
  },
  {
    text: 'Unsweetened Iced Tea',
    description: 'Fresh brewed Iced Tea made from a blend of black teas from Asia and South America.',
    image: 'http://localhost:3845/assets/3b7c8e595190dd88b1ef67e4ebe180cf3e8c7598.png',
  },
  {
    text: 'Strawberry Tea',
    description: 'Freshly brewed tea infused with the sweet flavor of tropical ripe strawberry.',
    image: 'http://localhost:3845/assets/203a8f1972c6bac256d078387bf45b3973e28d2b.png',
  },
  {
    text: 'Mango Tea',
    description: 'Freshly brewed tea infused with the sweet flavor of tropical mango.',
    image: 'http://localhost:3845/assets/0df1d814c67eff0ca9b007d9634a5312832632b4.png',
  },
  {
    text: 'Bottled Water',
    description: 'Cold and refreshing.',
    image: 'http://localhost:3845/assets/01212f28b8516dbfb1b91306128a146e48075172.png',
  },
]

export default function Drinks() {
  return (
    <div id="section-drinks" className="category" data-name="Drinks">
      <SectionCategories text="Drinks" />
      <div className="category-items">
        {drinksItems.map((item, index) => (
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

