import React from 'react'
import './SectionCategories.css'

export default function SectionCategories({ text = 'Limited Time' }) {
  return (
    <div className="section-categories" data-name="Section Categories">
      <p>{text}</p>
    </div>
  )
}

