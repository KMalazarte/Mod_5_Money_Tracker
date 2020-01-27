import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Card, Image, Grid } from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'
import PurchaseContainer from './PurchaseContainer.js'
import UserStats from './userStats'
import SpendStats from './spendStats'
import MonthlyContainer from "./monthlyContainer"
import moment from 'moment'
// import rootReducer from '../reducers'
// import fetchPurchases from '../adapters'

class Profile extends React.Component {

  state={
    date:"",
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
    takeHome:"",
    editClicked:false,
    monthlyEditClicked: false,
    userClicked:true,
    currentTakeHome:localStorage.monthly_take_home,
    confirm: false,
    bingo:"",
    view: "",
    viewYear: ""
  }
    // LIFECYCLE METHOD
    componentDidMount() {
      let d = new Date()
      let realDateNum = ( parseInt( d.getMonth() ) ) + 1
      let currentYear = d.getFullYear()
         this.setState({
           view: realDateNum,
           viewYear: currentYear
         })
     }

    show = (e) => {
      let datID = e.currentTarget.dataset.id
      this.setState({
        confirm: !this.state.confirm,
        bingo: datID
      })
    }

    close = (e) => {
      this.setState({
        confirm: false
      })
    }

    deleteHandler = (e) => {

      this.props.deletePurchase(this.state.bingo)

      this.setState({
        confirm: false
      })

     fetch(`http://localhost:3000/${localStorage.user_id}/purchases/${this.state.bingo}`, {
       method: 'DELETE'
     }).then(() => {
     }).catch(err => {
       console.error(err)
     })
    }

