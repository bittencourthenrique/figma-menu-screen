import React, { useState, useEffect, useRef } from 'react'
import './TabNavigationMenu.css'

const tabs = [
  'Build Your Own Bundle',
  'Limited Time',
  'Signature Chicken',
  'Sandwiches',
  'Tenders',
  'Bone-In Wings',
  'Boneless Wings',
  'Family Meals',
  'Wraps',
  'Seafood',
  'Sides & Desserts',
  'Drinks',
  'Kids Meal',
  'Sauces',
]

// Mapping between tab names and section IDs
const tabToSectionId = {
  'Build Your Own Bundle': 'section-byob',
  'Limited Time': 'section-lto',
  'Signature Chicken': 'section-signature-chicken',
  'Sandwiches': 'section-sandwiches',
  'Tenders': 'section-tenders',
  'Bone-In Wings': 'section-bone-in',
  'Boneless Wings': 'section-boneless',
  'Family Meals': 'section-family-meals',
  'Wraps': 'section-wraps',
  'Seafood': 'section-seafood',
  'Sides & Desserts': 'section-sides-desserts',
  'Drinks': 'section-drinks',
  'Kids Meal': 'section-kids-meal',
  'Sauces': 'section-sauces',
}

export default function TabNavigationMenu() {
  const [activeTab, setActiveTab] = useState(0)
  const isScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef(null)
  const tabMenuRef = useRef(null)
  const tabButtonRefs = useRef([])

  // Function to scroll tab navigation to show active tab on the left with 3 chars from previous
  const scrollToActiveTab = (index) => {
    if (!tabMenuRef.current || index < 0) return

    if (index === 0) {
      // First tab: scroll to the beginning
      tabMenuRef.current.scrollTo({
        left: 0,
        behavior: 'smooth'
      })
      return
    }

    // Get the previous tab button
    const previousTabButton = tabButtonRefs.current[index - 1]
    if (!previousTabButton) return

    // Get the previous tab's text to measure 3 characters accurately
    const previousTabText = tabs[index - 1]
    const threeCharsText = previousTabText.substring(Math.max(0, previousTabText.length - 3))

    // Calculate the width of 3 characters using the actual text
    // Using a canvas to measure text width accurately
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    context.font = '400 14px ChickenSans'
    const threeCharsWidth = context.measureText(threeCharsText).width

    // Get the position of the previous tab button within the absolutely positioned content
    // offsetLeft gives us the position relative to the parent (tab-navigation-content)
    const previousTabLeft = previousTabButton.offsetLeft
    const previousTabWidth = previousTabButton.offsetWidth

    // Calculate scroll position: previous tab's right edge - 3 characters width
    // This will position the active tab on the left while showing 3 chars from previous
    const scrollPosition = previousTabLeft + previousTabWidth - threeCharsWidth

    tabMenuRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    })
  }

  // Function to determine which section is currently active based on scroll position
  const updateActiveTabFromScroll = () => {
    const headerHeight = 156
    const threshold = headerHeight + 50 // Add small buffer for better UX

    // Find the section that is currently at or just past the header line
    let currentActiveIndex = 0

    // Check from bottom to top to find the section that's currently at the header
    for (let i = tabs.length - 1; i >= 0; i--) {
      const tabName = tabs[i]
      const sectionId = tabToSectionId[tabName]
      if (sectionId) {
        const element = document.getElementById(sectionId)
        if (element) {
          const elementTop = element.getBoundingClientRect().top
          // If the element's top is at or above the threshold, it's the active section
          if (elementTop <= threshold) {
            currentActiveIndex = i
            break
          }
        }
      }
    }

    setActiveTab(currentActiveIndex)
  }

  // Scroll to active tab whenever it changes
  useEffect(() => {
    scrollToActiveTab(activeTab)
  }, [activeTab])

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Only update if not manually scrolling (via tab click)
      if (!isScrollingRef.current) {
        updateActiveTabFromScroll()
      }
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    
    // Initial check on mount
    updateActiveTabFromScroll()

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  const handleTabClick = (index, tabName) => {
    setActiveTab(index)
    isScrollingRef.current = true
    
    const sectionId = tabToSectionId[tabName]
    if (sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        // Calculate offset to account for fixed header (TopView height: 156px)
        const headerHeight = 156
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })

        // Reset the flag after scroll animation completes
        scrollTimeoutRef.current = setTimeout(() => {
          isScrollingRef.current = false
          updateActiveTabFromScroll()
        }, 1000) // Wait for smooth scroll to complete
      }
    }
  }

  return (
    <div ref={tabMenuRef} className="tab-navigation-menu" data-name="Tab Navigation Menu">
      <div className="tab-navigation-content">
        {tabs.map((tab, index) => (
          <button
            key={index}
            ref={(el) => (tabButtonRefs.current[index] = el)}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index, tab)}
            data-name="Tabs Menu"
          >
            <p>{tab}</p>
            <div className={`tab-indicator ${activeTab === index ? 'active' : ''}`}></div>
          </button>
        ))}
      </div>
    </div>
  )
}

