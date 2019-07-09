import React from 'react'
import { Header, Image, Button, Modal } from 'semantic-ui-react'

class PurchaseModal extends React.Component {
  render() {
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
      <Image size='medium' src='https://support.checkout51.com/hc/en-us/article_attachments/200464383/receipt_examples_perfect_sm.jpg' />
      <Image size='medium' src="" />
    </Modal.Content>
  </Modal>
    )
  }
}

export default PurchaseModal
