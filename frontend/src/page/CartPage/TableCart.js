import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { getCarts } from '../../component/ultils.js';
import Pay from './Pay.js';
const TableCart = () => {
    let total = 0
    const [totalPrice, setTotalPrice] = useState();
    const [totalProduct,setTotalProduct] = useState(0)
    const [carts, setCarts] = useState();
    useEffect(() => {
        getAll();
    }, [])
    const getAll = async () => {
        const data = await getCarts();
        setTotalProduct(data.length)
        data.map(item=>{
            console.log(item.price);
            setTotalPrice(total+=item.price)
            console.log();
        })
        setCarts(data);
    }
    const handelRemove = async(id)=>{
        console.log(id);
        const newCart = carts.filter(item => item.id !== id);
        localStorage.setItem('carts', JSON.stringify(newCart))
        window.location.reload();
    }
    return (
        <>
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Số tiền</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>

                {carts && (carts.map((item, index = 1) => {
                    
                    index++
                    return <tr>
                        <td>
                            {index}
                        </td>
                        <td>
                            <a href="">{item.name}</a>
                            <img src={item.image} />
                        </td>
                        <td>{item.price}</td>
                        <td><input type="number" defaultValue={item.quantity} min={1} max={100}></input></td>
                        <td>{item.price * item.quantity}</td>
                        <td><i onClick={()=>handelRemove(item.id)} class="fas fa-trash"></i></td>
                    </tr>
                }))}

            </tbody>
        </Table>
        <Pay totalPrice= {totalPrice} sum={totalProduct} ></Pay>
        </>
        
    )
}

export default TableCart
