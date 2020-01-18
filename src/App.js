import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Profile from './Components/profile'
import LoginForm from './Components/loginForm.js'
import Nav from './Components/nav'
import NotFound from './Components/notFound'
import SignupForm from './Components/signupForm'
// import withAuth from './hocs/withAuth'
import './index.css'
import './App.css'

class App extends React.Component {

  render() {
    return (
    <Fragment>
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/profile" />} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path='/signup' component={SignupForm} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
    )
  }
}


export default withRouter(App)
