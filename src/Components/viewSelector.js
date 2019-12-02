import React, {Fragment} from 'react'
import { Dropdown } from 'semantic-ui-react'

let d = new Date()
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let currentMonth = months[d.getMonth()]

const viewOptions = [
  {
    key: 'January',
    text: 'January',
    value: 'January',
    id: "January"
  },
  {
    key: 'February',
    text: 'February',
    value: 'February',
    id: "February"
  },
  {
    key: 'March',
    text: 'March',
    value: 'March',
    id: "March"
  },
  {
    key: 'April',
    text: 'April',
    value: 'April',
    id: "April"
  },
  {
    key: 'May',
    text: 'May',
    value: 'May',
    id: "May"
  },
  {
    key: 'June ',
    text: 'June',
    value: 'June',
    id: "June"
  },
  {
    key: 'July',
    text: 'July',
    value: 'July',
    id: "July"
  },
  {
    key: 'August',
    text: 'August',
    value: 'August',
    id: "August"
  },
  {
    key: 'September',
    text: 'September',
    value: 'September',
    id: "September"
  },
  {
    key: 'October',
    text: 'October',
    value: 'October',
    id: "October"
  },
  {
    key: 'November',
    text: 'November',
    value: 'November',
    id: "November"
  },
  {
    key: 'December',
    text: 'December',
    value: 'December',
    id: "December"
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
