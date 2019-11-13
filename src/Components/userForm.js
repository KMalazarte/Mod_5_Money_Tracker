import React, { Fragment } from 'react'
import { Button, Form } from 'semantic-ui-react'

class UserForm extends React.Component {

  render(){
      return(
        <Fragment >
              <Form onSubmit={this.props.handleTakeHomeSubmit} size={"small"} key={"small"}>
                <Form.Group widths='equal'>
                  <Form.Field required name='takeHome' control='input' placeholder='New Monthly Take Home' onChange={this.props.handleChange} value={this.props.takeHome}/>
                  <Button type='submit'>Submit</Button>
                </Form.Group>
              </Form>
        </Fragment>
      )
  }


}

export default UserForm
