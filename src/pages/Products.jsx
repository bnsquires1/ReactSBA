import React, { useState } from "react"
import Data from '../data'
import Product from '../components/Product'

export const Products = () => {
    const [products, setProducts] = useState(Data.products)
    return (
        <div className="container">
            <div className="'row row-cols-1 row-cols-md-3 g-4">
            {
                products.map(p => (
                    <Product product = {p} />
                ))
            }
        </div>
        </div>
      )
}
 
