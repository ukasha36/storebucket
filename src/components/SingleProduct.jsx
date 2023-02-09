import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const params = useParams();
    console.log(params)
  return (
    <div>
      this is page{params.id}
    </div>
  )
}

export default SingleProduct
