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
    <Menu pointing secondary >
      {loggedIn ? (
        <Fragment>
          <Menu.Item as={NavLink} to="/profile" name="Profile" active={pathname === '/profile'} />

          <img src='https://fontmeme.com/permalink/190711/48d8f1861d6b77bc650e0612cf3abfdd.png' className="logo-center" alt='spendy-logo'/>
          <Menu.Menu >
            {/* TODO: logout */}
           <Menu.Item as={NavLink} to="/logout" name="Logout" onClick={handleLogout} />
          </Menu.Menu>
        </Fragment>
      ) : (
        <Fragment>
        <Menu.Item as={NavLink} to="/login" name="Login" active={pathname === '/login'} />
        <img src='https://fontmeme.com/permalink/190711/48d8f1861d6b77bc650e0612cf3abfdd.png' className="logo-center" alt='spendy-logo'/>
        </Fragment>
      )}
    </Menu>
  )
}

const mapStateToProps = ({ usersReducer: user }) => ({ user })

export default withRouter(connect(mapStateToProps)(Nav))
