import React, { Fragment } from 'react'
import { Header, Table, Button } from 'semantic-ui-react'
import UserForm from './userForm'


class UserStats extends React.Component {

  renderMonthlies = () => {
    if (this.props.monthlies) {
      let monthliesArr = []
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      this.props.monthlies.map(monthly =>
        monthliesArr.push(parseFloat(monthly.amount).toFixed(2))
      )
        return parseFloat(monthliesArr.reduce(reducer, 0)).toFixed(2)
      }
    }

  userClickToggle = (e) => {
    console.log(this.state.userClicked);
    this.setState({
      userClicked:!this.state.userClicked
      })
  }

  render() {

    let spent = () => {
      return (parseFloat(this.props.spent).toFixed(2))
    }

    let amtLeft = () => {
      return parseFloat((localStorage.monthly_take_home) - (parseFloat(this.renderMonthlies()) + parseFloat(this.props.spent))).toFixed(2)
    }
    return(
    <Fragment>
    { this.props.userClicked ? (
      <>
        <Header size="huge" inverted color="orange">
          User Stats
        </Header>
        <Table color="orange">
           <Table.Header>
             <Table.Row>
               <Table.HeaderCell>Stat</Table.HeaderCell>
               <Table.HeaderCell>Amount</Table.HeaderCell>
             </Table.Row>
           </Table.Header>

           <Table.Body>
             <Table.Row>
               <Table.Cell>Monthly Take Home (After Taxes):<Button onClick={this.props.userClickToggle} size="mini">Update</Button></Table.Cell>
               <Table.Cell>${parseFloat(this.props.currentTakeHome).toFixed(2)}</Table.Cell>
             </Table.Row>
             <Table.Row negative>
               <Table.Cell>Recurring Monthly Payments:</Table.Cell>
               <Table.Cell>-${this.renderMonthlies()}</Table.Cell>
             </Table.Row>
             <Table.Row negative>
               <Table.Cell>Spent This Month (Below):</Table.Cell>
               <Table.Cell>
                 -${spent()}
               </Table.Cell>
             </Table.Row>
             <Table.Row positive>
               <Table.Cell>Left This Month:</Table.Cell>
               <Table.Cell>${amtLeft()}</Table.Cell>
             </Table.Row>
           </Table.Body>
         </Table>
      </>
    ) : (
      <>
        <Header size="huge" inverted color="purple">
          Update User Take Home Below
        </Header>
          <UserForm
          handleTakeHomeSubmit={this.props.handleTakeHomeSubmit}
          handleChange= {this.props.handleChange}
          takeHome = {this.props.takeHome}
          />
        <Table color="purple">
           <Table.Header>
             <Table.Row>
               <Table.HeaderCell>Stat</Table.HeaderCell>
               <Table.HeaderCell>Amount</Table.HeaderCell>
             </Table.Row>
           </Table.Header>
           <Table.Body>
             <Table.Row>
               <Table.Cell>Monthly Take Home (After Taxes):</Table.Cell>
               <Table.Cell>${parseFloat(this.props.currentTakeHome).toFixed(2)}</Table.Cell>
             </Table.Row>
            <Table.Row>
            </Table.Row>
           </Table.Body>
         </Table>
      </>
    )}
    </Fragment>
    )
  }
}

export default UserStats
