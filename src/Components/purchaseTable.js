import React, { Fragment } from 'react'
import { Table } from 'semantic-ui-react'

class PurchaseTable extends React.Component {

  render() {
  console.log(this.props.purchases)
  const purchaseRows = this.props.purchases.map(purchase =>
    <Table.Row key={purchase.id}>
      <Table.Cell>{purchase.date}</Table.Cell>
      <Table.Cell>{purchase.name}</Table.Cell>
      <Table.Cell>{purchase.category}</Table.Cell>
      <Table.Cell>{purchase.place_of_purchase}</Table.Cell>
      <Table.Cell>${purchase.out_of_pocket}</Table.Cell>
      <Table.Cell>${purchase.actual_paid}</Table.Cell>
      <Table.Cell>{purchase.payment_method}</Table.Cell>
    </Table.Row>
  )
      return(
        <Fragment>
          <Table selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Purchase</Table.HeaderCell>
                <Table.HeaderCell>Category</Table.HeaderCell>
                <Table.HeaderCell>Place of Purchase</Table.HeaderCell>
                <Table.HeaderCell>Out of Pocket</Table.HeaderCell>
                <Table.HeaderCell>Actual Paid</Table.HeaderCell>
                <Table.HeaderCell>Payment Method</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {purchaseRows}
            </Table.Body>
          </Table>
        </Fragment>
      )
  }


}

export default PurchaseTable
