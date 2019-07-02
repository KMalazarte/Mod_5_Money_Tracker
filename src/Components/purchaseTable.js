import React, { Fragment } from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'
import moment from 'moment'

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]

// let categoryColor = switch ( purchase.category ) {
//   case 'Gifts':
//   color = 'pink'
//   break
//   case 'Food':
//   color = 'blue'
//   break
//   case 'Entertainment':
//   color = 'green'
//   break
//   case 'Clothes/Accessories':
//   color = 'orange'
//   break
//   case 'Booze/Night Out':
//   color = 'yellow'
//   break
//   case 'Transportation/ Gas/ Hotels':
//   color = 'purple'
//   break
//   case 'Misc.':
//   color = 'grey'
//   break
// }

class PurchaseTable extends React.Component {
  render() {
  const purchaseRows = this.props.purchases.map(purchase =>
    <Table.Row key={purchase.id} priority>
      <Table.Cell>{moment(purchase.date).format("MM-DD-YYYY")}</Table.Cell>
      <Table.Cell>{purchase.name}</Table.Cell>
      <Table.Cell>{purchase.category}</Table.Cell>
      <Table.Cell>{purchase.place_of_purchase}</Table.Cell>
      <Table.Cell>${parseFloat(purchase.out_of_pocket).toFixed(2)}</Table.Cell>
      <Table.Cell>${parseFloat(purchase.actual_paid).toFixed(2)}</Table.Cell>
      <Table.Cell>{purchase.payment_method}</Table.Cell>
      <Button.Group>
        <Button key="edit" id={purchase.id} onClick={this.props.editHandler} animated>
          <Button.Content visible>Edit</Button.Content>
          <Button.Content hidden>
            <Icon name='pencil square'/>
          </Button.Content>
         </Button>
         <Button key="delete" data-id={purchase.id} onClick={this.props.deleteHandler} animated>
           <Button.Content visible>Delete</Button.Content>
           <Button.Content hidden>
            <Icon name='delete'/>
           </Button.Content>
          </Button>
      </Button.Group>

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
