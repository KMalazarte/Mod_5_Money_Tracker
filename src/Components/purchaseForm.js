import React, { Fragment } from 'react'
import { Button, Divider, Form } from 'semantic-ui-react'

const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']

class PurchaseForm extends React.Component {

state= {
  date:"",
  name:"",
  category:"",
  placeOfPurchase:"",
  outOfPocket:"",
  actualPaid:"",
  paymentMethod:"",
  currentPurchases: ""
}

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit = (e) => {
  console.log("submitted");
  e.preventDefault()

    fetch(`http://localhost:3000/purchases`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        // "Accept": "application/json",
        // Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        date: this.state.date,
        name: this.state.name,
        category: this.state.category,
        place_of_purchase: this.state.placeOfPurchase,
        out_of_pocket: this.state.outOfPocket,
        actual_paid: this.state.actualPaid,
        payment_method: this.state.paymentMethod,
        user_id: 1
      })
    })
}


  render() {
      console.log(this.state);
      return(
        <Fragment>
              <Form onSubmit={this.handleSubmit} size={"small"} key={"small"}>
                <Form.Group widths='equal'>
                  <Form.Field required name='date' control='input' placeholder='Date' onChange={this.handleChange} />
                  <Form.Field required name='name' control='input' placeholder='Purchase' onChange={this.handleChange} />
                  <Form.Field required name='category' control='input' placeholder='Category' onChange={this.handleChange} />
                  <Form.Field required name='placeOfPurchase' control='input' placeholder='Place of Purchase' onChange={this.handleChange} />
                  <Form.Field required name='outOfPocket' control='input' placeholder='Out of Pocket' onChange={this.handleChange} />
                  <Form.Field required name='actualPaid' control='input' placeholder='Actual Paid' onChange={this.handleChange} />
                  <Form.Field required name='paymentMethod' control='input' placeholder='Payment Method' onChange={this.handleChange} />
                  <Button type='submit'>Submit</Button>
                </Form.Group>
              </Form>
        </Fragment>
      )
  }


}

export default PurchaseForm
