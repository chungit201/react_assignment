import React from 'react'
import Pay from './Pay'
import TableCart from './TableCart'

const CartPage = () => {
    return (
        <section id="cart_items">
            <div className="container">
                <div className="breadcrumbs">
                    <ol className="breadcrumb">
                        <li><a href="#">Home</a></li>
                        <li className="active">Shopping Cart</li>
                    </ol>
                </div>
                <TableCart></TableCart>
                
            </div>
        </section>
    )
}

export default CartPage
