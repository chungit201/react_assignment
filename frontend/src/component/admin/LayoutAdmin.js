import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarAdmin from './NavbarAdmin'
import SaibarAdmin from './SaibarAdmin'
const LayoutAdmin = () => {
  
  return (
    <div className="container-scroller">
      <NavbarAdmin/>
    <div className="container-fluid page-body-wrapper">
    <SaibarAdmin/>
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="d-xl-flex justify-content-between align-items-start">
            <h2 className="text-dark font-weight-bold mb-2"> Overview dashboard </h2>
            <div className="d-sm-flex justify-content-xl-between align-items-center mb-2">
              <div className="btn-group bg-white p-3" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-link text-light py-0 border-right">7 Days</button>
                <button type="button" className="btn btn-link text-dark py-0 border-right">1 Month</button>
                <button type="button" className="btn btn-link text-light py-0">3 Month</button>
              </div>
              <div className="dropdown ml-0 ml-md-4 mt-2 mt-lg-0">
                <button className="btn bg-white dropdown-toggle p-3 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-calendar mr-1" />24 Mar 2019 - 24 Mar 2019 </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton1">
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
            
            <Outlet></Outlet>
            </div>
          </div>
        </div>
        {/* content-wrapper ends */}
        {/* partial:partials/_footer.html */}
        <footer className="footer">
          <div className="footer-inner-wraper">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © bootstrapdash.com 2020</span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Free <a href="https://www.bootstrapdash.com/" target="_blank">Bootstrap dashboard templates</a> from Bootstrapdash.com</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
  )
}

export default LayoutAdmin
