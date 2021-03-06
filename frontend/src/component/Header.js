import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getCarts } from './ultils.js';

const Header = () => {
  const hanhdleLogout = () => {
    localStorage.removeItem('user');
    sessionStorage.removeItem('token')
  }
  const [account, setAccount] = useState();
  const [totalCart,setTotalCart] = useState(0);
  useEffect(() => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(user);
      if (user != undefined) {
        setAccount(user);
      }
    }
    getTotalCart();
    
  }, []);
  const getTotalCart = async () =>{
    const carts = await getCarts();
    setTotalCart(carts.length)
  }

  return (
    <header id="header">{/*header*/}
      <div className="header_top">{/*header_top*/}
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="contactinfo">
                <ul className="nav nav-pills">
                  <li><a href="#"><i className="fa fa-phone" /> +2 95 01 88 821</a></li>
                  <li><a href="#"><i className="fa fa-envelope" /> info@domain.com</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="social-icons pull-right">
                <ul className="nav navbar-nav">
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                  <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/header_top*/}
      <div className="header-middle">{/*header-middle*/}
        <div className="container">
          <div className="row">
            <div className="col-md-4 clearfix">
              <a href="/">
                <div className="logo">
                  <div className="logo_group">
                    <img className="img_logo"
                      src="https://www.iconpacks.net/icons/2/free-shopping-bag-icon-2041-thumb.png" />
                    <h1>Black</h1><h1 className="active_color">Bee</h1>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-8 clearfix">
              <div className="shop-menu clearfix pull-right">
                <ul className="nav navbar-nav">
                  {account ? (
                    <>
                      <li><a href=""><i className="fa fa-user" /> {account.name || account.jf}</a></li>
                    </>
                  ) : (
                    <li><a href=""><i className="fa fa-user" /> Account</a></li>
                  )}

                  <li><a href=""><i className="fa fa-star" /> Wishlist</a></li>
                  <li><a href="checkout.html"><i className="fa fa-crosshairs" /> Checkout</a></li>
                  <li>
                    <NavLink to="carts">
                      <i className="fa fa-shopping-cart" />   Cart<div className="total-cart"><span>{totalCart}</span></div>
                    
                    </NavLink>
                  </li>
                  {account ? (
                    <>
                      <li><a href="" onClick={hanhdleLogout} className="">Logout</a></li>
                    </>
                  ) : (
                    <li><NavLink to="login"><i className="fa fa-lock" /> Login</NavLink></li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/header-middle*/}
      <div className="header-bottom">{/*header-bottom*/}
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="mainmenu pull-left">
                <ul className="nav navbar-nav collapse navbar-collapse nav_hover">
                  <li><NavLink to="/" className="active">Home</NavLink></li>
                  <li className="dropdown"><a href="#">Shop<i className="fa fa-angle-down" /></a>
                    <ul role="menu" className="sub-menu">
                      <li><NavLink to="products">Products</NavLink></li>
                      <li><a href="product-details.html">Product Details</a></li>
                      <li><a href="checkout.html">Checkout</a></li>
                      <li><a href="cart.html">Cart</a></li>
                      <li><NavLink to="login">Login</NavLink></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a href="#">Blog<i className="fa fa-angle-down" /></a>
                    <ul role="menu" className="sub-menu">
                      <li><a href="blog.html">Blog List</a></li>
                      <li><a href="blog-single.html">Blog Single</a></li>
                    </ul>
                  </li>
                  <li><a href="404.html">404</a></li>
                  <li><a href="contact-us.html">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="search_box pull-right">
                <input type="text" placeholder="Search" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/header-bottom*/}
    </header>
  )
}

export default Header
