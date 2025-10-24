import React from 'react'
import HeroBar from '../../Components/HeroBar/HeroBar'
import Navbar from '../../Components/Navbar/Navbar'
import SmarterReception from '../../Components/FeatureSection/SmarterReception/SmarterReception'
import TabSection from '../../Components/FeatureSection/TabSection/TabSection'
import CuttingEdge from '../../Components/FeatureSection/CuttingEdge/CuttingEdge'
import PreCallFeature from '../../Components/FeatureSection/PreCallFeature/PreCallFeature'
import PostCallFeature from '../../Components/FeatureSection/PostCallFeature/PostCallFeature'
import CustomerExperience from '../../Components/LandingSection/CustomerExperience/CustomerExperience'
import Footer from '../../Components/Footer/Footer'
import InCallFeature from '../../Components/FeatureSection/InCallFeature/InCallFeature'
const FeaturePage = () => {
  return (
    <div>
      <Navbar />
      <HeroBar title='Powerful Features for Smarter Reception' subtitle="Everything you need to automate, engage, and delight your customers with AI." />
      <SmarterReception />
      <TabSection />
      <InCallFeature/>
      <PostCallFeature />
      <CuttingEdge />
      <PreCallFeature />
      <CustomerExperience />
      <Footer />
    </div>
  )
}

export default FeaturePage

