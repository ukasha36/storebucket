import React, { useEffect } from 'react'
import { useProductContext } from '../context/hooks/productContext';
import HeroSection from './HeroSection'

const About = () => {
  useEffect(() => {
    document.title = "About"
  }, [])
  const data = {
    name: "Your store",
  };
  return (
    <>

      <HeroSection myData={data} />
    </>
  )
}

export default About
