import React, { Fragment } from 'react'
import { Button, Divider, Form } from 'semantic-ui-react'
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']

class PurchaseForm extends React.Component {

// state= {
//   date:"",
//   name:"",
//   category:"",
//   placeOfPurchase:"",
//   outOfPocket:"",
//   actualPaid:"",
//   paymentMethod:"",
//   currentPurchases: ""
// }

  render() {
      return(
        <Fragment>
              <Form onSubmit={this.props.handleSubmit} size={"small"} key={"small"}>
                <Form.Group widths='equal'>

                  <Form.Field required name='date' control='input' placeholder='Date' onChange={this.props.handleChange} />
                  <Form.Field required name='name' control='input' placeholder='Purchase' onChange={this.props.handleChange} />
                  <Form.Field required name='category' control='input' placeholder='Category' onChange={this.props.handleChange} />
                  <Form.Field required name='placeOfPurchase' control='input' placeholder='Place of Purchase' onChange={this.props.handleChange} />
                  <Form.Field required name='outOfPocket' control='input' placeholder='Out of Pocket' onChange={this.props.handleChange} />
                  <Form.Field required name='actualPaid' control='input' placeholder='Actual Paid' onChange={this.props.handleChange} />
                  <Form.Field required name='paymentMethod' control='input' placeholder='Payment Method' onChange={this.props.handleChange} />
                  <Button type='submit'>Submit</Button>
                </Form.Group>
              </Form>
        </Fragment>
      )
  }


}

export default PurchaseForm
