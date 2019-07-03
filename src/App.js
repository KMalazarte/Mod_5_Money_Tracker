import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Profile from './components/profile'
import LoginForm from './components/loginForm'
import Nav from './components/nav'
import NotFound from './components/notFound'
import SignupForm from './components/signupForm'
import PurchasePage from './components/purchasePage'
import PurchaseTable from './components/purchaseTable'
import './App.css'

class App extends React.Component {

state={
  purchases:[],
  date:"",
  name:"",
  category:"",
  placeOfPurchase:"",
  outOfPocket:"",
  actualPaid:"",
  paymentMethod:"",
  selected: "",
  spent: 0
}

  componentDidMount() {
    fetch(`http://localhost:3000/${localStorage.user_id}/purchases`)
    .then(resp => resp.json())
    .then(purchaseArr => {
    let spend = []
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let spendCalc = purchaseArr.purchase.forEach( purchase => spend.push(parseInt(purchase.actual_paid) ))
    let total = spend.reduce(reducer)
    console.log(total);
     this.setState({
     purchases: purchaseArr.purchase,
     spent: total
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
  console.log('%c APP State: ', 'color: firebrick', this.handleChange)
    return (
    <Fragment>
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/profile" />} />
        <Route exact path="/profile"
          render= {
            (props) => <Profile
                {...props}
                {...this.state}
                handleChange={this.handleChange}
                handlePaymentChange={this.handlePaymentChange}
                handleCategoryChange={this.handleCategoryChange}
                handleSubmit={this.handleSubmit}
                editHandler={this.editHandler}
                deleteHandler={this.deleteHandler}
              />
          }
        />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path='/signup' component={SignupForm} />
        <Route exact path="/purchase" render={(props)=><PurchaseTable {...props}/>} />
        <Route exact path="/:user/purchase/:purchase_id" render={() => <PurchasePage />} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
    )
  }
}

// <Route path="/purchase" render={(props) => <PurchasePage {...props}/>} />
export default withRouter(App) //withRouter is a Higher Order Component (HOC) that returns a COPY of App with React router props injected
