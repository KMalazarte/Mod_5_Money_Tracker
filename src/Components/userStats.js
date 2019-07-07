import React, { Fragment } from 'react'
import { Header } from 'semantic-ui-react'


class UserStats extends React.Component {

//
// parseFloat(miscMap.reduce(reducer, 0)).toFixed(2)

  render() {
    console.log(this.props)

    let spent = () => {
      return (parseFloat(this.props.spent).toFixed(2))
    }

    let amtLeft = () => {
      return parseFloat((localStorage.monthly_take_home) - this.props.spent).toFixed(2)
    }
    return(

    <Fragment>
      <Header size="huge" inverted color="purple">
        Hello from UserStats Page
      </Header>
      <p>Started this month w/: ${localStorage.monthly_take_home} </p>
      <p>Spent This Month: ${spent()}</p>
      <p>Left This Month: ${amtLeft()} </p>
      <p>Recurring Monthly $'s: </p>
    </Fragment>
    )
  }
}

export default UserStats
