import React, {Fragment} from 'react'
import { Dropdown } from 'semantic-ui-react'

const viewOptions = [
  {
    key: 'Current Month',
    text: 'Current Month',
    value: 'Current Month'
  },
  {
    key: 'Last Month',
    text: 'Last Month',
    value: 'Last Month'
  },
  {
    key: '2 Months Ago',
    text: '2 Months Ago',
    value: '2 Months Ago'
  },
  {
    key: 'All Purchases',
    text: 'All Purchases',
    value: 'All Purchases'
  },
]


const viewSelector = (props) => {
  return (
    <Fragment>
      <Dropdown
       placeholder='Please Select Purchase View'
       fluid
       selection
       options={viewOptions}
       onChange={props.viewHandler}
      />
    </Fragment>
  )
}

export default viewSelector
