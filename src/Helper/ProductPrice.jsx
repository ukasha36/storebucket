import React from 'react'

const ProductPrice = ({price}) => {
  return Intl.NumberFormat('en-PK',{
    style:'currency',
    currency:"PKR",
    maximumFractionDigits:2
  }).format(price/100)
}

export default ProductPrice
