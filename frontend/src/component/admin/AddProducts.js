import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { addProduct } from '../../api/productApi';
import { getAll } from "../../api/categoriesApi";
import { Form } from 'react-bootstrap';
import { storage } from '../../firebase/firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const notify = () => toast.success("Add products success fully!");
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState();
  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await getAll();
        setCategory(data);

      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (product) => {
    notify();
    // console.log(product.img[0]);
    // const image = product.img[0];
    // const ref = storage.ref(`images/${image.name}`);
    // const upload = ref.put(image);
    // upload.on(
    //   "state_changed",
    //   snapshot => { },
    //   error => {
    //     console.log(error);
    //   }, () => {
    //     storage.ref('images')
    //       .child(image.name)
    //       .getDownloadURL()
    //       .then(async (url) => {
    //         const dataProduct = {
    //           name: product.name,
    //           price: product.price,
    //           img: url,
    //           description: product.description,
    //           quantity: product.quantity
    //         }
    //         const { data } = await addProduct(dataProduct);
    //         notify();
    //         window.location.href='/admin/list-products'
    //         console.log(dataProduct);
    //       })
    //   }
    // )
  }
  return (
    <div className="row container">
      <div className="col-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 2 column grid layout with text inputs for the first and last names */}
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <label className="form-label" htmlFor="form6Example1">Categories</label>
                {/* <select type="text" id="form6Example1" className="form-control" {...register('categories')} /> */}
                <Form.Select aria-label="Default select example" size="lg">
                  {category && (category.results.map(item => {
                    return <option  {...register('categories')} value={item.id}>{item.name}</option>
                  }))}
                </Form.Select>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <label className="form-label" htmlFor="form6Example2">Product name</label>
                <input type="text" id="form6Example2" className="form-control"  {...register('name')} />

              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <label className="form-label" htmlFor="form6Example1">Price</label>
                <input type="number" id="form6Example1" className="form-control"  {...register('price')} />

              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <label className="form-label" htmlFor="form6Example2">Image</label>
                <input type="file" id="form6Example2" className="form-control" {...register('img')} />

              </div>
            </div>
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form6Example5">Quantity</label>
            <input type="number" id="form6Example5" className="form-control" {...register('quantity')} />

          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form6Example7">Description</label>
            <textarea className="form-control" id="form6Example7" rows={4} defaultValue={""} {...register('description')} />
          </div>
          <button type="submit" className="btn btn-primary btn-block mb-4">Save</button>
          <ToastContainer 
          />
        </form>
      </div>
    </div>
  )
}

export default AddProduct;
