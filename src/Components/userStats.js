import React, { Fragment } from 'react'
import { Header } from 'semantic-ui-react'


class UserStats extends React.Component {

  render() {
    console.log("userStats", this.props);
    let spent = () => {
      return (parseInt(this.props.spent))
    }

    let amtLeft = () => {
      return (parseInt(localStorage.monthly_take_home) - this.props.spent)
    }
    return(

    <Fragment>
      <Header size="huge" inverted color="purple">
        Hello from UserStats Page
      </Header>
      <p>Most Spent Category: PLACEHOLDER</p>
      <p>Started this month w/: ${localStorage.monthly_take_home} </p>
      <p>Spent This Month: ${spent()}</p>
      <p>Left This Month: ${amtLeft()} </p>

    </Fragment>
    )
  }
}

export default UserStats
