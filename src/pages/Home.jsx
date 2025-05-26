import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Category from '../components/Category'
import Offer from '../components/Offer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Category/>
        <BestSeller/>
        <Offer/>
        <LatestCollection/>
        <OurPolicy/>
        <NewsletterBox/>
    </div>
  )
}

export default Home