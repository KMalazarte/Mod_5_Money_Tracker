import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


const Nav = ({ user: { loggedIn }, location: { pathname } }) => {

  const handleLogout = (e) => {
    localStorage.clear()
    window.location.replace('http://localhost:3001/login')
  }

  return (
    <Menu pointing secondary>
      {loggedIn ? (
        <Fragment>
          <Menu.Item as={NavLink} to="/profile" name="Profile" active={pathname === '/profile'} />
          <Menu.Menu position="right">
            {/* TODO: logout */}
           <Menu.Item as={NavLink} to="/logout" name="Logout" onClick={handleLogout} />
          </Menu.Menu>
        </Fragment>
      ) : (
        <Menu.Item as={NavLink} to="/login" name="Login" active={pathname === '/login'} />
      )}
    </Menu>
  )
}

const mapStateToProps = ({ usersReducer: user }) => ({ user })

export default withRouter(connect(mapStateToProps)(Nav))
