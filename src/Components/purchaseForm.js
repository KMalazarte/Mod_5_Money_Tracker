import React, { Fragment } from 'react'
import { Button, Form, Dropdown } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


// const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']

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
  {
    key: 'Venmo from',
    text: 'Venmo from',
    value: 'Venmo from',
  },
]

const categories = [
  {
    key: 'Eating Out',
    text: 'Eating Out',
    value: 'Eating Out',
  },
  {
    key: 'Groceries',
    text: 'Groceries',
    value: 'Groceries',
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
    key: 'Transportation/ Gas',
    text: 'Transportation/ Gas',
    value: 'Transportation/ Gas',
  },
  {
    key: 'Flights/ Hotels',
    text: 'Flights/ Hotels',
    value: 'Flights/ Hotels',
  },
  {
    key: 'Misc.',
    text: 'Misc.',
    value: 'Misc.',
  },
  {
    key: 'Gifts',
    text: 'Gifts',
    value: 'Gifts',
  },
]

class PurchaseForm extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
    console.log("Purchase Form", this.props);
      return(
        <Fragment >
              <Form onSubmit={this.props.handleSubmit} size={"small"} key={"small"}>
                <Form.Group widths='equal'>
                <Form.Field>
                    <DatePicker
                      selected={this.props.date}
                      onChange={this.props.dateHandler}
                      dateFormat="dd-MMMM-yy"
                      placeholderText="Date"
                    />
                  </Form.Field>
                  <Form.Field required name='name' control='input' placeholder='Purchase' onChange={this.props.handleChange} value={this.props.name}/>
                  <Form.Field required fluid name='category' control={Dropdown} placeholder='Select a Category' onChange={this.props.handleCategoryChange} options={categories} selection value={this.props.category}/>
                  <Form.Field required name='placeOfPurchase' control='input' placeholder='Place of Purchase' onChange={this.props.handleChange} value={this.props.placeOfPurchase}/>
                  <Form.Field required name='outOfPocket' control='input' placeholder='Out of Pocket' onChange={this.props.handleChange} value={this.props.outOfPocket}/>
                  <Form.Field required name='actualPaid' control='input' placeholder='Actual Paid' onChange={this.props.handleChange} value={this.props.actualPaid}/>
                  <Form.Field required fluid name='paymentMethod' control={Dropdown} placeholder='Select a Payment Method' selection options={paymentOptions} onChange={this.props.handlePaymentChange} selection value={this.props.paymentMethod}/>
                  <Button type='submit'>Submit</Button>
                </Form.Group>
              </Form>
        </Fragment>
      )
  }


}

export default PurchaseForm




// <Form.Field required name='date' control='input' placeholder='Date' onChange={this.props.handleChange} value={this.props.date}/>
