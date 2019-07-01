import React, { Fragment } from 'react'
import PurchaseForm from "./purchaseForm"
import PurchaseTable from "./purchaseTable"
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth'
// import DatePicker from "react-datepicker";
//
// import "react-datepicker/dist/react-datepicker.css";

class PurchaseContainer extends React.Component {

state={
  purchases:[],
  date:"",
  name:"",
  category:"",
  placeOfPurchase:"",
  outOfPocket:"",
  actualPaid:"",
  paymentMethod:"",
  selected: ""
}

  componentDidMount() {
    fetch(`http://localhost:3000/${localStorage.user_id}/purchases`)
    .then(resp => resp.json())
    .then(purchaseArr => {
     this.setState({
     purchases: purchaseArr.purchase
     })
   })
 }

 handleChange = (e) => {
   this.setState({
     [e.target.name]: e.target.value
   })
 }

 handlePaymentChange = (e) => {
   this.setState({
      paymentMethod: e.currentTarget.innerText
   })
 }

 handleCategoryChange = (e) => {
   this.setState({
      category: e.currentTarget.innerText
   })
 }

 // handleSelectChange=(e,{value})=>this.setState({paymentMethod:value})

 handleSubmit = (e) => {
   e.preventDefault()

   let revObj= { date: this.state.date,
                 name: this.state.name,
                 category: this.state.category,
                 place_of_purchase: this.state.placeOfPurchase,
                 out_of_pocket: this.state.outOfPocket,
                 actual_paid: this.state.actualPaid,
                 payment_method: this.state.paymentMethod,
                 user_id: localStorage.user_id
               }

   this.setState({
      purchases: [...this.state.purchases, revObj],
      date:"",
      name:"",
      category:"",
      placeOfPurchase:"",
      outOfPocket:"",
      actualPaid:"",
      paymentMethod:"",
      selected: ""
    })

     fetch(`http://localhost:3000/purchases`, {
       method: 'POST',
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         date: this.state.date,
         name: this.state.name,
         category: this.state.category,
         place_of_purchase: this.state.placeOfPurchase,
         out_of_pocket: this.state.outOfPocket,
         actual_paid: this.state.actualPaid,
         payment_method: this.state.paymentMethod,
         user_id: localStorage.user_id
       })
     })
 }

 editHandler = (e) => {
   console.log(e.currentTarget.id);
   let clicked = this.state.purchases.find((purchase) => {
     return parseInt(e.currentTarget.id) === purchase.id
   })
   let notClicked = this.state.purchases.filter((purchase) => {
     return parseInt(e.currentTarget.id) !== purchase.id
   })
     this.setState({
       date:clicked.date,
       name:clicked.name,
       category:clicked.category,
       placeOfPurchase:clicked.place_of_purchase,
       outOfPocket:clicked.out_of_pocket,
       actualPaid:clicked.actual_paid,
       paymentMethod:clicked.payment_method,
       selected:clicked.selected,
       purchases: notClicked
     })
     fetch(`http://localhost:3000/${localStorage.user_id}/purchases/${e.currentTarget.id}`, {
       method: 'DELETE'
     }).then(() => {
       console.log('removed');
     }).catch(err => {
       console.error(err)
     })

 }

 deleteHandler = (e) => {
   console.log(localStorage.user_id);

   let notClicked = this.state.purchases.filter((purchase) => {
     return parseInt(e.currentTarget.dataset.id) !== purchase.id
   })
     this.setState({
       purchases: notClicked
     })
    fetch(`http://localhost:3000/${localStorage.user_id}/purchases/${e.currentTarget.dataset.id}`, {
      method: 'DELETE'
    }).then(() => {
       console.log('removed');
    }).catch(err => {
      console.error(err)
    });
    alert('Purchase deleted')
 }


  render() {

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
