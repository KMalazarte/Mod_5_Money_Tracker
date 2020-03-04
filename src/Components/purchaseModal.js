import React, {useCallback, useState} from 'react'
import { Header, Image, Button, Modal } from 'semantic-ui-react'

const PurchaseModal = (props) => {

  const [image, setImage] = useState('')
  // const [loading, setLoading] = useState(false)
  //
  // const uploadImage = async e => {
  //   const files = e.target.files
  //   const data = new FormData()
  //   data.append('file', files[0])
  //   data.append('upload preset', 'kevincloud89')
  //   setLoading(true)
  //   const res = await fetch(
  //     'https://api.cloudinary.com/v1_1/kevinscloud11/image/upload',
  //     {
  //       method: 'POST',
  //       body: data
  //     }
  //   )
  //   const file = await res.json()
  //
  //   setImage(file.secure_url)
  //   setLoading(false)
  // }

  const openWidget = useCallback(() => {
     window.cloudinary.createUploadWidget(
      {
        cloudName: 'kevinscloud11',
        uploadPreset: "kevincloud89"
      },
      (error, result) => {
        if (result && result.event === "success") {
          setImage(`https://res.cloudinary.com/kevinscloud11/image/upload/${result.info.path}, uploaded: true`)
          }
        }
    ).open()
  })

  return(
    <Modal trigger={<Button>Details</Button>}>
      <Modal.Header>{props.date}: {props.name}</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>{props.name}</Header>
          <p>Category: {props.category}</p>
          <p>Out of Pocket: {props.out_of_pocket}</p>
          <p>Actual Paid: {props.actual_paid}</p>
          <p>Place of Purchase: {props.place_of_purchase}</p>
          <p>Payment Method: {props.payment_method}</p>
        </Modal.Description>
        <Button onClick={openWidget}>Click Here to Upload Image</Button>
      </Modal.Content>
    </Modal>
  )
}

export default PurchaseModal
