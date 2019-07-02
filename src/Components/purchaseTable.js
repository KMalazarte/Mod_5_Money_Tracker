import React, { Fragment } from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'
import moment from 'moment'
import _ from 'lodash'

// const colors = [
//   'red',
//   'orange',
//   'yellow',
//   'olive',
//   'green',
//   'teal',
//   'blue',
//   'violet',
//   'purple',
//   'pink',
//   'brown',
//   'grey',
//   'black',
// ]

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

  constructor(props) {
  super(props);
  this.state = {
      column: null,
      data: [],
      direction: null,
    }
  }

  componentDidUpdate(){
    if (this.state.data.length < this.props.purchases.length ) {
      this.setState(
        {
        data: this.props.purchases
        }
      )}
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
       this.setState({
         column: clickedColumn,
         data: _.sortBy(data, [clickedColumn]),
         direction: 'ascending',
       })

     return
    }

     this.setState({
       data: data.reverse(),
       direction: direction === 'ascending' ? 'descending' : 'ascending',
     })
   }

  render() {
    console.log("Props purchases", this.props.purchases);
    console.log("State data", this.state.data);
  const { column, data, direction } = this.state
  const purchaseRows = this.state.data.map(purchase =>
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
          <Table selectable sortable fixed color="blue" inverted>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell
                  sorted={column === 'date' ? direction : null}
                  onClick={this.handleSort('date')}
                >
                  Date
                </Table.HeaderCell>
                <Table.HeaderCell
                  sorted={column === 'name' ? direction : null}
                  onClick={this.handleSort('name')}
                >
                  Purchase
                </Table.HeaderCell>
                <Table.HeaderCell
                  sorted={column === 'category' ? direction : null}
                  onClick={this.handleSort('category')}
                >
                  Category
                </Table.HeaderCell>
                <Table.HeaderCell
                  sorted={column === 'place_of_purchase' ? direction : null}
                  onClick={this.handleSort('place_of_purchase')}
                >
                Place of Purchase
                </Table.HeaderCell>
                <Table.HeaderCell
                  sorted={column === 'out_of_pocket' ? direction : null}
                  onClick={this.handleSort('out_of_pocket')}
                >
                  Out of Pocket
                </Table.HeaderCell>
                <Table.HeaderCell
                  sorted={column === 'actual_paid' ? direction : null}
                  onClick={this.handleSort('actual_paid')}
                >
                  Actual Paid
                </Table.HeaderCell>
                <Table.HeaderCell
                  sorted={column === 'payment_method' ? direction : null}
                  onClick={this.handleSort('payment_method')}
                >
                  Payment Method
                </Table.HeaderCell>
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