    handleCancel = (e) => {
      this.setState({
        result: 'cancelled',
        confirm: !this.state.confirm
      })
      console.log("cancel clicked, confirmState =", this.state.confirm);
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

   handleDateChange = (e) => {
     this.setState({
        date: e
     })
   }

   userClickToggle = (e) => {
     this.setState({
       userClicked:!this.state.userClicked
       })
   }

   handleTakeHomeSubmit = (e) => {
     e.preventDefault()
     let newTakeHome={
       monthly_take_home: this.state.takeHome
     }
     fetch(`http://localhost:3000/profile/${localStorage.user_id}`, {
       method: 'PATCH',
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         monthly_take_home: this.state.takeHome,
         })
     })
     .then(response => {
       if (response.ok) {
         return response.json()
       } else {
         throw response
       }
     })
     .then(JSONResponse => {
       console.log(JSONResponse);
       localStorage.setItem('monthly_take_home', JSONResponse.monthly_take_home)
     })
     this.setState({
       userClicked:!this.state.userClicked,
       currentTakeHome:this.state.takeHome
     })
     alert('Monthly Take Home has been updated')
   }

   editMonthlyHandler = (e) => {
     let clicked = this.props.currentMonthlies.find((monthly) => {
       return parseInt(e.currentTarget.id) === monthly.id
     })
     let notClicked = this.props.currentMonthlies.filter((monthly) => {
       return parseInt(e.currentTarget.id) !== monthly.id
     })
       this.setState({
         monthlyName: clicked.name,
         monthlyAmount: clicked.amount,
         monthlies: notClicked,
         monthlyEditClicked: true,
         monthlyId: clicked.id
       })
   }

   deleteMonthlyHandler = (e) => {
     console.log(e.currentTarget.dataset.id);
       let notClicked = this.props.currentMonthlies.filter((monthly) => {
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
        monthlies: [...this.props.currentMonthlies, monthlyObj],
        monthlyName: "",
        monthlyAmount: "",
        monthlyId: ""
      })
    }//handleMonthlySubmit


   handleSubmit = (e) => {
     e.preventDefault()

     let purObj= { date: moment(this.state.date).format("YYYY-MM-DD"),
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
      this.props.addPurchase(purObj)

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
    this.props.addPurchase(purObj)
    }
      // FORM RESET
      this.setState({
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
     alert('Please use the form to edit the purchase and press Submit when done')

     let clicked = this.props.purchases.find((purchase) => {
       return parseInt(e.currentTarget.id) === purchase.id
     })

     let notClicked = this.props.purchases.filter((purchase) => {
       return parseInt(e.currentTarget.id) !== purchase.id
     })

     let dateFormatter = moment(clicked.date).toDate()

     debugger

     this.props.editPurchase(clicked.id)

     this.setState({
       name:clicked.name,
       date:dateFormatter,
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
   }//editHandler end

   updatePurchases = () => {
     this.props.purchases.filter( (purchase) => {
       let randomArr = []
       randomArr.push(purchase.date[5])
       randomArr.push(purchase.date[6])
       let monthNum = parseInt(randomArr.join(""))
       let viewNum = parseInt(this.state.view)
       return monthNum === viewNum
     })
   }

   viewHandler = (e) => {
     this.setState({
       view: e.currentTarget.id,
     })
     this.updatePurchases()
   }

   yearViewHandler = (e) => {
     this.setState({
       viewYear: parseInt(e.currentTarget.id)
     })
   }

  render() {

    let shownPurchases = this.props.purchases.filter( (purchase) => {
      let randomArr = []
      randomArr.push(purchase.date[5])
      randomArr.push(purchase.date[6])
      let monthNum = parseInt(randomArr.join(""))
      let viewNum = parseInt(this.state.view)
      return monthNum === viewNum
    })

    let spent = []
    let total = 0

    const reducer = (accumulator, currentValue) => accumulator + currentValue

    shownPurchases.forEach( purchase => spent.push(parseFloat( purchase.actual_paid) ) )

    if (spent.length > 0) {
      total = parseFloat(spent.reduce(reducer)).toFixed(2)
    }

    return (
    <Fragment className="bg">
      <Grid padded className='profile-background'>
       <Grid.Row columns={4} className='profile-background'>
          <Grid.Column textAlign='center' width={4}>
            <Card centered>
              <Image src={localStorage.avatar} />
              <Card.Content>
                <Card.Header>{localStorage.username}</Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column centered width={4}>
            <UserStats
              shownPurchases={this.props.purchases}
              currentTakeHome={this.state.currentTakeHome}
              userClickToggle={this.userClickToggle}
              userClicked={this.state.userClicked}
              total={total}
              spent={spent}
              monthlies={this.props.currentMonthlies}
              handleChange = {this.handleChange}
              handleTakeHomeSubmit = {this.handleTakeHomeSubmit}
              takeHome = {this.state.takeHome}
              view={this.state.view}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <SpendStats
              total={total}
              spent={spent}
              shownPurchases={shownPurchases}
              view={this.state.view}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <MonthlyContainer
              handleMonthlySubmit = {this.handleMonthlySubmit}
              monthlies={this.props.currentMonthlies}
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
              confirm = {this.state.confirm}
              handleCancel = {this.handleCancel}
              show = {this.show}
              close = {this.close}
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
              viewHandler={this.viewHandler}
              view={this.state.view}
              viewYear={this.state.viewYear}
              yearViewHandler={this.yearViewHandler}
              updatePurchases={this.updatePurchases}
              filteredMonthRows={this.shownPurchases}

            />
        </Grid.Row>
      </Grid>
    </Fragment>
  )
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.usersReducer,
    purchases: state.purchaseReducer.purchases,
    currentMonthlies: state.monthlyReducer.monthlies
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    addPurchase: (purObj) => {
      dispatch({
        type: "PURCHASE_SUBMITTED",
        purObj: purObj
      })
    },
    editPurchase: (id) => {
      dispatch({
        type: 'PURCHASE_EDITED',
        id: id
      })
    },
    deletePurchase: (id) => {
      dispatch({
        type: 'PURCHASE_DELETED',
        id: id
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Profile))
