import React from 'react'
import Sidebar from '../../component/Sidebar'
import ProductShop from './ProductShop'

const ProductPage = () => {
    return (
        <div>
            <section id="advertisement">
                <div class="container">
                    <img src="images/shop/advertisement.jpg" alt="" />
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <Sidebar></Sidebar>
                        <ProductShop></ProductShop>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ProductPage
