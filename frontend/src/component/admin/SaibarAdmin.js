import React from 'react'
import { NavLink } from 'react-router-dom'

const SaibarAdmin = () => {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav_admin">
            <NavLink className="nav-link" to="/admin">
              <span className="icon-bg"><i className="mdi mdi-cube menu-icon" /></span>
              <span className="menu-title"> Dashboard</span>
            </NavLink>
          </li>
          <li className="nav_admin">
            <NavLink className="nav-link" to="list-products">
              <span className="icon-bg"><i className="mdi mdi-cube menu-icon" /></span>
              <span className="menu-title"> Products</span>
            </NavLink>
          </li>
          <li className="nav_admin">
          <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-controls="ui-basic">
          <span className="icon-bg"><i className="mdi mdi-contacts menu-icon" /></span>
              <span className="menu-title"> Users</span>
              <i className="menu-arrow" />
            </a>
          </li>
          <li className="nav_admin">
            <NavLink className="nav-link" to="list-categories">
              <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon" /></span>
              <span className="menu-title"> Categories</span>
            </NavLink>
          </li>
          <li className="nav_admin">
            <a className="nav-link" href="pages/charts/chartjs.html">
              <span className="icon-bg"><i className="mdi mdi-chart-bar menu-icon" /></span>
              <span className="menu-title">Charts</span>
            </a>
          </li>
          <li className="nav_admin">
            <a className="nav-link" href="pages/tables/basic-table.html">
              <span className="icon-bg"><i className="mdi mdi-table-large menu-icon" /></span>
              <span className="menu-title">Tables</span>
            </a>
          </li>
          <li className="nav_admin">
            <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
              <span className="icon-bg"><i className="mdi mdi-lock menu-icon" /></span>
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow" />
            </a>
          </li><hr/>
          <li className="nav_admin sidebar-user-actions">
            <div className="sidebar-user-menu">
              <a href="#" className="nav-link"><i className="mdi mdi-settings menu-icon" />
                <span className="menu-title">Settings</span>
              </a>
            </div>
          </li>
          <li className="nav_admin sidebar-user-actions">
            <div className="sidebar-user-menu">
              <a href="#" className="nav-link"><i className="mdi mdi-speedometer menu-icon" />
                <span className="menu-title">Take Tour</span></a>
            </div>
          </li>
          <li className="nav_admin sidebar-user-actions">
            <div className="sidebar-user-menu">
              <a href="#" className="nav-link"><i className="mdi mdi-logout menu-icon" />
                <span className="menu-title">Log Out</span></a>
            </div>
          </li>
        </ul>
      </nav>
    )
}

export default SaibarAdmin
