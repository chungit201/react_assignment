import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { getAll, remove } from '../../api/categoriesApi';
import { Table } from "react-bootstrap";
const CategoriesAmin = () => {
  const [category, setCategory] = useState();
  const onRemove = async (id) => {
    try {
      console.log(id);
      const { data } = await remove(id).then(() => {
        window.location.reload();
        const newCate = category.filter((item) => item.id !== data.id);
        setCategory(newCate);
      })
      // toast.success("Remove Item Successfully");
    } catch (error) {
      // toast.error(error.response.data);
    }
  };
  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await getAll();
        setCategory(data)
      } catch (err) {

      }
    };
    getCategory();
  }, [])
  console.log(category);
  return (
    <div>
      <NavLink className="btn btn-primary" to="/admin/addCategory">+Add categories </NavLink>
      <p></p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th colSpan="2">Acctions</th>
          </tr>
        </thead>
        <tbody>
            {category && (category.results.map((item, index = 1) => (
              <tr>
                <th scope="row">{index++}</th>
                <td>{item.name}</td>
                <td>
                  <a href="" className="icon_manage"><i style={{ color: 'blue' }} className="fas fa-edit" /></a>
                  <button className="fas fa-trash-alt icon_manage" onClick={() => onRemove(item.id)}></button>
                </td>
              </tr>
            )))}
          </tbody>
      </Table>
    </div>
  )
}

export default CategoriesAmin
