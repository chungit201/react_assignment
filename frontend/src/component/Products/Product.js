import React from 'react'
import NumberFormat from 'react-number-format'
import { NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Product = ({ product }) => {
  const notify = () => toast.success("Add to cart successfully");
  const handelClick = (e) => {
    console.log(product);
    e.preventDefault();
    let carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
    let quantity = 1;
    carts.push({
      id: product.id,
      name: product.name,
      image: product.img,
      price: product.price,
      quantity: quantity
    })
    if(carts){
      localStorage.setItem('carts',JSON.stringify(carts));
      notify();
    }
  }
  console.log(product);
  return (
    <div className="col-sm-4">
      <ToastContainer />
      <div className="product-image-wrapper">
        <div className="single-products">
          <div className="productinfo text-center">
            <img src={product.img} alt="" />

            <h2 className="price_product"><NumberFormat thousandSeparator={true} thousandsGroupStyle="vnd"
              value={product.price} suffix={' VND'} /></h2>
            <p>{product.name}</p>
            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
          </div>
          <div className="product-overlay">
            <div className="overlay-content">
              <div className="group_view">
                <NavLink to={`products/${product.id}`}><i className="fas fa-eye font_icon"></i>
                  <p><span>view more</span></p>
                </NavLink>
              </div>
              <h2 className="price_hover"><NumberFormat thousandSeparator={true} thousandsGroupStyle="vnd" value={product.price} suffix={' VND'} /></h2>
              <p>{product.name}</p>
              <a onClick={handelClick} href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Product
