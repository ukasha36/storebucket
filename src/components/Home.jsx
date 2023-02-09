import React from "react";
import { useProductContext } from "../context/hooks/productContext";
import FeatureProduct from "./FeatureProduct";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Trusted from "./Trusted";

const Home = () => {

  const data = {
    name: "Syed's store",
  };

  return <>
    <HeroSection myData={data} />;
    <FeatureProduct />
    <Services />
    <Trusted />
  </>
};

export default Home;