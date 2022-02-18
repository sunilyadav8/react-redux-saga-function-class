import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  
  componentDidMount() {
    // this.props.dispatch({
    //   type: "FETCH_WALLET_DETAILS",
    //   payload: "sunil.yadav@ongraph.ca",
    // });
  }

  render() {
    const { fetchWalletDetail } = this.props;
    console.log("fetchWalletDetail render", fetchWalletDetail)

    console.log("render")
    return (
      <div>
        <p>SUNIl</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  addWalletDetail: state.addWalletDetail,
  fetchWalletDetail: state.fetchWalletDetail,
});
export default connect(mapStateToProps)(Home);
