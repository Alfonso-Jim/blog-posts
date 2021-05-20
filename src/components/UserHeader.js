import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    return <div>User Header</div>;
  }
}

// const mapStateToProps = (state) => {
//     return{
//         user: state.userId
//     }
// }

export default connect(null, { fetchUser })(UserHeader);
