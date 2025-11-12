import React from 'react'
import BYOB from './categories/BYOB'
import LTO from './categories/LTO'
import SignatureChicken from './categories/SignatureChicken'
import Sandwiches from './categories/Sandwiches'
import Tenders from './categories/Tenders'
import BoneIn from './categories/BoneIn'
import Boneless from './categories/Boneless'
import GroupMeals from './categories/GroupMeals'
import Wraps from './categories/Wraps'
import Seafood from './categories/Seafood'
import SidesDesserts from './categories/SidesDesserts'
import Drinks from './categories/Drinks'
import KidsMeal from './categories/KidsMeal'
import Sauces from './categories/Sauces'
import './MenuCategories.css'

export default function MenuCategories() {
  return (
    <div className="menu-categories" data-name="Menu Categories">
      <BYOB />
      <LTO />
      <SignatureChicken />
      <Sandwiches />
      <Tenders />
      <BoneIn />
      <Boneless />
      <GroupMeals />
      <Wraps />
      <Seafood />
      <SidesDesserts />
      <Drinks />
      <KidsMeal />
      <Sauces />
    </div>
  )
}

