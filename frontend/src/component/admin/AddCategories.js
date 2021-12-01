import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { addCategory } from '../../api/categoriesApi';
const AddCategories = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const [categories, setcategories] = useState([]);
  const onSubmit = async (category) => {
    console.log(category);
    const { data } = await addCategory(category);
    setcategories([...categories, data]);
    toast.success("Thêm sản phẩm thành công");
    window.location.href = '/admin/list-categories';
  
  }
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control {...register('name')} type="text" placeholder="Enter name" />
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
