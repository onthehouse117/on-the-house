import React, { Component } from "react";
import { connect } from "react-redux";

class NavBar extends Component {
  render() {
    return (
      <div>______NAVBAR______</div>
    );
  }
}



const mapStatetoProps = state => ({
    // TEMPLATE
    // propYouWantInserted : state.ItemName,
});

const mapDispatchToProps = state => ({
    // TEMPLATE
    // dispatchName: Parameter =>
    //   dispatch({ type: "ActionName", Parameter }),
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(NavBar);