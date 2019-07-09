import React, { Fragment } from 'react'
import { Header, Table } from 'semantic-ui-react'


class UserStats extends React.Component {

  // renderMonthlies = () => {
  //   if (this.props.monthlies) {
  //     return this.props.monthlies.map(monthly => {
  //       return <>
  //         <Table.Row >
  //           <Table.Cell>{monthly.name}</Table.Cell>
  //           <Table.Cell>${parseFloat(monthly.amount).toFixed(2)}</Table.Cell>
  //         </Table.Row>
  //       </>
  //     })
  //   }
  // }

  renderMonthlies = () => {
    if (this.props.monthlies) {
      let monthliesArr = []
      const reducer = (accumulator, currentValue) => accumulator + currentValue
      this.props.monthlies.map(monthly => {
        monthliesArr.push(parseFloat(monthly.amount)).toFixed(2)
      })
        return parseFloat(monthliesArr.reduce(reducer, 0)).toFixed(2)
      }
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
      <Header size="huge" inverted color="purple">
        Hello from UserStats Page
      </Header>
      <Table >
         <Table.Header>
           <Table.Row>
             <Table.HeaderCell>Stat</Table.HeaderCell>
             <Table.HeaderCell>Amount</Table.HeaderCell>
           </Table.Row>
         </Table.Header>

         <Table.Body>
           <Table.Row>
             <Table.Cell>Monthly Take Home (After Taxes):</Table.Cell>
             <Table.Cell>${parseFloat(localStorage.monthly_take_home).toFixed(2)}</Table.Cell>
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
    </Fragment>
    )
  }
}

export default UserStats

// </Table>
// <p>Monthly Take Home (After Taxes): ${parseFloat(localStorage.monthly_take_home).toFixed(2)}</p>
// <p>Spent This Month (Below): ${spent()}</p>
// <p>Recurring Monthly payments: ${this.renderMonthlies()} </p>
// <p>Left This Month: ${amtLeft()} </p>
