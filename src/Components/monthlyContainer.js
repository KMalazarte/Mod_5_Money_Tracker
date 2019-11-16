import React, { Fragment, useState } from 'react'
import { Header, Table, Button, Icon } from 'semantic-ui-react'
import MonthlyForm from './monthlyForm'

const MonthlyContainer = (props) => {

  const [clicked, setClicked] = useState(false)

  const renderMonthlies = () => {
    if (props.monthlies) {
      return props.monthlies.map(monthly => {
        return <>
          <Table.Row>
            <Table.Cell>{monthly.name}</Table.Cell>
            <Table.Cell>${parseFloat(monthly.amount).toFixed(2)}</Table.Cell>
          </Table.Row>
        </>
      })
    }
  }

  const renderMonthliesWEdit = () => {
    if (props.monthlies) {
      return props.monthlies.map(monthly => {
        return <>
          <Table.Row>
            <Table.Cell>{monthly.name}</Table.Cell>
            <Table.Cell>${parseFloat(monthly.amount).toFixed(2)}</Table.Cell>
          </Table.Row>
          <Button.Group size="mini">
            <Button key="edit" id={monthly.id} onClick={props.editMonthlyHandler} animated >
              <Button.Content visible>Edit</Button.Content>
              <Button.Content hidden>
                <Icon name='pencil square'/>
              </Button.Content>
             </Button>
             <Button key="delete" data-id={monthly.id} onClick={props.deleteMonthlyHandler} animated>
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

  // monthliesEdit = (e) => {
  //     setState({
  //       clicked:!state.clicked
  //     })
  // }

  // <OverflowDetector
  //   onOverflowChange={handleOverflowChange}
  //   style={{ width: '100px' }}
  // >
  //   <div style={{ width: '200px' }}>Overflowing</div>
  // </OverflowDetector>

  // <OverflowDetector
  // onOverflowChange={handleOverflowChange}
  // style={{ width: '100px' }}
  // >
    return(
      <Fragment >
       { clicked ? (
        <>
          <Header textAlign="center" size="huge" inverted color="green">
            Add or Edit Recurring Monthly Expenses Below
          </Header>
          <MonthlyForm
            monthlyName= {props.monthlyName}
            monthlyAmount= {props.monthlyAmount}
            handleChange= {props.handleChange}
            handleMonthlySubmit = {props.handleMonthlySubmit}
          />
          <Table selectable color="teal">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Amount</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {renderMonthliesWEdit()}
            </Table.Body>
          </Table>
            <Button onClick={ () => setClicked(!clicked) }>
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
              {renderMonthlies()}
            </Table.Body>
          </Table>
            <Button onClick={ () => setClicked(!clicked) }>
              Add/Edit
            </Button>
        </>
    )}
    </Fragment>
)
}

export default MonthlyContainer
