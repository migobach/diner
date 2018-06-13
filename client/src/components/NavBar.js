import React, { Fragment } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const NavBar = () => (
  <Fragment>
    <NavLink to="/">Home</NavLink>
    {'   '}
    <NavLink to="/menus">Menus</NavLink>
  </Fragment>
)
export default withRouter(NavBar)