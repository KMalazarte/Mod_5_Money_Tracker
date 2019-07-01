import React, { Fragment } from 'react'
import { Button, Form, Dropdown } from 'semantic-ui-react'


const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']

const paymentOptions = [
  {
    key: 'Cash',
    text: 'Cash',
    value: 'Cash',
  },
  {
    key: 'Credit',
    text: 'Credit',
    value: 'Credit',
  },
  {
    key: 'Venmo to',
    text: 'Venmo to',
    value: 'Venmo to',
  },
]

const categories = [
  {
    key: 'Gifts',
    text: 'Gifts',
    value: 'Gifts',
  },
  {
    key: 'Food',
    text: 'Food',
    value: 'Food',
  },
  {
    key: 'Entertainment',
    text: 'Entertainment',
    value: 'Entertainment',
  },
  {
    key: 'Clothes/Accessories',
    text: 'Clothes/Accessories',
    value: 'Clothes/Accessories',
  },
  {
    key: 'Booze/Night Out',
    text: 'Booze/Night Out',
    value: 'Booze/Night Out',
  },
  {
    key: 'Transportation/ Gas/ Hotels',
    text: 'Transportation/ Gas/ Hotels',
    value: 'Transportation/ Gas/ Hotels',
  },
  {
    key: 'Misc.',
    text: 'Misc.',
    value: 'Misc.',
  },
]

class PurchaseForm extends React.Component {

  constructor(props) {
    super(props)
    }

  render(){
      return(
        <Fragment>
              <Form onSubmit={this.props.handleSubmit} size={"small"} key={"small"}>
                <Form.Group widths='equal'>
                  <Form.Field required name='date' control='input' placeholder='Date' onChange={this.props.handleChange} value={this.props.date}/>
                  <Form.Field required name='name' control='input' placeholder='Purchase' onChange={this.props.handleChange} value={this.props.name}/>
                  <Form.Field required name='category' control='input' placeholder='Category' onChange={this.props.handleChange} options={categories} selection value={this.props.category}/>
                  <Form.Field required name='placeOfPurchase' control='input' placeholder='Place of Purchase' onChange={this.props.handleChange} value={this.props.placeOfPurchase}/>
                  <Form.Field required name='outOfPocket' control='input' placeholder='Out of Pocket' onChange={this.props.handleChange} value={this.props.outOfPocket}/>
                  <Form.Field required name='actualPaid' control='input' placeholder='Actual Paid' onChange={this.props.handleChange} value={this.props.actualPaid}/>
                  <Form.Field required name='paymentMethod' control='input' placeholder='Payment Method' options={paymentOptions} onChange={this.props.handleChange} selection value={this.props.paymentMethod}/>
                  <Button type='submit'>Submit</Button>
                </Form.Group>
              </Form>
        </Fragment>
      )
  }


}

export default PurchaseForm

// TOP GET DROPDOWNS BACK CHANGE CONTROL TO "Dropdown"
// <Dropdown required fluid name='paymentMethod' placeholder='Choose a Payment Method' control='input' selection options={paymentOptions} onChange={this.props.handleChange} value={value}/>
