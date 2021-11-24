import React from 'react'
import NumberFormat from 'react-number-format'
import { NavLink } from 'react-router-dom';

const Product = ({product}) => {
  console.log(product);
  return (
    <div className="col-sm-4">
      <div className="product-image-wrapper">
        <div className="single-products">
          <div className="productinfo text-center">
            <img src={product.img} alt=""/>

            <h2 className="price_product"><NumberFormat thousandSeparator={true} thousandsGroupStyle="vnd"
                                                        value={product.price} suffix={' VND'}/></h2>
            <p>{product.name}</p>
            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"/>Add to cart</a>
          </div>
          <div className="product-overlay">
            <div className="overlay-content">
              <div className="group_view">
              <NavLink to={`products/${product.id}`}><i className="fas fa-eye font_icon"></i>
              <p><span>view more</span></p>
              </NavLink>
              </div>
              <h2 className="price_hover"><NumberFormat thousandSeparator={true} thousandsGroupStyle="vnd" value={product.price} suffix={' VND'}/></h2>
              <p>{product.name}</p>
              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"/>Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
