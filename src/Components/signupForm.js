import React from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { withRouter, Redirect } from 'react-router'
import { loginUser } from '../actions/user'
import { Button, Form, Segment, Message } from 'semantic-ui-react'

class SignupForm extends React.Component {
  // constructor() {
  //   this.state = { username: '', password: '' }
  // }
  state = { username: '', password: ''}

  // handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleChange = (e, semanticInputData) => {
    // this.setState({ [semanticInputData.name]: semanticInputData.value })
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSignupSubmit = (e) => { //semantic forms preventDefault for you
    // e.preventDefault()
    fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: this.state.username,
        password: this.state.password
      }
    })
    })
      .then(r => r.json())
      .then(r => console.log(r))
    }
    // this.props.loginUser(this.state.username, this.state.password) //comes from mapDispatchToProps
    // this.setState({ username: '', password: '' }) //reset form to initial state
  // }


  render() {
    // console.log('%c LOGIN FORM PROPS: ', 'color: red', this.props)
    return localStorage.token ? (
      <Redirect to="/profile" />
    ) : (
      <Segment>
        <Form
          onSubmit={this.handleSignupSubmit}
          size="mini"
          key="mini"
          loading={this.props.authenticatingUser}
          error={this.props.failedLogin}
        >
          <Message error header={this.props.failedLogin ? this.props.error : null} />
          <Form.Group widths="equal">
            <Form.Input
              label="username"
              placeholder="username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <Form.Input
              type="password"
              label="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </Form.Group>
          <Button type="submit">Signup</Button>
        </Form>
      </Segment>
    )
  }

}

export default SignupForm
