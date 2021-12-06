import React from 'react'

const Pay = (props) => {
    const shipping = 35000
    console.log(props);
    return (
        <section id="do_action">
            <div className="container">
                <div className="heading">
                    <h3>What would you like to do next?</h3>
                    <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="chose_area">
                            <ul className="user_option">
                                <li>
                                    <input type="checkbox" />
                                    <label>Use Coupon Code</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label>Use Gift Voucher</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label>Estimate Shipping &amp; Taxes</label>
                                </li>
                            </ul>
                            <ul className="user_info">
                                <li className="single_field">
                                    <label>Country:</label>
                                    <select>
                                        <option>United States</option>
                                        <option>Bangladesh</option>
                                        <option>UK</option>
                                        <option>India</option>
                                        <option>Pakistan</option>
                                        <option>Ucrane</option>
                                        <option>Canada</option>
                                        <option>Dubai</option>
                                    </select>
                                </li>
                                <li className="single_field">
                                    <label>Region / State:</label>
                                    <select>
                                        <option>Select</option>
                                        <option>Dhaka</option>
                                        <option>London</option>
                                        <option>Dillih</option>
                                        <option>Lahore</option>
                                        <option>Alaska</option>
                                        <option>Canada</option>
                                        <option>Dubai</option>
                                    </select>
                                </li>
                                <li className="single_field zip-field">
                                    <label>Zip Code:</label>
                                    <input type="text" />
                                </li>
                            </ul>
                            <a className="btn btn-default update" href>Get Quotes</a>
                            <a className="btn btn-default check_out" href>Continue</a>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="total_area">
                            <ul>
                                <li>Tổng tiền <span>{props.totalPrice}</span></li>
                                <li>Thuế <span>$0</span></li>
                                <li>Vận chuyển <span>{shipping}</span></li>
                                <li>Tổng thanh toán ({props.sum})<span>{props.totalPrice + shipping}</span></li>

                            </ul>
                            <li style={{listStyle:"none",marginLeft:"10px"}}>
                               
                                <label></label>

                            </li>
                           
                            <a className="btn btn-default update" href="checkout"style={{ background: 'red' }}>Update</a>
                            <a className="btn btn-default check_out" href={`checkout/${props.totalPrice+shipping}`} style={{ background: 'blue' }}>Check Out</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pay
