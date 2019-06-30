import React, { Fragment } from 'react'
import PurchaseForm from "./purchaseForm"
import PurchaseTable from "./purchaseTable"
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth'

class PurchaseContainer extends React.Component {

state={
  purchases:[]
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

  render() {
      return(
        <Fragment>
          <PurchaseForm />
          <PurchaseTable
          purchases = {this.state.purchases}/>
        </Fragment>
      )
  }


}

const mapStateToProps = ({ usersReducer: { user } }) => ({
  user
})

// export default PurchaseContainer
export default withAuth(connect(mapStateToProps)(PurchaseContainer))
