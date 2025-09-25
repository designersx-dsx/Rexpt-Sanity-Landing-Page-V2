import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import HeroComponent from '../../Components/LandingSection/HeroComponent/HeroComponent'
import AutomateTab from '../../Components/LandingSection/AutomateTab/AutomateTab'
import NextLevelFeatures from '../../Components/LandingSection/NextLevelFeatures/NextLevelFeatures'
import SliderSection from '../../Components/LandingSection/SliderSection/SliderSection'
import YourAdvantage from '../../Components/LandingSection/YourAdvantage/YourAdvantage'
import ClientsSay from '../../Components/LandingSection/ClientsSay/ClientsSay'
import FaqSection from '../../Components/LandingSection/FaqSection/FaqSection'
const LandingPage = () => {
    return (
        <>
            <Navbar />
            <HeroComponent />
            <AutomateTab />
            <NextLevelFeatures />
            <SliderSection/>
            <YourAdvantage/>
            <ClientsSay/>
            <FaqSection/>

        </>
    )
}

export default LandingPage
