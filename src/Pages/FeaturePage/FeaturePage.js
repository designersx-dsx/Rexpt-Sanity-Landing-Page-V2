import React from 'react'
import HeroBar from '../../Components/HeroBar/HeroBar'
import Navbar from '../../Components/Navbar/Navbar'
import SmarterReception from '../../Components/FeatureSection/SmarterReception/SmarterReception'
import TabSection from '../../Components/FeatureSection/TabSection/TabSection'

const FeaturePage = () => {
  return (
    <div>
      <Navbar />
      <HeroBar title='Powerful Features for Smarter Reception' subtitle="Everything you need to automate, engage, and delight your customers with AI." />
      <SmarterReception/> 
      <TabSection/>
    </div>
  )
}

export default FeaturePage
