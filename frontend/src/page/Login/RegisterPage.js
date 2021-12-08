import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Input } from "antd";
import { signup } from '../../api/authApi';
import { toast, ToastContainer } from 'react-toastify';
const RegisterPage = () => {
    const notify = () => toast.success("Resgister successfully");
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            name:username,
            email:email,
            password:password
        };
        const {data} = await signup(user);
        if(data){
            notify()
        }
    }
    return (
        <section className="ftco-section">
            <ToastContainer />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-10 mg_left">
                        <div className="wrap d-md-flex">

                            <div className="login-wrap p-4 p-lg-5">
                                <div className="d-flex">
                                    <div className="w-100">
                                        <h3 className="mb-4">Sign Up</h3>
                                    </div>
                                    <div className="w-100">
                                        <p className="social-media d-flex justify-content-end">
                                            <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span
                                                className="fa fa-facebook" /></a>
                                            <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span
                                                className="fa fa-twitter" /></a>
                                        </p>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit} className="signin-form">
                                    <div className="form-group mb-3">
                                        <label className="label" htmlFor="name">Username</label>
                                        <Input
                                            onChange={e => {
                                                setUsername(e.target.value)
                                            }}
                                            type="text"
                                            className="form-control"
                                            placeholder="Username"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="label" htmlFor="name">Email</label>
                                        <Input
                                            onChange={e => {
                                                setEmail(e.target.value)
                                            }}
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="label" htmlFor="password">Password</label>
                                        <Input
                                            onChange={e => {
                                                setPassword(e.target.value)
                                            }}
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="label" htmlFor="password">Password Confirm</label>
                                        <Input
                                            onChange={e => {
                                                setPasswordConfirm(e.target.value)
                                            }}
                                            type="password"
                                            className="form-control"
                                            placeholder="Password Confirm"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="form-control btn_login submit px-3">Sign Up</button>
                                    </div>
                                    <div className="form-group">
                                    </div>
                                    <div className="form-group d-md-flex">
                                        <div className="w-50 text-left">
                                            <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                                                <input type="checkbox" defaultChecked />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <div className="w-50 text-md-right">
                                            <a href="#">Forgot Password</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                                <div className="text w-100">
                                    <h2>Welcome to login</h2>
                                    <p>You have an account?</p>
                                    <a href="login" className="btn btn-white btn-outline-white">Sign In</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterPage
