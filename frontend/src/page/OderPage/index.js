import React, { useEffect, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import NumberFormat from 'react-number-format';
import { useParams } from 'react-router';
import { addOder } from '../../api/oderApi.jsx';
import { sendOne } from '../../api/push-notification.jsx';
import { getCarts } from '../../component/ultils.js';
const OderPage = () => {
    const { price } = useParams();
    console.log(price);
    const [carts, setCarts] = useState();
    const [name, setName] = useState();
    const [adress, setAdress] = useState();
    const [numberPhone, setNumberPhone] = useState();
    const [note, setNote] = useState();
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        getOders();
        if (!sessionStorage.getItem('token')) {
            alert("Vui lòng đăng nhập")
            window.location.href = '/login'
        }
    }, [])
    const getOders = async () => {
        const data = await getCarts();
        console.log(data);
        setCarts(data)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const oders = {
            name: name,
            user: user.id,
            adress: adress,
            phone: numberPhone,
            note: note,
            products: carts
        };
        const { data } = await addOder(oders)
        console.log(data);
        if (data) {
            const notification = {
                "title": "BlackBee",
                "body": "Đã có thêm một đơn hàng mới",
                "click_action": "http://localhost:3000/admin/list-oders",
                "icon": "https://northstudio.dev/img/others/img-18.png",
                "to": "eSTEqpubcsnTHLGD8Ymbbr:APA91bGJBlpNWM8-64u0Ma4CnD_7FwNZrHj39iGdNDz2zxJU0ffsG-PB5MpuY7QuD7JmRiHqHlEZPq0AUlpfpNNbemHcNU6BxD2M2Fk4KJoMmfWxypi_VFbyglzJ1qjV-QAVMatzlMT0"
            }
            const push = await sendOne(notification);
            console.log(push);
            window.location.href = '/oder'
        }
    }
    return (
        <div className="checkout">
            <section id="advertisement">
                <div class="container">
                    <img src="images/shop/advertisement.jpg" alt="" />
                </div>
            </section>
            <Container>
                <Form onSubmit={handleSubmit} >
                    <div className="row">
                        <div className="col-6">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Họ và tên</Form.Label>
                                <Form.Control type="text" placeholder="Enter adress"
                                    onChange={e => {
                                        setName(e.target.value)
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Địa chỉ</Form.Label>
                                <Form.Control type="text" placeholder="Enter adress"
                                    onChange={e => {
                                        setAdress(e.target.value)
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Số điện thoại</Form.Label>
                                <Form.Control type="text" placeholder="Enter phone"
                                    onChange={e => {
                                        setNumberPhone(e.target.value)
                                    }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label> Lời nhắc</Form.Label>
                                <Form.Control type="text" placeholder="Enter note"
                                    onChange={e => {
                                        setNote(e.target.value)
                                    }} />
                            </Form.Group>

                        </div>
                        <div className="col-6">


                            <ul>
                                <li>
                                    <span className="" style={{ fontSize: "13px" }}>Thanh toán khi nhận hàng</span>
                                    <a href="" style={{ fontSize: "13px" }}> Thay đổi</a>
                                </li>
                                <li>
                                    <label>Tổng tiền hàng:</label>
                                    <NumberFormat thousandSeparator={true} thousandsGroupStyle="vnd" style={{ fontSize: "16px", marginLeft: "10px", color: "red" }} value={price} suffix={' VND'} />
                                    {/* <span style={{ fontSize: "16px",marginLeft:"10px",color:"red"}}>{price}</span> */}
                                </li>
                                <li><Button type="submit" variant="danger">Đặt hàng</Button></li>
                            </ul>
                        </div>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default OderPage
