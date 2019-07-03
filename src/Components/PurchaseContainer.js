import React, { Fragment } from 'react'
import PurchaseForm from "./purchaseForm"
import PurchaseTable from "./purchaseTable"
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth'
// import DatePicker from "react-datepicker";
//
// import "react-datepicker/dist/react-datepicker.css";

class PurchaseContainer extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    }
  }

  render() {
    console.log("purchase container", this.props);
      return(
        <Fragment>
          <PurchaseForm
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          handlePaymentChange = {this.handlePaymentChange}
          handleCategoryChange = {this.handleCategoryChange}
          selected = {this.state.selected}
          date={this.state.date}
          name={this.state.name}
          category={this.state.category}
          placeOfPurchase={this.state.placeOfPurchase}
          outOfPocket={this.state.outOfPocket}
          actualPaid={this.state.actualPaid}
          paymentMethod={this.state.paymentMethod}
           />
          <PurchaseTable
          purchases = {this.state.purchases}
          editHandler = {this.editHandler}
          deleteHandler = {this.deleteHandler}
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
