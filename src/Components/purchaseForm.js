import React, { Fragment } from 'react'
import { Button, Divider, Form } from 'semantic-ui-react'

const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']

class PurchaseForm extends React.Component {

handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
      return(
        <Fragment>
              <Form onSubmit={this.handleSubmit} size={"small"} key={"small"}>
                <Form.Group widths='equal'>
                  <Form.Field required fluid name='Date' control='input' placeholder='Date' onChange={this.handleChange} />
                  <Form.Field required fluid name='Purchase' control='input' placeholder='Purchase' onChange={this.handleChange} />
                  <Form.Field required fluid name='Category' control='input' placeholder='Category' onChange={this.handleChange} />
                  <Form.Field required fluid name='Place of Purchase' control='input' placeholder='Place of Purchase' onChange={this.handleChange} />
                  <Form.Field required fluid name='Out of Pocket' control='input' placeholder='Out of Pocket' onChange={this.handleChange} />
                  <Form.Field required fluid name='Actual Paid' control='input' placeholder='Actual Paid' onChange={this.handleChange} />
                  <Form.Field required fluid name='Payment Method' control='input' placeholder='Payment Method' onChange={this.handleChange} />
                  <Button type='submit'>Submit</Button>
                </Form.Group>
                <Divider hidden />
              </Form>
        </Fragment>
      )
  }


}

export default PurchaseForm
