import React, { Fragment } from 'react'
import { Table } from 'semantic-ui-react'

class PurchaseTable extends React.Component {

  render() {
      return(
        <Fragment>
        <Table celled selectable>
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
              <Table.Row>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>No</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie Harington</Table.Cell>
                <Table.Cell>January 11, 2014</Table.Cell>
                <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                <Table.Cell>Yes</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jill Lewis</Table.Cell>
                <Table.Cell>May 11, 2014</Table.Cell>
                <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                <Table.Cell>Yes</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Fragment>
      )
  }


}

export default PurchaseTable
