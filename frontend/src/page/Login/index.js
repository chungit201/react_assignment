import React from 'react'
import { useForm } from 'react-hook-form';
import { signin } from '../../api/authApi';
import BtnLogin from '../../component/BtnLogin'

const LoginPage = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit =  async(user) => {
    console.log(user);
    const {data} = await signin(user)
        console.log(data);
        // if (data) {
        //   const {user,tokens} = data;
        //   if(user,tokens){
        //     localStorage.setItem('user', JSON.stringify(user));
        //     sessionStorage.setItem('token', JSON.stringify(tokens.access.token));
        //      window.location.href = '/';
        //   }
         
        // }
  }
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10 mg_left">
            <div className="wrap d-md-flex">
              <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                <div className="text w-100">
                  <h2>Welcome to login</h2>
                  <p>Don't have an account?</p>
                  <a href="#" className="btn btn-white btn-outline-white">Sign Up</a>
                </div>
              </div>
              <div className="login-wrap p-4 p-lg-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Sign In</h3>
                  </div>
                  <div className="w-100">
                    <p className="social-media d-flex justify-content-end">
                      <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook" /></a>
                      <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter" /></a>
                    </p>
                  </div>
                </div>
                <form className="signin-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group mb-3">
                    <label className="label" htmlFor="name">Username</label>
                    <input type="text" className="form-control" placeholder="Email" {...register('email')} required />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label" htmlFor="password">Password</label>
                    <input type="password" className="form-control" placeholder="Password" {...register('password', {required: true})} required />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="form-control btn_login submit px-3">Sign In</button>
                  </div>
                  <div className="form-group">
                     <BtnLogin></BtnLogin>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
