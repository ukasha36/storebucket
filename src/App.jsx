import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './components/Products'
import Contact from './components/Contact'
import SingleProduct from './components/SingleProduct'
import Cart from './components/Cart'
import Error from './components/Error'
import About from './components/About'
import Home from './components/Home';
import { GlobalStyle } from './styles/Global';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
