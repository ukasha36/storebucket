import React from 'react'
import { useProductContext } from '../context/hooks/productContext';
import HeroSection from './HeroSection'

const About = () => {
  const data = {
    name: "Syed's store",
  };
  return (
    <>
    
      <HeroSection myData={data} />
    </>
  )
}

export default About
