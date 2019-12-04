import React, {Fragment} from 'react'
import { Dropdown } from 'semantic-ui-react'

let d = new Date()
let currentMonth = d.getMonth()

const viewOptions = [
  {
    key: 'January',
    text: 'January',
    value: 'January',
    id: 1
  },
  {
    key: 'February',
    text: 'February',
    value: 'February',
    id: 2
  },
  {
    key: 'March',
    text: 'March',
    value: 'March',
    id: 3
  },
  {
    key: 'April',
    text: 'April',
    value: 'April',
    id: 4
  },
  {
    key: 'May',
    text: 'May',
    value: 'May',
    id: 5
  },
  {
    key: 'June ',
    text: 'June',
    value: 'June',
    id: 6
  },
  {
    key: 'July',
    text: 'July',
    value: 'July',
    id: 7
  },
  {
    key: 'August',
    text: 'August',
    value: 'August',
    id: 8
  },
  {
    key: 'September',
    text: 'September',
    value: 'September',
    id: 9
  },
  {
    key: 'October',
    text: 'October',
    value: 'October',
    id: 10
  },
  {
    key: 'November',
    text: 'November',
    value: 'November',
    id: 11
  },
  {
    key: 'December',
    text: 'December',
    value: 'December',
    id: 12
  }
]

const viewSelector = (props) => {
  return (
    <Fragment>
      <Dropdown
       placeholder='Please select month to view'
       fluid
       selection
       options={viewOptions}
       onChange={props.viewHandler}
      />
    </Fragment>
  )
}

export default viewSelector
