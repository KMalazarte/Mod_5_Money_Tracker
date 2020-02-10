import React, { Fragment, useEffect } from 'react'
import { Header, Table, Button } from 'semantic-ui-react'

import UserForm from './userForm'


const UserStats = (props) => {


  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const renderMonthlies = () => {
    if (props.monthlies.length > 0) {
      let monthliesArr = []
      props.monthlies.map(
        monthly => monthliesArr.push( parseFloat(monthly.amount) )
      )
      return parseFloat(monthliesArr.reduce(reducer, 0)).toFixed(2)
      }
    }


  let spent = () => {
    if (props.total) {
      return (parseFloat(props.total).toFixed(2))
    } else { return 0 }
  }

  let amtLeft = () => {
    if (props.total) return parseFloat((localStorage.monthly_take_home) - (parseFloat(renderMonthlies()) + parseFloat(props.total))).toFixed(2)
    return parseFloat( (localStorage.monthly_take_home) - ( parseFloat(renderMonthlies() )) )
  }


  return(
    <Fragment>
    { props.userClicked ? (
      <>
        <Header size="huge" color="black" textAlign="center">
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
             <Table.Cell>Monthly Take Home (After Taxes):<Button onClick={props.userClickToggle} size="mini">Update</Button></Table.Cell>
             <Table.Cell>${parseFloat(props.currentTakeHome).toFixed(2)}</Table.Cell>
           </Table.Row>
           <Table.Row negative>
             <Table.Cell>Recurring Monthly Payments:</Table.Cell>
             <Table.Cell>-${renderMonthlies()}</Table.Cell>
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
          handleTakeHomeSubmit={props.handleTakeHomeSubmit}
          handleChange= {props.handleChange}
          takeHome = {props.takeHome}
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
             <Table.Cell>${parseFloat(props.currentTakeHome).toFixed(2)}</Table.Cell>
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

export default UserStats
