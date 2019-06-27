import React from 'react';
import PurchaseContainer from '../Components/PurchaseContainer'
import { connect } from "react-redux"


class IndexPage extends React.Component {

  // componentDidMount() {
  //   fetch('http://localhost:3000/profile', {
  //     headers: {
  //       'Authorization': localStorage.getItem("token")
  //     }
  //   }).then(resp => resp.json())
  //     .then(console.log)
  // }

  render() {
    console.log('IndexPage props', this.props.state);
    return (
    <div>
      Hello {this.props.user.username} from IndexPage <br/>
      <PurchaseContainer />
    </div>
  )}
}

const mapStateToProps = (state) => {
  return{state}
}

export default connect(mapStateToProps)(IndexPage);
