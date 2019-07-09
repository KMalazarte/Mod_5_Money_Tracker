import React, { Fragment } from 'react'
import { Button, Form, Dropdown } from 'semantic-ui-react'

class MonthlyForm extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render(){
    console.log("Monthly Form", this.props);
      return(
        <Fragment >
              <Form onSubmit={this.props.handleMonthlySubmit} size={"small"} key={"small"}>
                <Form.Group widths='equal'>
                  <Form.Field required name='monthlyName' control='input' placeholder='Name' onChange={this.props.handleChange} value={this.props.monthlyName}/>
                  <Form.Field required name='monthlyAmount' control='input' placeholder='Price per Month' onChange={this.props.handleChange} value={this.props.monthlyAmount}/>
                  <Button type='submit'>Submit</Button>
                </Form.Group>
              </Form>
        </Fragment>
      )
  }


}

export default MonthlyForm
