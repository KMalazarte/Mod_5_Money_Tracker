import React, { Fragment } from 'react'
import { Button, Form, Dropdown } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PurchaseForm = (props) => {

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
      key: 'Venmo',
      text: 'Venmo',
      value: 'Venmo',
    }
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

  return(
    <Fragment>
      <Form onSubmit={props.handleSubmit} size={"small"} key={"small"}>
        <Form.Group widths='equal'>
        <Form.Field>
            <DatePicker
              selected={props.date}
              onChange={props.dateHandler}
              dateFormat="dd-MMMM-yy"
              placeholderText="Date"
            />
          </Form.Field>
          <Form.Field required name='name' control='input' placeholder='Purchase' onChange={props.handleChange} value={props.name}/>
          <Form.Field required fluid name='category' control={Dropdown} placeholder='Select a Category' onChange={props.handleCategoryChange} options={categories} selection value={props.category}/>
          <Form.Field required name='placeOfPurchase' control='input' placeholder='Place of Purchase' onChange={props.handleChange} value={props.placeOfPurchase}/>
          <Form.Field required name='outOfPocket' control='input' placeholder='Out of Pocket' onChange={props.handleChange} value={props.outOfPocket}/>
          <Form.Field required name='actualPaid' control='input' placeholder='Actual Paid' onChange={props.handleChange} value={props.actualPaid}/>
          <Form.Field required fluid name='paymentMethod' control={Dropdown} placeholder='Select a Payment Method' selection options={paymentOptions} onChange={props.handlePaymentChange} selection value={props.paymentMethod}/>
          <Button type='submit'>Submit</Button>
        </Form.Group>
      </Form>
    </Fragment>
  )
}

export default PurchaseForm




// <Form.Field required name='date' control='input' placeholder='Date' onChange={props.handleChange} value={props.date}/>
