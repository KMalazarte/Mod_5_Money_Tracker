import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Table, Card, Image, Grid } from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'
import PurchaseContainer from './purchaseContainer'
import UserStats from './userStats'
import SpendStats from './spendStats'
import MonthlyContainer from "./monthlyContainer"

class Profile extends React.Component {

  state={
    purchases:[],
    monthlies: [],
    date: new Date(),
    name:"",
    category:"",
    placeOfPurchase:"",
    outOfPocket:"",
    actualPaid:"",
    paymentMethod:"",
    selected: "",
    clickedRowId: "",
    spent: 0.0,
    monthlyName: "",
    monthlyAmount: "",
    purchaseId:"",
    monthlyId:"",
    editClicked:false,
    monthlyEditClicked: false
  }
    // LIFECYCLE METHOD
    componentDidMount() {
      fetch(`http://localhost:3000/${localStorage.user_id}/purchases`)
      .then(resp => resp.json())
      .then(purchaseArr => {
      let spend = []
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let spendCalc = purchaseArr.purchase.forEach( purchase => spend.push(parseInt(purchase.actual_paid) ))
      let total = parseFloat(spend.reduce(reducer)).toFixed(2)
      // console.log(total);
       this.setState({
       purchases: purchaseArr.purchase,
       spent: total
       })
     })
     fetch(`http://localhost:3000/${localStorage.user_id}/monthlies`)
     .then(resp => resp.json())
     .then(data => {
        this.setState({
        monthlies: data.monthly
        })
      })
    }


   handleChange = (e) => {
     console.log(e);
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

   handleDateChange = (e) => {
     this.setState({
        date: e
     })
   }

   editMonthlyHandler = (e) => {
     console.log("monthly edited");
     let clicked = this.state.monthlies.find((monthly) => {
       return parseInt(e.currentTarget.id) === monthly.id
     })
     let notClicked = this.state.monthlies.filter((monthly) => {
       return parseInt(e.currentTarget.id) !== monthly.id
     })
       this.setState({
         monthlyName: clicked.name,
         monthlyAmount: clicked.amount,
         monthlies: notClicked,
         monthlyEditClicked: true,
         monthlyId: clicked.id
       })
       console.log("Look HERE, this.state.monthly");
         // fetch(`http://localhost:3000/${localStorage.user_id}/monthlies/${e.currentTarget.id}`, {
         //   method: 'DELETE'
         // }).then(() => {
         //   console.log('removed');
         // }).catch(err => {
         //   console.error(err)
         // })
   }

   deleteMonthlyHandler = (e) => {
     console.log(e.currentTarget.dataset.id);
       let notClicked = this.state.monthlies.filter((monthly) => {
         return parseInt(e.currentTarget.dataset.id) !== monthly.id
       })
         this.setState({
           monthlies: notClicked
         })
        fetch(`http://localhost:3000/${localStorage.user_id}/monthlies/${e.currentTarget.dataset.id}`, {
          method: 'DELETE'
        }).then(() => {
           console.log('removed');
        }).catch(err => {
          console.error(err)
        });
        alert('Monthly deleted')
     }


   handleMonthlySubmit = (e) => {
     e.preventDefault()
     console.log("HEY YO", this.state.monthlyId);
    let monthlyObj= {
                  name: this.state.monthlyName,
                  amount: this.state.monthlyAmount,
                  user_id: localStorage.user_id
                  }

    if (this.state.monthlyEditClicked) {
    fetch(`http://localhost:3000/${localStorage.user_id}/monthlies/${this.state.monthlyId}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.monthlyName,
        amount: this.state.monthlyAmount,
        user_id: localStorage.user_id
        })
    })
    } else {
      fetch(`http://localhost:3000/monthlies`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.state.monthlyName,
          amount: this.state.monthlyAmount,
          user_id: localStorage.user_id
        })
      })//2nd Fetch
    }
      this.setState({
        monthlies: [...this.state.monthlies, monthlyObj],
        monthlyName: "",
        monthlyAmount: "",
        monthlyId: ""
      })
    }//handleMonthlySubmit




   handleSubmit = (e) => {
      // debugger
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

      if (this.state.editClicked) {

      fetch(`http://localhost:3000/${localStorage.user_id}/purchases/${this.state.purchaseId}`, {
        method: 'PATCH',
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
    } else {
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
     this.setState({
       purchases: [...this.state.purchases, purObj],
       date:"",
       name:"",
       category:"",
       placeOfPurchase:"",
       outOfPocket:"",
       actualPaid:"",
       paymentMethod:"",
       selected: "",
       purchaseId: ""
     })
   }

   editHandler = (e) => {
     console.log("Edited");

     let clicked = this.state.purchases.find((purchase) => {
       return parseInt(e.currentTarget.id) === purchase.id
     })
     let notClicked = this.state.purchases.filter((purchase) => {
       return parseInt(e.currentTarget.id) !== purchase.id
     })
       this.setState({
         // date:clicked.date,
         name:clicked.name,
         category:clicked.category,
         placeOfPurchase:clicked.place_of_purchase,
         outOfPocket:clicked.out_of_pocket,
         actualPaid:clicked.actual_paid,
         paymentMethod:clicked.payment_method,
         selected:clicked.selected,
         purchases: notClicked,
         editClicked:true,
         purchaseId:clicked.id
       })
         // fetch(`http://localhost:3000/${localStorage.user_id}/purchases/${e.currentTarget.id}`, {
         //   method: 'DELETE'
         // }).then(() => {
         //   console.log('removed');
         // }).catch(err => {
         //   console.error(err)
         // })
   }//handleSubmit end

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
    // console.log("%c profile",'color: firebrick', this.state.monthlies);
    // const monthlyRows = this.state.monthlies.map(monthly =>
    //     <Table.Row>
    //       <Table.Cell>{monthly.name}</Table.Cell>
    //       <Table.Cell>{monthly.amount}</Table.Cell>
    //     </Table.Row>
    //   )
    return (
    <Fragment>
      <Grid padded>
       <Grid.Row columns={4}>
          <Grid.Column textAlign='center' width={4}>
            <Card centered>
              <Image src={localStorage.avatar} />
              <Card.Content>
                <Card.Header>{localStorage.username}</Card.Header>
                <Card.Description>User #{localStorage.user_id}</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column centered width={4}>
            <UserStats
            spent={this.state.spent}
            purchases={this.state.purchases}
            monthlies={this.state.monthlies}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <SpendStats
            spent={this.state.spent}
            purchases={this.state.purchases}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <MonthlyContainer
            handleMonthlySubmit = {this.handleMonthlySubmit}
            monthlies={this.state.monthlies}
            monthlyName = {this.state.monthlyName}
            monthlyAmount = {this.state.monthlyAmount}
            editMonthlyHandler = {this.editMonthlyHandler}
            deleteMonthlyHandler = {this.deleteMonthlyHandler}
            handleChange = {this.handleChange}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <PurchaseContainer
              editClicked = {this.state.editClicked}
              editHandler = {this.editHandler}
              deleteHandler = {this.deleteHandler}
              dateHandler = {this.handleDateChange}
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
