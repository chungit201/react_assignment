import React, { useEffect, useState } from 'react'
import { getAll } from '../../api/productApi';
import Sidebar from '../../component/Sidebar'
import Products from './ProductsCategory';


const CategoryProductPage = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        const getProducts = async () => {
          try {
            const { data } = await getAll();
            console.log(data);
            setProducts(data);
          } catch (error) {
            window.location.href= '/err-500';
          }
        }
        getProducts();
      }, [])
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
                       <Products products={products}></Products>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CategoryProductPage
