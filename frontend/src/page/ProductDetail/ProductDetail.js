import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { useParams } from "react-router-dom";
import { get } from '../../api/productApi';
import { Button } from 'react-bootstrap';
import Sidebar from '../../component/Sidebar';

const ProductDetail = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await get(id);
        setProduct(data);
      } catch (error) {
        //window.location.href= '/err-500';
      }
    }
    getProduct();
  }, []);
  return (
    <div className="container box_detail">
      <div className="row">
        <Sidebar></Sidebar>
        <div className="col-3">
          <img className="img_detail" src={product && product.img} />
        </div>
        <div className="col-6">
          <div className="introduct">
            <h2>{product && product.name}</h2>
            <h3 className="price"><NumberFormat thousandSeparator={true} thousandsGroupStyle="vnd"
              value={product && product.price} suffix={' VND'} /></h3>
            <span>Hướng dẫn chọn size:</span>
            <div className="list-size">
              <a href="" className="nofollow">M</a>
              <a href="" className="nofollow">L</a>
              <a href="" className="nofollow">XL</a>
              <div className="quantity">
                <p>Số lượng :</p>
                <input className="ip_quantity" type="number" defaultValue={1} />
              </div>
            </div>

            <p className="description">{product && product.description}</p>

            <div className="group_btn">
              <Button variant="outline-danger">Thêm vào giỏ hàng</Button>{' '}
              <Button variant="outline-dark" >Mua ngay</Button>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductDetail;
