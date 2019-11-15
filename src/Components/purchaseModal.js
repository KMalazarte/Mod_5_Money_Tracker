import React from 'react'
import { Header, Image, Button, Modal } from 'semantic-ui-react'

const PurchaseModal = (props) => {
  return(
    <Modal trigger={<Button>Details</Button>}>
      <Modal.Header>{props.name} / {props.date}</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>Category: {props.category}</p>
          <p>Out of Pocket: {props.out_of_pocket}</p>
          <p>Actual Paid: {props.actual_paid}</p>
          <p>Place of Purchase: {props.place_of_purchase}</p>
          <p>Payment Method: {props.payment_method}</p>
        </Modal.Description>
        <Image size='medium' src='https://support.checkout51.com/hc/en-us/article_attachments/200464383/receipt_examples_perfect_sm.jpg' />
        <Image size='medium' src="" />
      </Modal.Content>
    </Modal>
  )
}

export default PurchaseModal
