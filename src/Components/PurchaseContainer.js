import React, { Fragment } from 'react'
import PurchaseForm from "./purchaseForm"
import PurchaseTable from "./purchaseTable"
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth'

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

 handleSubmit = (e) => {
   e.preventDefault()

   let form = e.target
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
      purchases: [...this.state.purchases, revObj]
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
   form.reset()
 }

 editHandler = (e) => {
   let clicked = this.state.purchases.find((purchase) => {
     return parseInt(e.currentTarget.id) === purchase.id
   })
   let notClicked = this.state.purchases.filter((purchase) => {
     return parseInt(e.currentTarget.id) !== purchase.id
   })
     this.setState({
       selected: clicked,
       purchases: notClicked
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
          selected = {this.state.selected}
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
