import React, { Fragment } from 'react'
import PurchaseForm from "./purchaseForm"
import PurchaseTable from "./purchaseTable"
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth'
// import DatePicker from "react-datepicker";
//
// import "react-datepicker/dist/react-datepicker.css";

class PurchaseContainer extends React.Component {

  render() {
      return(
        <Fragment>
          <PurchaseForm
          handleChange = {this.props.handleChange}
          handleSubmit = {this.props.handleSubmit}
          handlePaymentChange = {this.props.handlePaymentChange}
          handleCategoryChange = {this.props.handleCategoryChange}
          selected = {this.props.selected}
          date={this.props.date}
          name={this.props.name}
          category={this.props.category}
          placeOfPurchase={this.props.placeOfPurchase}
          outOfPocket={this.props.outOfPocket}
          actualPaid={this.props.actualPaid}
          paymentMethod={this.props.paymentMethod}
           />
          <PurchaseTable
          purchases = {this.props.purchases}
          editHandler = {this.props.editHandler}
          deleteHandler = {this.props.deleteHandler}
          />
        </Fragment>
      )
  }


}

const mapStateToProps = ({ usersReducer: { user } }) => ({
  user
})

// export default PurchaseContainer
export default withAuth(connect(mapStateToProps)(PurchaseContainer))
