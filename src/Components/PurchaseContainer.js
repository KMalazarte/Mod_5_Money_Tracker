import React, { Fragment } from 'react'
import PurchaseForm from "./purchaseForm"
import PurchaseTable from "./purchaseTable"


class PurchaseContainer extends React.Component {

  render() {
      return(
        <Fragment>

        "Hello from PurchaseContainer/ list of purchases"
          <PurchaseForm />
          <PurchaseTable />
        </Fragment>
      )
  }


}

export default PurchaseContainer
