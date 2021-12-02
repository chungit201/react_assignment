import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { getAll } from '../api/categoriesApi';

const Sidebar = () => {
  const [category, setCategory] = useState();
  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await getAll();
        setCategory(data);
        console.log(category);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
    
  }, []);
  return (
    <div className="col-sm-3">
      <div className="left-sidebar">
        <h2>Category</h2>
        <div className="panel-group category-products" id="accordian">{/*category-productsr*/}
        {category && (category.results.map(item=>{
             return   <div className="panel panel-default">
                <div className="panel-heading ">
                  <h4 className="panel-title text_ct"><NavLink to={`/categories/${item.id}`}>{item.name}</NavLink></h4>
                </div>
              </div>
        }))}
         
        </div>{/*/category-products*/}
        <div className="brands_products">{/*brands_products*/}
          <h2>Brands</h2>
          <div className="brands-name">
            <ul className="nav nav-pills nav-stacked">
              <li><a href="#"> <span className="pull-right">(50)</span>Acne</a></li>
              <li><a href="#"> <span className="pull-right">(56)</span>Grüne Erde</a></li>
              <li><a href="#"> <span className="pull-right">(27)</span>Albiro</a></li>
              <li><a href="#"> <span className="pull-right">(32)</span>Ronhill</a></li>
              <li><a href="#"> <span className="pull-right">(5)</span>Oddmolly</a></li>
              <li><a href="#"> <span className="pull-right">(9)</span>Boudestijn</a></li>
              <li><a href="#"> <span className="pull-right">(4)</span>Rösch creative culture</a></li>
            </ul>
          </div>
        </div>{/*/brands_products*/}
        <div className="price-range">{/*price-range*/}
          <h2>Price Range</h2>
          <div className="well text-center">
            <input type="text" className="span2" defaultValue data-slider-min={0} data-slider-max={600} data-slider-step={5} data-slider-value="[250,450]" id="sl2" /><br />
            <b className="pull-left">$ 0</b> <b className="pull-right">$ 600</b>
          </div>
        </div>{/*/price-range*/}
        <div className="shipping text-center">{/*shipping*/}
          <img src="images/home/shipping.jpg" alt="" />
        </div>{/*/shipping*/}
      </div>
    </div>
  )
}

export default Sidebar
