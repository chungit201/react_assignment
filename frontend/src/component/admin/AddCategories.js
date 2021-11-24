import React, { useEffect, useState } from 'react'
import {Form ,Button} from 'react-bootstrap'
import { addCategory } from '../../api/categoriesApi';
const AddCategories = () => {
  const [category,setcategory] = useState();
  const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log(category);
    const {data} = await addCategory(category).then(res=>{
      console.log(res);
    })

  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={e =>{
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
