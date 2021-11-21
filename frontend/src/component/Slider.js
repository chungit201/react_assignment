import React from 'react'

const Slider = () => {
    return (
        <div className=" container">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://bizweb.dktcdn.net/100/438/408/themes/839420/assets/slider_4.jpg?1637476696414" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang_113858538.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://tmluxury.vn/wp-content/uploads/banner-do-shop-thoi-trang-nam-tphcm-tmluxury.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        </div>
    )
}

export default Slider
