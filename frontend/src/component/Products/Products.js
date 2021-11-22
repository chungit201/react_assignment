import React from 'react'
import Product from './Product'

const Products = ({products}) => {
  console.log(products);
  console.log();
    return (
        <div className="col-sm-9 padding-right">
        <div className="features_items">{/*features_items*/}
          <h2 className="title text-center">Features Items</h2>
          {products && ( products.results.map((item) => (
                      <Product product={item}/>
                    )))}
        </div>
      </div>
    )
}

export default Products
