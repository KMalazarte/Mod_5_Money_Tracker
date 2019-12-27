import React, { Fragment } from 'react'
import { Header, Table, Button } from 'semantic-ui-react'
import UserForm from './userForm'
import { useSelector } from 'react-redux'


const UserStats = (props) => {

  const allMonthlies = useSelector(state => state.monthlyReducer.monthlies)

  const allPurchases = useSelector(state => state.purchaseReducer.purchases)

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  let shownPurchases = allPurchases.filter( (purchase) => {
    let randomArr = []
    randomArr.push(purchase.date[5])
    randomArr.push(purchase.date[6])
    let monthNum = parseInt(randomArr.join(""))
    let viewNum = parseInt(props.view)
    return monthNum === viewNum
  })

  let spend = []
  shownPurchases.forEach( purchase => spend.push(parseFloat( purchase.actual_paid) ) )
  if (spend.length > 0) {
    var total = parseFloat(spend.reduce(reducer)).toFixed(2)
  }


  const renderMonthlies = () => {
    if (allMonthlies.length > 0) {
      let monthliesArr = []
      allMonthlies.map(
        monthly => monthliesArr.push( parseFloat(monthly.amount) )
      )
      return parseFloat(monthliesArr.reduce(reducer, 0)).toFixed(2)
      }
    }

  let spent = () => {
    if (total) {
      return (parseFloat(total).toFixed(2))
    } else { return 0 }
  }

  let amtLeft = () => {
    if (total) {
      return parseFloat((localStorage.monthly_take_home) - (parseFloat(renderMonthlies()) + parseFloat(total))).toFixed(2)
    } else { return parseFloat( (localStorage.monthly_take_home) - ( parseFloat(renderMonthlies() )) ) }
  }

  console.log("%c purchase user stats",'color: blue', spent())

  return(
    <Fragment>
    { props.userClicked ? (
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
