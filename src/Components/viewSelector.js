import React, {Fragment} from 'react'
import { Dropdown } from 'semantic-ui-react'

let d = new Date()
let currentMonth = d.getMonth

const viewOptions = [
  {
    key: 'January',
    text: 'January',
    value: 'January',
    id: 0
  },
  {
    key: 'February',
    text: 'February',
    value: 'February',
    id: 1
  },
  {
    key: 'March',
    text: 'March',
    value: 'March',
    id: 2
  },
  {
    key: 'April',
    text: 'April',
    value: 'April',
    id: 3
  },
  {
    key: 'May',
    text: 'May',
    value: 'May',
    id: 4
  },
  {
    key: 'June ',
    text: 'June',
    value: 'June',
    id: 5
  },
  {
    key: 'July',
    text: 'July',
    value: 'July',
    id: 6
  },
  {
    key: 'August',
    text: 'August',
    value: 'August',
    id: 7
  },
  {
    key: 'September',
    text: 'September',
    value: 'September',
    id: 8
  },
  {
    key: 'Oct',
    text: 'Oct',
    value: 'Oct',
    id: 9
  },
  {
    key: 'November',
    text: 'November',
    value: 'November',
    id: 10
  },
  {
    key: 'December',
    text: 'December',
    value: 'December',
    id: 11
  }
]

const viewSelector = (props) => {
  return (
    <Fragment>
      <Dropdown
       placeholder='Please Select Purchase View'
       fluid
       selection
       options={viewOptions}
       defaultValue={currentMonth}
       onChange={props.viewHandler}
      />
    </Fragment>
  )
}

export default viewSelector
