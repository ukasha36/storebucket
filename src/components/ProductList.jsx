import React from 'react'
import { useFilterContext } from '../context/hooks/filterProduct'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const { grid_View, filterProduct } = useFilterContext()
  if (grid_View !== true) {
    return <GridView products={filterProduct} />
  }
  else {
    return <ListView products={filterProduct} />
  }
}

export default ProductList
