import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import IndexPage from './Pages/IndexPage'
import NoMatch from './Pages/NoMatchPage'
import { Switch, Route } from 'react-router-dom'


class App extends React.Component {

  state = {
    user: {}
  }

  // redirect = (page) => {
  //   this.setState({
  //     page: page
  //   })
  // }
  componentDidMount() {
    if (!!localStorage.token) {
      fetch("http://localhost:3000/profile", {
        headers: {
          "Authorization": localStorage.getItem("token")
        },
      }).then(resp => resp.json())
        .then(user => {
          this.setState({ user })
        })
    }
  }



  render() {
    // console.log(this.state);
    return (
      <Switch>
        <Route exact path= "/"
          render={({ location, history, match }) => <IndexPage user={this.state.user}/>}
        />
        <Route path="/login" component={LoginPage}/>
        <Route path="/signup" component={SignupPage}/>
        <Route component={NoMatch} />
      </Switch>
    )}

}


export default App;


// if (this.state.page === "index") {
  //   return <IndexPage />
  // } else if (this.state.page === "signup") {
    //   return <SignupPage redirect={this.redirect} />
    // } else if (this.state.page === "login") {
      //   return <LoginPage redirect={this.redirect} />
      // }
