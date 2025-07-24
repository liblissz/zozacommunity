import React from 'react'
import Hero from '../Componennts/Hero/Hero'
import Features from '../Componennts/Feature/Feature'
import UseCases from '../Componennts/Usecases/Usecases'
import Samples from '../Componennts/Samples/Samples'
import Pricing from '../Componennts/Prising/Prising'
import CTA from '../Componennts/CTA/CTA'

const Homepage = () => {
  return (
    <div>
      <Hero/>
            <Features/>
          <UseCases/>
          <Samples/>
          <Pricing/>
          <CTA/>
    </div>
  )
}

export default Homepage
