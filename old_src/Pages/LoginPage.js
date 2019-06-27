import React from 'react';
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router'
import { loginUser } from '../Actions/user'

class LoginPage extends React.Component {
  state = {
    username: '',
    password: ''
  }

  // componentDidMount() {
  //   if (!!localStorage.getItem("token")) {
  //     this.props.history.push("/")
  //   }
  // }

  handleChange = (event, semanticInputData) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin = (event) => {
    event.preventDefault();
    this.props.loginUser(this.state.username, this.state.password) //comes from mapDispatchToProps
    this.setState({ username: '', password: '' }) //reset form to initial state
  }

  render() {
    // console.log('%c LOGIN FORM PROPS: ', 'color:red', this.props);
    return(
      <form onSubmit={this.handleLogin}>
        <input type="text" name="username" label="username" placeholder="username"  onChange={this.handleChange} value={this.state.username} />
        <input type="password" name="password" label="password" placeholder="password" onChange={this.handleChange} value={this.state.password}/>

        <input type="submit" value="Log In"/>
      </form>
    )
  }
}

const mapStateToProps = ({ usersReducer: { authenticatingUser, failedLogin, error, loggedIn } }) => ({
    authenticatingUser,
    failedLogin,
    error,
    loggedIn
  })

export default withRouter(connect(mapStateToProps, { loginUser })(LoginPage))
