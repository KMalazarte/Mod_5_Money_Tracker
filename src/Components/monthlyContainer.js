import React, { Fragment } from 'react'
import { Header, Image, Table, Button, Icon, Card } from 'semantic-ui-react'
import MonthlyForm from './monthlyForm'

class monthlyContainer extends React.Component {

  state={
    data:[],
    clicked:false,
    monthlies: []
  }

  // componentDidMount(){
  //   if (this.state.data.length !== this.props.monthlies.length) {
  //     this.setState(
  //       {
  //       data: this.props.monthlies
  //       }
  //     )}
  // }

  // getDerivedStateFromProps(nextProps, prevState) {
  //     if (nextProps.monthlies !== prevState.monthlies){
  //       return {
  //         monthlies: nextProps.monthlies
  //       }
  //       // return null
  //     }
  //   }


      // componentDidUpdate(prevProps, prevState) {
      //   if (prevProps.monthlies !== prevState.monthlies){
      //      return {
      //        monthlies: prevProps.monthlies
      //      }
      //      // return null
      //    }
      // }

      // componentWillReceiveProps(prevProps, newProps) {
      //     if (prevProps.monthlies !== newProps.monthlies){
      //        return {
      //          monthlies: newProps.monthlies
      //        }
      //        // return null
      //      }
      // }

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
    console.log("monthly container", this.props.monthlies)
    return(
    <Fragment>
       { this.state.clicked ? (
        <>
          <Header textAlign="center" size="huge" inverted color="purple">
            MONTHLY CONTAINER EDIT
          </Header>
          <MonthlyForm
            monthlyName= {this.props.monthlyName}
            monthlyAmount= {this.props.monthlyAmount}
            handleChange= {this.props.handleChange}
            handleMonthlySubmit = {this.props.handleMonthlySubmit}
          />
          <Table selectable color="purple">
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
            MONTHLY CONTAINER NORMAL
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
              Edit
            </Button>
        </>
    )}
    </Fragment>
)}

}

export default monthlyContainer
