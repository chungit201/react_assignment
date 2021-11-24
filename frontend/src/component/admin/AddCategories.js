import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { addCategory } from '../../api/categoriesApi';
const AddCategories = () => {
  const [category, setcategory] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(category);
    const { data } = await addCategory(category)
    setcategory([...category, data]);
    toast.success("Thêm sản phẩm thành công");
    window.location.href = '/admin/list-categories'
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={e => {
            setcategory(e.target.value);
          }} type="text" placeholder="Enter name" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AddCategories
