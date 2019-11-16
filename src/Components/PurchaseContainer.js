import React, { Fragment } from 'react'
import PurchaseForm from "./purchaseForm"
import PurchaseTable from "./purchaseTable"
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth'

const PurchaseContainer = (props) => {
  return(
    <Fragment>
      <PurchaseForm
        editClicked = {props.editClicked}
        handleChange = {props.handleChange}
        handleSubmit = {props.handleSubmit}
        dateHandler = {props.dateHandler}
        handlePaymentChange = {props.handlePaymentChange}
        handleCategoryChange = {props.handleCategoryChange}
        selected = {props.selected}
        date={props.date}
        name={props.name}
        category={props.category}
        placeOfPurchase={props.placeOfPurchase}
        outOfPocket={props.outOfPocket}
        actualPaid={props.actualPaid}
        paymentMethod={props.paymentMethod}
       />
      <PurchaseTable
        purchases = {props.purchases}
        editHandler = {props.editHandler}
        deleteHandler = {props.deleteHandler}
        handleCancel = {props.handleCancel}
        show = {props.show}
        close = {props.close}
        confirm = {props.confirm}
      />
    </Fragment>
  )
}


const mapStateToProps = ({ usersReducer: { user } }) => ({
  user
})

// export default PurchaseContainer
export default withAuth(connect(mapStateToProps)(PurchaseContainer))
