import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'
import PurchaseContainer from './purchaseContainer'

// props: { user: { avatar: 'url', username: 'Chandler Bing', bio: 'bio' } }
const Profile = ({ username }) => (
  <Fragment>
      <Card>
        <Image src={"https://stickerpop-prd.s3.us-west-2.amazonaws.com/stickers/PKHwOUXxj0KgZ7Safr5fdeBIVlfqnD8KGN8WVoOS.gif"} />
        <Card.Content>
          <Card.Header>{localStorage.username}</Card.Header>

          <Card.Description>{}</Card.Description>
        </Card.Content>
      </Card>
    <PurchaseContainer />
  </Fragment>
)

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
