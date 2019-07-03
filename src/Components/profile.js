import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'
import PurchaseContainer from './purchaseContainer'
import UserStats from './userStats'

// props: { user: { avatar: 'url', username: 'Chandler Bing', bio: 'bio' } }
class Profile extends React.Component {

  constructor(props) {
  super(props);
  // this.state = {
  //   }
  }

  render() {
    console.log("profile props", this.props);
    return (
    <Fragment>
        <UserStats props={this.props}/>
        <Card>
          <Image src={localStorage.avatar} />
          <Card.Content>
            <Card.Header>{localStorage.username}</Card.Header>
            <Card.Description>User #{localStorage.user_id}</Card.Description>
          </Card.Content>
        </Card>
      <PurchaseContainer
        props={this.props}
        handleChange={this.props.handleChange}
        handlePaymentChange={this.props.handlePaymentChange}
        handleCategoryChange={this.props.handleCategoryChange}
        handleSubmit={this.props.handleSubmit}
        editHandler={this.props.editHandler}
        deleteHandler={this.props.deleteHandler}
      />
    </Fragment>
  )
  }
}

// purchases={this.props.purchases}
// date={this.props.date}
// name={this.props.name}
// category={this.props.category}
// placeOfPurchase={this.props.placeOfPurchase}
// outOfPocket={this.props.outOfPocket}
// actualPaid={this.props.actualPaid}
// paymentMethod={this.props.paymentMethod}
// selected={this.props.selected}
// spent={this.props.spent}

// const mapStateToProps = ({ usersReducer: { user: { avatar, username, id } } }) => ({
//   avatar,
//   username,
//   id
// })

// const mapStateToProps = (reduxStoreState) => {
//   return {
//     avatar: reduxStoreState.usersReducer.user.avatar,
//     username: reduxStoreState.usersReducer.user.username,
//     bio: reduxStoreState.usersReducer.user.bio
//   }
// }

const mapStateToProps = ({ usersReducer: { user } }) => ({
  user
})


// const connectedToReduxHOC = connect(mapStateToProps)
// const connectedProfile = connectedToReduxHOC(Profile)
//
// const withAuthProfile = withAuth(connectedProfile)
//
// export default withAuthProfile

export default withAuth(connect(mapStateToProps)(Profile))
