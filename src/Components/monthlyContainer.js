import React, { Fragment } from 'react'
import { Header, Image, Table, Button, Icon, Card } from 'semantic-ui-react'
import MonthlyForm from './monthlyForm'

class monthlyContainer extends React.Component {

  state={
    clicked:false,
  }

  renderMonthlies = () => {
    if (this.props.monthlies) {
      return this.props.monthlies.map(monthly => {
        return <>
          <Table.Row>
            <Table.Cell>{monthly.name}</Table.Cell>
            <Table.Cell>${parseFloat(monthly.amount).toFixed(2)}</Table.Cell>
          </Table.Row>
        </>
      })
    }
  }

  renderMonthliesWEdit = () => {
    if (this.props.monthlies) {
      return this.props.monthlies.map(monthly => {
        return <>
          <Table.Row>
            <Table.Cell>{monthly.name}</Table.Cell>
            <Table.Cell>${parseFloat(monthly.amount).toFixed(2)}</Table.Cell>
          </Table.Row>
          <Button.Group size="mini">
            <Button key="edit" id={monthly.id} onClick={this.props.editMonthlyHandler} animated >
              <Button.Content visible>Edit</Button.Content>
              <Button.Content hidden>
                <Icon name='pencil square'/>
              </Button.Content>
             </Button>
             <Button key="delete" data-id={monthly.id} onClick={this.props.deleteMonthlyHandler} animated>
               <Button.Content visible>Delete</Button.Content>
               <Button.Content hidden>
                <Icon name='delete'/>
               </Button.Content>
              </Button>
          </Button.Group>
        </>
      })
    }
  }

  monthliesEdit = (e) => {
      this.setState({
        clicked:!this.state.clicked
      })
  }

  render() {
    return(
    <Fragment>
       { this.state.clicked ? (
        <>
          <Header textAlign="center" size="huge" inverted color="green">
            Add or Edit Recurring Monthly Expenses Below
          </Header>
          <MonthlyForm
            monthlyName= {this.props.monthlyName}
            monthlyAmount= {this.props.monthlyAmount}
            handleChange= {this.props.handleChange}
            handleMonthlySubmit = {this.props.handleMonthlySubmit}
          />
          <Table selectable color="teal">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Amount</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.renderMonthliesWEdit()}
            </Table.Body>
          </Table>
            <Button onClick={this.monthliesEdit} primary>
              Done
            </Button>
        </>
    ) : (
        <>
          <Header textAlign="center" size="huge" inverted color="orange">
            Recurring Monthly Expenses
          </Header>
          <Table selectable color="orange">
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
            <Button onClick={this.monthliesEdit} primary>
              Add/Edit
            </Button>
        </>
    )}
    </Fragment>
)}

}

export default monthlyContainer
