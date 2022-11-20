import React from 'react'
import Section from './Section'
import './home.css'

function Home() {
  return (
    <div className='home'>
        <Section 
          title="Model S"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-s.jpg"
          topBtn="Custom Order"
          bottomBtn="Existing inventory"
        />
        <Section 
         title="Model Y"
         description="Order Online for Touchless Delivery"
         backgroundImg="model-y.jpg"
         topBtn="Custom Order"
         bottomBtn="Existing inventory"/>

        <Section 
         title="Model X"
         description="Order Online for Touchless Delivery"
         backgroundImg="model-x.jpg"
         topBtn="Custom Order"
         bottomBtn="Existing inventory"/>

        <Section 
         title="Model 3"
         description="Order Online for Touchless Delivery"
         backgroundImg="model-3.jpg"
         topBtn="Custom Order"
         bottomBtn="Existing inventory"/>
    </div>
  )
}

export default Home
