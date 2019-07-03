import React from 'react'
import { Header, Image, Button, Modal } from 'semantic-ui-react'

class PurchaseModal extends React.Component {
  render() {
    console.log(this.props);
    return(
  <Modal trigger={<Button>Details</Button>}>
    <Modal.Header>{this.props.date} / {this.props.name}</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>Category: {this.props.category}</p>
        <p>Out of Pocket: {this.props.out_of_pocket}</p>
        <p>Actual Paid: {this.props.actual_paid}</p>
        <p>Place of Purchase: {this.props.place_of_purchase}</p>
        <p>Payment Method: {this.props.payment_method}</p>
      </Modal.Description>
      <Image size='medium' src='https://bellyfull.net/wp-content/uploads/2017/12/How-To-Make-Perfect-Hard-Boiled-Egg-blog.jpg' />
      <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
    </Modal.Content>
  </Modal>
    )
  }
}

export default PurchaseModal
