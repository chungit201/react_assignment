import React, {useEffect, useState} from 'react'
import { useForm } from 'react-hook-form';
import { addProduct } from '../../api/productApi';
import { ToastContainer, toast } from "react-toastify";
import {getAll} from "../../api/categoriesApi";
const AddProduct = () => {
    const [products, setProducts] = useState([]);
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = async (product) => {
        console.log(product);
        const { data } = await addProduct(product);
        setProducts([...products, data]);
        toast.success("Thêm sản phẩm thành công");
        window.location.href='/admin/list-products';
    }
    useEffect(()=>{
        const getCategories =  async () =>{
            const {data} = await getAll()
        }
    },[])
    return (
        <div className="row container">
            <div className="col-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label" htmlFor="form6Example1">Categories</label>
                                <input type="text" id="form6Example1" className="form-control" {...register('categories')} />

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
                                <input type="text" id="form6Example2" className="form-control" {...register('img')} />

                            </div>
                        </div>
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form6Example5">Introduce</label>
                        <input type="text" id="form6Example5" className="form-control" {...register('introduce')} />

                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form6Example7">Description</label>
                        <textarea className="form-control" id="form6Example7" rows={4} defaultValue={""} {...register('description')} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mb-4">Save</button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct;
