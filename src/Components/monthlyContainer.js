import React, { Fragment } from 'react'
import { Header, Image, Table } from 'semantic-ui-react'

class monthlyContainer extends React.Component {

  renderMonthlies = () => {
    if (this.props.monthlies) {
      return this.props.monthlies.map(monthly => {
        return <>
          <Table.Row >
            <Table.Cell>{monthly.name}</Table.Cell>
            <Table.Cell>${parseFloat(monthly.amount).toFixed(2)}</Table.Cell>
          </Table.Row>
        </>
      })
    }
  }

  render() {
    // console.log("monthly container", this.props.monthlies)
    return(
    <Fragment>
      <Header textAlign="center" size="huge" inverted color="orange">
        MONTHLY CONTAINER
      </Header>
      <Table selectable color="orange" >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        {this.renderMonthlies()}
        </Table.Body>
      </Table>
    </Fragment>
    )
  }


}

export default monthlyContainer
