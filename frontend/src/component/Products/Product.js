import React from 'react'
import NumberFormat from 'react-number-format'
const Product = ({product}) => {
   console.log(product);
    return (
        <div className="col-sm-4">
        <div className="product-image-wrapper">
          <div className="single-products">
            <div className="productinfo text-center">
              <img src={product.img} alt="" />
              
              <h2 className="price_product" ><NumberFormat  thousandSeparator={true} thousandsGroupStyle="vnd" value={product.price } suffix={' VND'}  /></h2>
              <p>{product.name}</p>
              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
            </div>
            <div className="product-overlay">
              <div className="overlay-content">
              <h2 className="price_hover" ><NumberFormat  thousandSeparator={true} thousandsGroupStyle="vnd" value={product.price } suffix={' VND'}  /></h2>
                <p>{product.name}</p>
                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Product
