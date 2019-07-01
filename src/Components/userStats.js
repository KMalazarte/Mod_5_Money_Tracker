import React, { Fragment } from 'react'
import { Header } from 'semantic-ui-react'

let spent = () => {

}

let amtLeft = () => {
  return (parseInt(localStorage.monthly_take_home) )
}

const UserStats = (props) => (
  <Fragment>
    <Header size="huge" inverted color="purple">
      Hello from UserStats Page
    </Header>
    <p>Most Spent Category: </p>
    <p>$ Spent This Month:  </p>
    <p>$ Left This Month: {amtLeft()} </p>

  </Fragment>
)

export default UserStats
