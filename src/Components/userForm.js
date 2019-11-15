import React, { Fragment } from 'react'
import { Button, Form } from 'semantic-ui-react'

function UserForm(props) {
  return(
    <Fragment >
          <Form onSubmit={props.handleTakeHomeSubmit} size={"small"} key={"small"}>
            <Form.Group widths='equal'>
              <Form.Field required name='takeHome' control='input' placeholder='New Monthly Take Home' onChange={props.handleChange} value={props.takeHome}/>
              <Button type='submit'>Submit</Button>
            </Form.Group>
          </Form>
    </Fragment>
  )
}


export default UserForm
