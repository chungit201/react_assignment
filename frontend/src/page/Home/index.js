import React, { useEffect, useState } from 'react'
import { getAll } from '../../api/productApi'
import Blogs from '../../component/Blog/Blogs'
import Products from '../../component/Products/Products'
import Sidebar from '../../component/Sidebar'
import Slider from '../../component/Slider'

const HomePage = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        const getProducts = async () => {
          try {
            const { data } = await getAll();
            setProducts(data);
          } catch (error) {
            window.location.href= '/err-500';
          }
        }
        getProducts();
      }, [])
    return (
        <>
            <Slider></Slider>
            <section>
                <div className="container">
                    <div className="row">
                        <Sidebar></Sidebar>
                        <Products products = {products}></Products>
                        <div className="col-3"></div>
                        <div className="col-9">
                          <Blogs></Blogs>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage
