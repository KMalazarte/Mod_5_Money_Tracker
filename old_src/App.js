import React, { Fragment } from 'react';
import './App.css';
import LoginPage from './Pages/LoginPage'
import Profile from './Pages/Profile'
import SignupPage from './Pages/SignupPage'
import IndexPage from './Pages/IndexPage'
import NoMatch from './Pages/NoMatchPage'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'


class App extends React.Component {

  state = {
    user: {}
  }

  // redirect = (page) => {
  //   this.setState({
  //     page: page
  //   })
  // }
  // componentDidMount() {
  //   if (!!localStorage.token) {
  //     fetch("http://localhost:3000/profile", {
  //       headers: {
  //         "Authorization": localStorage.getItem("token")
  //       },
  //     }).then(resp => resp.json())
  //       .then(user => {
  //         this.setState({ user })
  //       })
  //   }
  // }



  render() {
    // console.log(this.state);
    return (
      <Fragment>
        <Switch>
          <Route exact path= "/"
            render={({ location, history, match }) => <IndexPage user={this.state.user}/>}
          />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/signup" component={SignupPage}/>
          <Route component={NoMatch} />
        </Switch>
      </Fragment>
    )}

}


export default withRouter(App);


// if (this.state.page === "index") {
  //   return <IndexPage />
  // } else if (this.state.page === "signup") {
    //   return <SignupPage redirect={this.redirect} />
    // } else if (this.state.page === "login") {
      //   return <LoginPage redirect={this.redirect} />
      // }
