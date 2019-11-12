import React, { Fragment } from 'react'
import { Table, Button, Icon, Grid, Confirm } from 'semantic-ui-react'
import moment from 'moment'
import _ from 'lodash'
import { withRouter  } from 'react-router-dom'
import PurchaseModal from './purchaseModal'



class PurchaseTable extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
      column: null,
      data: [],
      direction: null,
      redirect: false,
    }
  }

  componentDidUpdate(){
    if (this.state.data.length !== this.props.purchases.length) {
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

   OpenModal = () => {
     console.log("clicked");

   }

   renderColors = (purchase) => {
     let color = ""
     switch (purchase.category) {
      case 'Eating Out':
       return color = "#2185d0"
       break
      case 'Groceries':
        return color = "#00b5ad"
        break
      case 'Entertainment':
        return color = "#21ba45"
        break
      case 'Clothes/Accessories':
        return color = '#db2828'
        break
      case 'Booze/Night Out':
        return color = '#fbbd08'
        break
      case 'Transportation/ Gas':
        return color = '#a333c8'
        break
      case 'Flights/ Hotels':
        return color = '#f2711c'
        break
      case 'Misc':
        return color = "#86512f"
        break
      case 'Gifts':
        return color = '#e03997'
        break
     }
   }

  render() {

  const { column, data, direction } = this.state

  const purchaseRows = () => {

    return this.state.data.map(purchase =>

        <Table.Row style={{backgroundColor:this.renderColors(purchase)}} id={purchase.id} onClick={this.openModal} key={purchase.id}>
          <Table.Cell>{moment(purchase.date).format("DD-MMMM-YY")}</Table.Cell>
          <Table.Cell>{purchase.name}</Table.Cell>
          <Table.Cell>{purchase.category}</Table.Cell>
          <Table.Cell>{purchase.place_of_purchase}</Table.Cell>
          <Table.Cell>${parseFloat(purchase.out_of_pocket).toFixed(2)}</Table.Cell>
          <Table.Cell>${parseFloat(purchase.actual_paid).toFixed(2)}
            <PurchaseModal
              date = {moment(purchase.date).format("DD-MMMM-YY")}
              name = {purchase.name}
              category = {purchase.category}
              place_of_purchase = {purchase.place_of_purchase}
              out_of_pocket = {parseFloat(purchase.out_of_pocket).toFixed(2)}
              actual_paid = {parseFloat(purchase.actual_paid).toFixed(2)}
              payment_method = {purchase.payment_method}
            />
          </Table.Cell>
          <Table.Cell>{purchase.payment_method} </Table.Cell>
          <Button.Group size="small">
            <Button key="edit" id={purchase.id} onClick={this.props.editHandler} animated>
              <Button.Content visible>Edit</Button.Content>
              <Button.Content hidden>
                <Icon name='pencil square'/>
              </Button.Content>
             </Button>
             <Button.Or/>
             <Button key="delete" data-id={purchase.id} onClick={this.props.show} animated>
             <Confirm
              open={this.props.confirm}
              content='Are you sure you want to delete this purchase?'
              cancelButton='Never mind'
              confirmButton="Delete"
              data-id={purchase.id}
              onCancel={this.props.handleCancel}
              onConfirm={this.props.deleteHandler}
            />
               <Button.Content visible>Delete</Button.Content>
               <Button.Content hidden>
                <Icon name='delete'/>
               </Button.Content>
              </Button>
          </Button.Group>

        </Table.Row>
  )
}
      return(
        <Grid>
        <Fragment>
          <Table selectable sortable fixed color="blue">
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
                <Table.HeaderCell> Edit / Delete </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
                <Table.Body>
                    {purchaseRows()}
                </Table.Body>
              </Table>
        </Fragment>
        </Grid>
      )
  }

}

export default withRouter(PurchaseTable)
