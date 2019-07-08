import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Card, Image, Grid } from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'
import PurchaseContainer from './purchaseContainer'
import UserStats from './userStats'
import SpendStats from './spendStats'

class Profile extends React.Component {


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
    clickedRowId: "",
    spent: 0.0
  }


    componentDidMount() {
      fetch(`http://localhost:3000/${localStorage.user_id}/purchases`)
      .then(resp => resp.json())
      .then(purchaseArr => {
      let spend = []
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let spendCalc = purchaseArr.purchase.forEach( purchase => spend.push(parseInt(purchase.actual_paid) ))
      let total = parseFloat(spend.reduce(reducer)).toFixed(2)
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

     let purObj= { date: this.state.date,
                   name: this.state.name,
                   category: this.state.category,
                   place_of_purchase: this.state.placeOfPurchase,
                   out_of_pocket: this.state.outOfPocket,
                   actual_paid: this.state.actualPaid,
                   payment_method: this.state.paymentMethod,
                   user_id: localStorage.user_id
                 }

     this.setState({
        purchases: [...this.state.purchases, purObj],
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
    return (
    <Fragment>
      <Grid padded>
       <Grid.Row columns={2}>
          <Grid.Column textAlign='center' width={4}>
            <Card>
              <Image src={localStorage.avatar} />
              <Card.Content>
                <Card.Header>{localStorage.username}</Card.Header>
                <Card.Description>User #{localStorage.user_id}</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={4}>
            <UserStats
            spent={this.state.spent}
            purchases={this.state.purchases}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <SpendStats
            spent={this.state.spent}
            purchases={this.state.purchases}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <PurchaseContainer
          editHandler = {this.state.editHandler}
          deleteHandler = {this.state.deleteHandler}
          handleChange = {this.state.handleChange}
          handleSubmit = {this.state.handleSubmit}
          handlePaymentChange = {this.state.handlePaymentChange}
          handleCategoryChange = {this.state.handleCategoryChange}
          selected = {this.state.selected}
          date={this.state.date}
          name={this.state.name}
          category={this.state.category}
          placeOfPurchase={this.state.placeOfPurchase}
          outOfPocket={this.state.outOfPocket}
          actualPaid={this.state.actualPaid}
          paymentMethod={this.state.paymentMethod}
          purchases={this.state.purchases}
          />
        </Grid.Row>
      </Grid>
    </Fragment>
  )
  }
}

// purchases={this.props.purchases}
// date={this.props.date}
// name={this.props.name}
// category={this.props.category}
// placeOfPurchase={this.props.placeOfPurchase}
// outOfPocket={this.props.outOfPocket}
// actualPaid={this.props.actualPaid}
// paymentMethod={this.props.paymentMethod}
// selected={this.props.selected}
// spent={this.props.spent}

// const mapStateToProps = ({ usersReducer: { user: { avatar, username, id } } }) => ({
//   avatar,
//   username,
//   id
// })

// const mapStateToProps = (reduxStoreState) => {
//   return {
//     avatar: reduxStoreState.usersReducer.user.avatar,
//     username: reduxStoreState.usersReducer.user.username,
//     bio: reduxStoreState.usersReducer.user.bio
//   }
// }

const mapStateToProps = ({ usersReducer: { user } }) => ({
  user
})


// const connectedToReduxHOC = connect(mapStateToProps)
// const connectedProfile = connectedToReduxHOC(Profile)
//
// const withAuthProfile = withAuth(connectedProfile)
//
// export default withAuthProfile

export default withAuth(connect(mapStateToProps)(Profile))
