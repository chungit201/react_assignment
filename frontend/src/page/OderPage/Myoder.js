import React, { useEffect, useState } from 'react'
import { getAllOder } from '../../api/oderApi';
import { Table, Container } from 'react-bootstrap'
const Myoder = () => {
    const [oder, setOder] = useState();
    useEffect(() => {
        getAll()
    }, []);
    const getAll = async () => {
        const { data } = await getAllOder();
        console.log(data);
        setOder(data)
    }
    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Đơn hàng của bạn</h2>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên khách hàng</th>
                            <th>Địa chỉ</th>
                            <th>Sản phẩm</th>
                            <th>Ghi chú</th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>

                        {oder && (oder.results.map((item,index=1) => {
                            return  <tr>
                                {index++}
                                <td>{item.name}</td>
                                <td>{item.adress}</td>
                                <td>Thitornton</td>
                                <td>{item.note}</td>
                                <td>{item.status}</td>
                            </tr>
                        }))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default Myoder
