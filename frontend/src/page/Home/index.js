import React from 'react'
import Products from '../../component/Products/Products'
import Sidebar from '../../component/Sidebar'
import Slider from '../../component/Slider'

const HomePage = () => {
    return (
        <>
            <Slider></Slider>
            <section>
                <div className="container">
                    <div className="row">
                        <Sidebar></Sidebar>
                        <Products></Products>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage
