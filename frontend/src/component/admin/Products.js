import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { getAll, remove } from '../../api/productApi'
import { toast } from "react-toastify";

const ListProductPage = () => {
  const [products, setProducts] = useState();
  const [status, setStatus] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getAll();
        // console.log(data);
        setProducts(data);
      } catch (error) {
        window.location.href = '/err-500'
      }
    }
    getProducts();
  }, []);

  const onRemove = async (id) => {
    try {
      console.log(id);
      const { data } = await remove(id).then(() => {
        window.location.reload();
        const newProducts = products.filter((item) => item.id !== data.id);
        setProducts(newProducts);
   
      })
      // toast.success("Remove Item Successfully");
    } catch (error) {
      // toast.error(error.response.data);
    }
  };
  return (
        <div>
            <NavLink to="/admin/add-products" className="btn btn-primary">+ Add product</NavLink><br/><br/>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
              <th scope="col" colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {products && (products.results.map((item, index = 1) => (
              <tr>
                <th scope="row">{index++}</th>
                <td>{item.name}</td>
                <td><img src={item.img} width={'100px'} /></td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <a href="" className="icon_manage"><i style={{ color: 'blue' }} className="fas fa-edit" /></a>
                  <button className="fas fa-trash-alt icon_manage" onClick={() => onRemove(item.id)}></button>
                </td>
              </tr>
            )))}
          </tbody>
        </table>
        </div>
  
  )
}

export default ListProductPage;