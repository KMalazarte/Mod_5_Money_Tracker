import React, { Fragment } from 'react'
import { Button, Form } from 'semantic-ui-react'

const MonthlyForm = (props) => {
  render(){
    return(
      <Fragment>
        <Form onSubmit={props.handleMonthlySubmit} size={"small"} key={"small"}>
          <Form.Group widths='equal'>
            <Form.Field required name='monthlyName' control='input' placeholder='Name' onChange={props.handleChange} value={props.monthlyName}/>
            <Form.Field required name='monthlyAmount' control='input' placeholder='Price per Month' onChange={props.handleChange} value={props.monthlyAmount}/>
            <Button type='submit'>Submit</Button>
          </Form.Group>
        </Form>
      </Fragment>
    )
  }
}

export default MonthlyForm
