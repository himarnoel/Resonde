import React from 'react'
import OurServicesHero from '../components/OurServicesHero'
import ExpertServices from '../components/ExpertServices'
import Testimonials from '../components/Testimonials'
import BecomeVA from '../components/BecomeVA'

const page = () => {
  return (
    <main>
        <OurServicesHero/>
        <ExpertServices/>
        <Testimonials/>
        <BecomeVA/>
    </main>
  )
}

export default page