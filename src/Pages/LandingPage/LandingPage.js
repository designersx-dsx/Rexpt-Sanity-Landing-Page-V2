import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import HeroComponent from '../../Components/LandingSection/HeroComponent/HeroComponent'
import AutomateTab from '../../Components/LandingSection/AutomateTab/AutomateTab'
import NextLevelFeatures from '../../Components/LandingSection/NextLevelFeatures/NextLevelFeatures'
import SliderSection from '../../Components/LandingSection/SliderSection/SliderSection'
import YourAdvantage from '../../Components/LandingSection/YourAdvantage/YourAdvantage'
const LandingPage = () => {
    return (
        <>
            <Navbar />
            <HeroComponent />
            <AutomateTab />
            <NextLevelFeatures />
            <SliderSection/>
            <YourAdvantage/>

        </>
    )
}

export default LandingPage
