import React, {Fragment} from 'react'
import { Dropdown } from 'semantic-ui-react'

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

  let d = new Date()
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  let currentMonth = () => {
    if (props.view === "") {
      return months[d.getMonth()]
    } else {
      return months[parseInt(props.view)-1]
    }
  }

  return (
    <Fragment>
      <h1>You are currently viewing: {currentMonth()}</h1>
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
